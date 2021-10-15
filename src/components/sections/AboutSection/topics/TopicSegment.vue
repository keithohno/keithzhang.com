<template>
  <div class="topic-segment" :style="{ height: segment_height + 'px' }">
    <div ref="inner">
      <Cooking v-if="topic == 'cooking'" />
      <Python v-if="topic == 'python'" />
    </div>
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
  data: function () {
    return {
      segment_height: 0,
    };
  },
  props: {
    shown: Boolean,
    topic: String,
  },
  watch: {
    topic() {
      this.animate_height();
    },
    shown() {
      if (!this.shown) {
        this.segment_height = 0;
      } else {
        this.animate_height();
      }
    },
  },
  methods: {
    animate_height() {
      requestAnimationFrame(() => {
        this.segment_height = this.$refs.inner.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.topic-segment {
  overflow: hidden;
  width: 100%;
  transition: 2s;
}
p {
  color: #ddeeff;
}
</style>