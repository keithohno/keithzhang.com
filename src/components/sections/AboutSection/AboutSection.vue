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
      <button @click="toggle">Toggle</button>
      <AboutDetails :shown="shown"></AboutDetails>
    </div>
  </div>
</template>

<script>
import Building from "./Building.vue";
import Learning from "./Learning.vue";
import Love from "./Love.vue";
import AboutDetails from "./AboutDetails.vue";
export default {
  name: "AboutSection",
  components: {
    Building,
    Learning,
    Love,
    AboutDetails,
  },
  data: function () {
    return {
      shown: false,
    };
  },
  methods: {
    toggle() {
      this.shown = !this.shown;
    },
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