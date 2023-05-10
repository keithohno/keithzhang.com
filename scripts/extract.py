import struct
import math

# LEGEND:
# RA = right ascension = "longitude"
# DEC = declination = "lattitude"

# BSC5 STAR ENTRY FORMAT:
# star number (f32)
# RA (f64)
# DEC (f64)
# spectral type (char, char)
# magnitude (i16)
# RA change per year (f32)
# DEC change per year (f32)
ENTRY_FORMAT = ">fddcchff"

# BSC5 FILE HEADER LENGTH
HEADER_LENGTH = 28


class Star:
    def __init__(self, ra, dec, distance, magnitude, colorcode):
        self.ra = ra
        self.dec = dec
        self.distance = distance
        self.magnitude = magnitude
        self.luminosity = estimate_star_luminosity(distance, magnitude)
        self.colorcode = colorcode


# approximate star distance using annual change in RA/DEC and DEC
def estimate_star_distance(delta_dec, delta_ra, dec):
    delta_ra_arc_length = math.cos(dec) * delta_ra
    delta_norm = math.sqrt(delta_ra_arc_length**2 + delta_dec**2)
    return 1 / max(math.sin(delta_norm), 0.000005)


# calculate the "innate" luminosity of a star using its apparent magnitude and distance
# the constants here are magic numbers which make the analyze.py graphs look nice
def estimate_star_luminosity(distance, magnitude):
    return int(((distance + 15000) / 30000) ** (0.1) * magnitude)


# extract raw data from BSC5 file
def extract_star_data(file_name):
    data = []
    with open(file_name, mode="rb") as file:
        content = file.read()
        for entry in struct.iter_unpack(ENTRY_FORMAT, content[HEADER_LENGTH:]):
            distance = estimate_star_distance(entry[6], entry[7], entry[2])
            star = Star(entry[1], entry[2], distance, entry[5], entry[3])
            data.append(star)
        # sort by magnitude (brightness)
        data = sorted(data, key=(lambda star: star.magnitude), reverse=True)
    return data


# write trimmed data to BSC5ra-small
def write_trimmed_star_data(file_name, data):
    with open(file_name, mode="wb+") as file:
        for star in data[:2000]:
            file.write(
                bytes(
                    struct.pack(
                        "ddfhc",
                        star.ra,
                        star.dec,
                        star.distance,
                        star.luminosity,
                        star.colorcode,
                    )
                )
            )


if __name__ == "__main__":
    data = extract_star_data("../public/BSC5ra")
    write_trimmed_star_data("../public/BSC5ra-small", data)
