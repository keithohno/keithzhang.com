<template>
  <div class="transition-box" :style="style">
    <div class="transition-upper"></div>
    <div class="transition-lower"></div>
  </div>
</template>

<script>
export default {
  name: "Transition",
  props: {
    upper_color: String,
    lower_color: String,
  },
  computed: {
    style() {
      return {
        "--upper-color": this.upper_color,
        "--lower-color": this.lower_color,
      };
    },
  },
};
</script>

<style scoped>
.transition-box {
  margin-top: -1px;
  width: 100%;
  height: 10vh;
}
.transition-lower {
  background-color: var(--lower-color);
  position: absolute;
  width: 100%;
  height: 10vh;
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 50% 10vh);
}
.transition-upper {
  background-color: var(--upper-color);
  position: absolute;
  width: 100%;
  height: 10vh;
  clip-path: polygon(100% 0, 0 0, 50% 10vh);
}
</style>