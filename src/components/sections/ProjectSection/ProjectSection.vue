<template>
  <div class="section-wrapper" id="project-section">
    <div class="section-large">
      <h3 class="section-header mb-4">PROJECTS</h3>
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
          desc="A few small graphical demos made with javascript."
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
h3 {
  color: #ddeeff;
}
#project-section {
  padding-top: 70px;
  background-color: #161a28;
}
.project-card-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
