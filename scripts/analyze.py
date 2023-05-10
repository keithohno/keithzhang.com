import matplotlib.pyplot as plt
from extract import extract_star_data, estimate_star_luminosity

data = extract_star_data("../public/BSC5ra")


def plot_distances(data):
    plt.clf()
    plt.hist([star.distance for star in data], bins=100)
    plt.savefig("out/distances.png")


def plot_magnitudes(data):
    plt.clf()
    plt.hist([star.magnitude for star in data], bins=100)
    plt.savefig("out/magnitudes.png")


def plot_luminosities(data):
    plt.clf()
    plt.hist(
        [estimate_star_luminosity(star.distance, star.magnitude) for star in data],
        bins=100,
    )
    plt.savefig("out/luminosities.png")


def plot_decs(data):
    plt.clf()
    plt.hist([star.dec for star in data], bins=100)
    plt.savefig("out/decs.png")


def plot_ras(data):
    plt.clf()
    plt.hist([star.ra for star in data], bins=100)
    plt.savefig("out/ras.png")


if __name__ == "__main__":
    plot_distances(data)
    plot_magnitudes(data)
    plot_luminosities(data)
    plot_decs(data)
    plot_ras(data)
