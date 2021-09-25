<template>
  <div class="section-wrapper" id="about-section">
    <div class="section-large">
      <h3 class="section-header">ABOUT ME</h3>
      <p>
        This section is very much a work in progress, so bear with me as I sort
        things out!
      </p>
      <Building />
      <Learning />
      <Love />
    </div>
  </div>
</template>

<script>
import Building from "./Building.vue";
import Learning from "./Learning.vue";
import Love from "./Love.vue";
export default {
  name: "AboutSection",
  components: {
    Building,
    Learning,
    Love,
  },
};
</script>

<style scoped>
h3,
p {
  color: #ddeeff;
}
#about-section {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>