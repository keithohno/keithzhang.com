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
</style>
