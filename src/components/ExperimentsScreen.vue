<template>
  <div>
    <h1 align="center" id="test">Life+</h1>
    <canvas id="sandbox" class="box large-box"></canvas>
    <div class="button-container">
      <button type="button" id="pause-play">Play</button>
      <input
        type="range"
        min="1"
        max="10"
        value="1"
        class="slider"
        id="speed"
      />
    </div>
    <div class="box large-box text-box">
      <p>
        This is
        <em>Life+</em>, a celluar automaton which is essentially Conway's Game
        of Life with a bunch of extra rules and cell states. Below is a small
        guide on how these extra cell states work. Back when I wrote this code
        I'm sure I could explain what exactly the guide means but I've
        completely forgotten how it all works at this point. Good luck :)
      </p>
      <p>
        <b>Cell Types:</b>
      </p>
      <ul>
        <li>Normal (white)</li>
        <li>Dead (black)</li>
        <li>Dormant (gray)</li>
        <li>Light (light green)</li>
        <li>Dark (dark green)</li>
        <li>Flux (orange)</li>
      </ul>
      <p>
        <b>Rules:</b>
      </p>
      <ul>
        <li>
          Normal:
          <ul>
            <li>pop 2|3 --> normal</li>
            <li>pop 8 --> dormant</li>
            <li>default --> dead</li>
            <li>pop: 1</li>
          </ul>
        </li>
        <li>
          Dead:
          <ul>
            <li>pop 3 --> normal</li>
            <li>default --> dead</li>
            <li>pop: 0</li>
          </ul>
        </li>
        <li>
          Dormant:
          <ul>
            <li>pop 3 --> normal</li>
            <li>pop 1 --> light</li>
            <li>pop 0 --> dark</li>
            <li>default --> dormant</li>
            <li>pop: 0</li>
          </ul>
        </li>
        <li>
          Light:
          <ul>
            <li>pop 0|1 --> light</li>
            <li>light --> flux</li>
            <li>dark --> flux</li>
            <li>pop: 0|1 -- prefers normal > dormant > dead</li>
          </ul>
        </li>
        <li>
          Dark:
          <ul>
            <li>pop 0|1 --> dark</li>
            <li>light --> flux</li>
            <li>dark --> flux</li>
            <li>pop: -1|0 -- prefers normal > dormant > dead</li>
          </ul>
        </li>
        <li>
          Flux:
          <ul>
            <li>default --> dead</li>
            <li>pop: -1|0|1 -- prefers normal > dormant > dead</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperimentsScreen",
  mounted() {
    this.$nextTick(() => {
      this.run();
    });
  },
  methods: {
    run() {
      // Enum for cell states
      var Cell = Object.freeze({
        DEAD: 1,
        NORMAL: 2,
        DORMANT: 3,
        LIGHT: 4,
        DARK: 5,
        FLUX: 6,
      });

      // Array representing the "Moore neighborhood" (the 8 cells surrounding a cell)
      var Neighborhood = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];

      var Life = {};

      init();
      // Setup function
      function init() {
        // Setting up the canvas and context
        Life.canvas = document.getElementById("sandbox");
        // These two lines prevent CSS from messing up the dimensions of the canvas
        //  (which happens sometimes)
        Life.canvas.width = Life.canvas.clientWidth;
        Life.canvas.height = Life.canvas.clientHeight;
        Life.context = Life.canvas.getContext("2d");
        // Prevent clicking within the canvas from selecting text
        Life.canvas.addEventListener("mousedown", function(e) {
          e.preventDefault();
        });

        // Setting up the cell array
        //  As of now it's just based on screen size (canvas.width) and a predetermined
        //  cell size (4)
        Life.cellSize = 4;
        Life.cellArray = createCellArray(
          Math.ceil(Life.canvas.width / Life.cellSize)
        );

        // Creating the 'acorn' seed
        var b = Math.floor(Life.cellArray.length / 2);
        var seed = [
          [b - 3, b],
          [b - 2, b],
          [b - 2, b - 2],
          [b, b - 1],
          [b + 1, b],
          [b + 2, b],
          [b + 3, b],
        ];
        writeCells(Life, seed, Cell.NORMAL);

        // Add event handling for buttons/sliders
        initButtons();

        // Time related variables
        Life.paused = true;
        Life.period = 200;
        Life.lastUpdate = Date.now();

        // First render
        render(Life);

        // Starting the loop! It runs every 100 milliseconds
        setInterval(function() {
          tick(Life);
        }, 0);
      }

      function initButtons() {
        // Handle the pause/play button
        document
          .getElementById("pause-play")
          .addEventListener("click", function() {
            if (Life.paused) {
              document.getElementById("pause-play").innerHTML = "Pause";
            } else {
              document.getElementById("pause-play").innerHTML = "Play";
            }
            Life.paused = !Life.paused;
          });

        // Handle the speed buttons
        document.getElementById("speed").oninput = function() {
          Life.period = 1000 / this.value;
        };
      }

      function tick(Life) {
        var now = Date.now();
        if (Life.paused) {
          Life.lastUpdate = now;
        } else if (now > Life.lastUpdate) {
          // Update and render the current state
          update(Life);
          render(Life);
          Life.lastUpdate += Life.period;
        }
      }

      // Looping function
      function update(Life) {
        // The program works by creating lists of cells that need to be altered each round
        var tNormal = [];
        var tDead = [];
        var tDormant = [];
        var tLight = [];
        var tDark = [];
        var tFlux = [];
        // Iterates through each cell
        for (var i = 0; i < Life.cellArray.length; i++) {
          for (var j = 0; j < Life.cellArray.length; j++) {
            // Counts the population of the neighborhood of each cell
            //  Also keeps track of variations due to light/dark/flux cells
            var basePop = 0;
            var minPop = 0;
            var maxPop = 0;
            for (var k = 0; k < 8; k++) {
              var m = Neighborhood[k][0],
                n = Neighborhood[k][1];
              // Double check that the cell isn't out of bounds
              if (Life.cellArray[i + m] && Life.cellArray[i + m][j + n]) {
                if (Life.cellArray[i + m][j + n] === Cell.NORMAL) {
                  basePop++;
                } else if (Life.cellArray[i + m][j + n] === Cell.LIGHT) {
                  basePop++;
                  maxPop++;
                } else if (Life.cellArray[i + m][j + n] === Cell.DARK) {
                  basePop++;
                  minPop--;
                } else if (Life.cellArray[i + m][j + n] === Cell.FLUX) {
                  basePop++;
                  maxPop++;
                  minPop--;
                }
              }
            }
            maxPop += basePop;
            minPop += basePop;
            // Pushes to the tNormal, tDead, etc. lists based on a set of rules
            //  A summary of said rules can be found on the actual web page
            if (Life.cellArray[i][j] === Cell.NORMAL) {
              if (minPop <= 3 && maxPop >= 2) {
                continue;
              } else if (minPop >= 8) {
                tDormant.push([i, j]);
              } else {
                tDead.push([i, j]);
              }
            } else if (Life.cellArray[i][j] === Cell.LIGHT) {
              if (basePop > 1) {
                tFlux.push([i, j]);
              } else if (minPop != maxPop) {
                tFlux.push([i, j]);
              }
            } else if (Life.cellArray[i][j] === Cell.DARK) {
              if (basePop > 1) {
                tFlux.push([i, j]);
              } else if (minPop != maxPop) {
                tFlux.push([i, j]);
              }
            } else if (Life.cellArray[i][j] === Cell.FLUX) {
              tDead.push([i, j]);
            } else if (Life.cellArray[i][j] === Cell.DORMANT) {
              if (basePop === 3) {
                tNormal.push([i, j]);
              } else if (basePop === 1) {
                tLight.push([i, j]);
              } else if (basePop === 0) {
                tDark.push([i, j]);
              }
            } else {
              if ((minPop <= 3) & (maxPop >= 3)) {
                tNormal.push([i, j]);
              }
            }
          }
        }
        // Update the cell array with the cell lists
        writeCells(Life, tNormal, Cell.NORMAL);
        writeCells(Life, tDead, Cell.DEAD);
        writeCells(Life, tDormant, Cell.DORMANT);
        writeCells(Life, tLight, Cell.LIGHT);
        writeCells(Life, tDark, Cell.DARK);
        writeCells(Life, tFlux, Cell.FLUX);
      }

      // Function for writing to the cell array
      function writeCells(Life, list, state) {
        for (var i = 0; i < list.length; i++) {
          Life.cellArray[list[i][0]][list[i][1]] = state;
        }
      }

      // Function for drawing the cell array onto the canvas
      function render(Life) {
        var cellSize = Life.cellSize;
        for (var i = 0; i < Life.cellArray.length; i++) {
          for (var j = 0; j < Life.cellArray.length; j++) {
            if (Life.cellArray[i][j] === Cell.NORMAL) {
              Life.context.fillStyle = "white";
            } else if (Life.cellArray[i][j] === Cell.DORMANT) {
              Life.context.fillStyle = "gray";
            } else if (Life.cellArray[i][j] === Cell.LIGHT) {
              Life.context.fillStyle = "#77CC77";
            } else if (Life.cellArray[i][j] === Cell.DARK) {
              Life.context.fillStyle = "#004400";
            } else if (Life.cellArray[i][j] === Cell.FLUX) {
              Life.context.fillStyle = "orange";
            } else {
              Life.context.fillStyle = "black";
            }
            Life.context.fillRect(
              i * cellSize,
              j * cellSize,
              cellSize,
              cellSize
            );
          }
        }
      }

      // Function for creating an empty cell array
      function createCellArray(size) {
        var cellArray = [...Array(size)].map(() => Array(size).fill(Cell.DEAD));
        return cellArray;
      }
    },
  },
};
</script>

<style scoped>
input.slider {
  vertical-align: bottom;
}

.button-container {
  display: block;
  margin: auto;
  text-align: center;
}

.box {
  box-sizing: border-box;
  border: 1px solid black;
  display: block;
  margin: auto;
}

.large-box {
  width: 90vmin;
  height: 90vmin;
}

.text-box {
  height: 100%;
  border: none;
}
</style>
