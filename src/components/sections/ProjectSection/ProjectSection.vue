<template>
  <div id="project-section">
    <div class="project-section-inner">
      <div class="project-card-section">
        <ProjectCard
          desc="WhatsForDinner (WIP) - a small recipe app build using Vue, Flask, and MongoDB."
          img="whatsfordinner.png"
          github="https://github.com/keithohno/WhatsForDinner"
          live="dinner"
        />
        <ProjectCard
          desc="keithzhang.com (WIP) - this website! built with Vue, deployed with Ansible and Google Cloud."
          img="website.png"
          github="https://github.com/keithohno/keithzhang.com"
          live="#home-section"
        />
        <ProjectCard
          desc="WhatsForDinner - (WIP) a small recipe app build using Vue, Flask, and MongoDB."
          img="experiments.png"
          live="experiments"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "ProjectSection",
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
#project-section {
  min-height: 105vh;
  padding-top: 70px;
  width: 100%;
  text-align: center;
  background-color: #161a28;
}
.project-section-inner {
  margin: auto;
  position: relative;
}
@media only screen and (min-width: 600px) {
  .project-section-inner {
    width: 85%;
  }
}
.project-card-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
