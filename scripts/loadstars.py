import struct

data = []

with open("../public/BSC5ra", mode="rb") as file:
    content = file.read()
    for x in struct.iter_unpack(">fddcchii", content[28:]):
        data.append((x[1], x[2], x[5], x[3], x[0]))
    data = sorted(data, key=(lambda x: x[2]), reverse=True)

with open("../public/BSC5ra-small", mode="wb+") as file:
    for d in data[:2000]:
        file.write(bytes(struct.pack("ddhc", d[0], d[1], d[2], d[3])))
