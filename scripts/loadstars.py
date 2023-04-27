import struct
import math

# LEGEND:
# RA = right ascension = "longitude"
# DEC = declination = "lattitude"

# BSC5 DATA ENTRY FORMAT:
# star number (f32)
# RA (f64)
# DEC (f64)
# spectral type (char, char)
# magnitude (i16)
# RA change per year (f32)
# DEC change per year (f32)
ENTRY_FORMAT = ">fddcchff"

# approximate star distance using annual change in RA/DEC and DEC
def star_motion_to_distance(delta_dec, delta_ra, dec):
    delta_ra_arc_length = math.sin(delta_dec) * delta_ra
    delta_norm = math.sqrt(delta_ra_arc_length**2 + delta_dec**2)
    return 1 / max(math.sin(delta_norm), 0.000005)

# extract binary data from BSC5 file
def extract_star_data(file_name):
    data = []
    with open(file_name, mode="rb") as file:
        content = file.read()
        for entry in struct.iter_unpack(ENTRY_FORMAT, content[28:]):
            distance = star_motion_to_distance(entry[6], entry[7], entry[2])
            data.append((entry[1], entry[2], distance, entry[5], entry[3], entry[0]))
        # sort by magnitude (brightness)
        data = sorted(data, key=(lambda x: x[3]), reverse=True)
    return data

# write trimmed data to BSC5ra-small
def write_trimmed_star_data(file_name, data):
    with open(file_name, mode="wb+") as file:
        for d in data[:2000]:
            file.write(bytes(struct.pack("ddfhc", d[0], d[1], d[2], d[3], d[4])))

if __name__ == "__main__":
    data = extract_star_data("../public/BSC5ra")
    write_trimmed_star_data("../public/BSC5ra-small", data)