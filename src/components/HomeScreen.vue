<template>
  <Navbar />
  <Skyfield />
  <div id="root">
    <HomeSection />
    <Divider upper_color="rgb(0, 0, 0, 0)" lower_color="#eee0c2" />
    <ProjectSection />
    <Divider upper_color="#eee0c2" lower_color="#rgb(0, 0, 0, 0)" />
    <AboutSection />
    <Divider upper_color="rgb(0, 0, 0, 0)" lower_color="#eee0c2" />
    <ContactSection />
  </div>
</template>

<script>
import Skyfield from "./skyfield/Skyfield.vue";
import Navbar from "./Navbar.vue";
import HomeSection from "./sections/HomeSection.vue";
import ProjectSection from "./sections/ProjectSection/ProjectSection.vue";
import AboutSection from "./sections/AboutSection/AboutSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import Divider from "./sections/Divider.vue";
export default {
  name: "HomeScreen",
  components: {
    Skyfield,
    Navbar,
    HomeSection,
    AboutSection,
    ProjectSection,
    ContactSection,
    Divider,
  },
};
</script>

<style>
@font-face {
  font-family: "KoHo";
  src: url("../../public/fonts/koho.woff") format("woff"),
    url("../../public/fonts/koho.woff2") format("woff2");
}
html {
  scroll-behavior: smooth;
}
html,
body {
  overflow: hidden;
}
.section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 105vh;
}
.section-small {
  width: 85%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-large {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (min-width: 600px) {
  .section-large {
    width: 85%;
  }
}
.section-header {
  font-family: KoHo;
  font-size: calc(20px + 3vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: calc(3px + 1vw);
}
.my-text {
  font-size: calc(12px + 1.2vw);
}
#root {
  position: absolute;
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
.section-wrapper {
  scroll-snap-align: start;
}
</style>