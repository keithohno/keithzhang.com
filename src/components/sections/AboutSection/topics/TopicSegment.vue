<template>
  <div
    :class="{ 'topic-segment-shown': shown, 'topic-segment-hidden': !shown }"
    class="topic-segment"
  >
    <p>toggleable details section</p>
    <Cooking v-if="topic == 'cooking'" />
    <Python v-if="topic == 'python'" />
  </div>
</template>

<script>
import Cooking from "./Cooking.vue";
import Python from "./Python.vue";
export default {
  name: "TopicSegment",
  components: {
    Cooking,
    Python,
  },
  props: {
    shown: Boolean,
    topic: String,
  },
};
</script>

<style scoped>
.topic-segment {
  overflow: hidden;
  width: 100%;
  transition: 2s;
}
.topic-segment-hidden {
  max-height: 0;
}
.topic-segment-shown {
  max-height: 200px;
}
p {
  color: #ddeeff;
}
</style>