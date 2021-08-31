<template>
  <div class="d-flex align-items-center flex-column">
    <h1 class="keithzhang">KEITH ZHANG</h1>
    <img src="../../public/ME.png" class="portrait" />
    <p>
      Hi I'm Keith. I'm still figuring out how all this stuff works, so the
      website is very much a work in progress haha.
    </p>
    <p>
      <strong>
        <a href="/dinner">WhatsForDinner</a>
      </strong>
      (WIP) - a recipe app built using Vue, Flask, and MongoDB.
    </p>
    <p>
      <strong>
        <router-link to="/experiments">Experiments</router-link>
      </strong>
      - a couple small projects.
    </p>
  </div>
  <Skyfield />
</template>

<script>
import Skyfield from "./skyfield/Skyfield.vue";
export default {
  name: "HomeScreen",
  components: {
    Skyfield,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "KoHo";
  src: url("../../public/fonts/koho.woff") format("woff"),
    url("../../public/fonts/koho.woff2") format("woff2");
}
* {
  color: #ddeeff;
}
.keithzhang {
  margin-top: 45px;
}
.portrait {
  margin-top: 20px;
  max-width: 160px;
  margin-bottom: 40px;
}
h1 {
  font-family: KoHo;
  font-size: 96px;
  font-weight: 600;
  letter-spacing: 10px;
}
html {
  scroll-behavior: smooth;
}
</style>
