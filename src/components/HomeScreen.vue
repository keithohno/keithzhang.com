<template>
  <Navbar />
  <Skyfield />
  <HomeSection />
  <ProjectSection />
  <ContactSection />
</template>

<script>
import Skyfield from "./skyfield/Skyfield.vue";
import Navbar from "./Navbar.vue";
import HomeSection from "./sections/HomeSection.vue";
import ProjectSection from "./sections/ProjectSection/ProjectSection.vue";
import ContactSection from "./sections/ContactSection.vue";
export default {
  name: "HomeScreen",
  components: {
    Skyfield,
    Navbar,
    HomeSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "KoHo";
  src: url("../../public/fonts/koho.woff") format("woff"),
    url("../../public/fonts/koho.woff2") format("woff2");
}
html {
  scroll-behavior: smooth;
}
::v-deep p {
  color: #ddeeff;
}
::v-deep .my-text {
  font-size: calc(12px + 1.2vw);
}
::v-deep h3 {
  font-family: KoHo;
  font-size: calc(20px + 3vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: calc(3px + 1vw);
  color: #ddeeff;
  width: 85%;
}
::v-deep h1 {
  font-family: KoHo;
  font-size: calc(30px + 6vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: calc(4px + 1.1vw);
  width: 85%;
}
</style>
