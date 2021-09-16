<template>
  <svg id="canvas">
    <g>
      <circle
        v-for="obj in objs"
        :key="obj.key"
        :cx="obj.x"
        :cy="obj.y"
        :r="obj.radius"
        :fill="obj.fill"
        :opacity="obj.opac"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Skyfield",
  data: function () {
    return {
      objs: [],
      total: 0,
      x_max: 0,
      x_min: 0,
      y_max: 0,
    };
  },
  methods: {
    randint(max) {
      return Math.floor(Math.random() * max);
    },
    start_render() {
      let t_prev;
      let render = (t) => {
        this.generate_all();
        let dt = t - t_prev;
        t_prev = t;
        if (dt > 10) {
          for (let obj of this.objs) {
            obj.x += (dt / 6000) * obj.speed;
          }
          for (let i = 0; i < this.objs.length; i++) {
            if (this.objs[i].x > document.documentElement.scrollWidth) {
              this.objs.splice(i, 1);
              i -= 1;
            }
          }
          this.x_min += dt / 60;
        }
        requestAnimationFrame(render);
      };
      render();
    },
    generate_all() {
      if (this.x_min > -1) {
        if (this.x_min > document.documentElement.scrollWidth) {
          this.x_min = document.documentElement.scrollWidth;
        }
        for (let i = 0; i * 50 < document.documentElement.scrollHeight; i++) {
          this.generate(this.x_min - 20, 50 * i);
        }
        this.x_min -= 20;
      }
      while (this.x_max < document.documentElement.scrollWidth) {
        for (let i = 0; i * 50 < document.documentElement.scrollWidth; i++) {
          this.generate(this.x_max + 1, 50 * i);
        }
        this.x_max += 20;
      }
    },
    generate(x_start, y_start) {
      let new_stars = [];
      if (Math.random() > 0.96) {
        let color_n = this.randint(7);
        let color = "#FFFFFF";
        if (color_n == 6) {
          color = "#FFC5A2";
        } else if (color_n >= 4) {
          color = "#E6E6FF";
        } else if (color_n >= 2) {
          color = "#FFF9B5";
        }
        new_stars.push({
          key: this.total,
          x: x_start + this.randint(20),
          y: y_start + this.randint(50),
          radius: 1 + this.randint(3) + this.randint(2),
          speed: 50 + this.randint(50),
          fill: color,
          opac: 0.2 + Math.random() * 0.4,
        });
        this.total += 1;
      }
      this.objs.push(...new_stars);
    },
  },
  mounted() {
    this.start_render();
  },
};
</script>

<style scoped>
#canvas {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  left: 0;
  top: 0;
  z-index: -10;
  background-image: linear-gradient(#161a28, #1a2840);
}
</style>