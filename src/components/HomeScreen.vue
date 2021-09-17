<template>
  <Navbar />
  <Skyfield />
  <HomeSection />
  <ResumeSection />
  <ProjectSection />
  <ContactSection />
</template>

<script>
import Skyfield from "./skyfield/Skyfield.vue";
import Navbar from "./Navbar.vue";
import HomeSection from "./sections/HomeSection.vue";
import ProjectSection from "./sections/ProjectSection/ProjectSection.vue";
import ResumeSection from "./sections/ResumeSection/ResumeSection.vue";
import ContactSection from "./sections/ContactSection.vue";
export default {
  name: "HomeScreen",
  components: {
    Skyfield,
    Navbar,
    HomeSection,
    ResumeSection,
    ProjectSection,
    ContactSection,
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
.section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-small {
  width: 85%;
  min-height: 105vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-large {
  width: 100%;
  display: flex;
  min-height: 105vh;
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
</style>