<template>
  <div class="section-wrapper" id="about-section">
    <div class="section-large">
      <p>
        This section is very much a work in progress, so bear with me as I sort
        things out!
      </p>
      <div class="topic-section">
        <Building />
        <Learning />
        <Love />
      </div>
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
.topic-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>