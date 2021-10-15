<template>
  <div class="category-container">
    <div class="title-bar">
      <img :src="img_src(icon)" class="title-icon" />
      <p class="title-text">
        {{ title }}
      </p>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let asset_src = require.context("../../../../../public/", false, /\.png$/);

export default {
  name: "CategoryContainer",
  props: { icon: String, title: String },
  methods: {
    img_src(path) {
      return asset_src("./" + path);
    },
  },
};
</script>

<style scoped>
div {
  text-align: left;
  color: #ddeeff;
}
.category-container {
  margin: calc(2px + 1vw);
  display: inline-block;
  min-width: 300px;
  width: 300px;
  flex-grow: 1;
  overflow: hidden;
}
.title-icon {
  width: 70px;
  height: 70px;
}
.title-text {
  padding-left: 25px;
  font-size: 50px;
  font-weight: 500;
  font-family: KoHo;
}
.title-bar {
  display: flex;
  flex-direction: row;
}
.card-content {
  padding-right: 20px;
}
</style>