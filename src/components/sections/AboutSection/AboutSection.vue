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
      <TopicSegment :topic="topic" />
    </div>
  </div>
</template>

<script>
import Building from "./categories/Building.vue";
import Learning from "./categories/Learning.vue";
import Love from "./categories/Love.vue";
import TopicSegment from "./topics/TopicSegment.vue";

let topics = [
  "python",
  "jsvue",
  "java",
  "linux",
  "mongodb",
  "opengl",
  "space",
  "music",
  "cooking",
];

export default {
  name: "AboutSection",
  components: {
    Building,
    Learning,
    Love,
    TopicSegment,
  },
  computed: {
    topic() {
      return topics[this.$store.state.tag];
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