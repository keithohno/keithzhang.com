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
  margin-bottom: -1px;
  width: 100%;
  height: calc(2vh + 4vw);
}
.transition-lower {
  background-color: var(--lower-color);
  position: absolute;
  width: 100%;
  height: calc(2vh + 4vw);
  clip-path: polygon(
    0 20%,
    15% 1%,
    50% 99%,
    85% 1%,
    100% 20%,
    100% 100%,
    0 100%
  );
}
.transition-upper {
  background-color: var(--upper-color);
  position: absolute;
  width: 100%;
  height: calc(2vh + 4vw);
  clip-path: polygon(0 0, 100% 0, 100% 20%, 85% 1%, 50% 99%, 15% 1%, 0 20%);
}
</style>