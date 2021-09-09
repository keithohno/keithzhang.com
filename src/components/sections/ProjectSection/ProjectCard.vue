<template>
  <div class="project-card">
    <img :src="img_src(img)" class="project-card-img" />
    <div class="project-card-hover">
      <p class="project-card-desc">
        {{ desc }}
      </p>
      <div class="project-card-link-section">
        <div class="project-card-link" v-if="github">
          <a :href="github">Github</a>
        </div>
        <div class="project-card-link" v-if="live">
          <a :href="live">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var asset_src = require.context("../../../../public/", false, /\.png$/);

export default {
  name: "ProjectCard",
  props: {
    desc: String,
    img: String,
    github: String,
    live: String,
  },
  methods: {
    img_src(path) {
      return asset_src("./" + path);
    },
  },
};
</script>

<style>
.project-card {
  margin: calc(2px + 1vw);
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  overflow: hidden;
}
.project-card-hover {
  z-index: 4;
  width: 300px;
  height: 300px;
  padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(22, 26, 40, 0);
  opacity: 0;
  transition: 0.6s;
}

.project-card-hover > * {
  opacity: 0;
  transition: 0.6s;
}

.project-card-img {
  transform: none;
  transition: 0.8s;
}

.project-card:hover .project-card-hover,
.project-card:active .project-card-hover {
  background-color: rgb(22, 26, 40, 0.8);
  opacity: 1;
  transition: 0.6s;
}

.project-card:hover .project-card-hover > *,
.project-card:active .project-card-hover > * {
  opacity: 1;
  transition: 0.6s;
}

.project-card:hover .project-card-img,
.project-card:active .project-card-img {
  transform: scale(1.1);
  transition: 0.8s;
}

.project-card-desc {
  font-size: 18px;
  color: white;
}
.project-card-img {
  height: 300px;
}
.project-card-link-section {
  display: flex;
  flex-direction: row;
}
.project-card-link {
  background-color: rgb(22, 26, 40, 1);
  border: 2px solid white;
  padding: 5px 9px;
  margin: 5px;
}
.project-card-link a {
  color: white;
  text-decoration: none;
}
</style>