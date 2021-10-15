<template>
  <div class="topic-segment" :style="{ height: segment_height + 'px' }">
    <div ref="inner">
      <Python v-if="topic == 'python'" />
      <JSVue v-if="topic == 'jsvue'" />
      <Java v-if="topic == 'java'" />
      <Linux v-if="topic == 'linux'" />
      <MongoDB v-if="topic == 'mongodb'" />
      <OpenGL v-if="topic == 'opengl'" />
      <Space v-if="topic == 'space'" />
      <Music v-if="topic == 'music'" />
      <Cooking v-if="topic == 'cooking'" />
    </div>
  </div>
</template>

<script>
import Python from "./Python.vue";
import JSVue from "./JSVue.vue";
import Java from "./Java.vue";
import Linux from "./Linux.vue";
import MongoDB from "./MongoDB.vue";
import OpenGL from "./OpenGL.vue";
import Space from "./Space.vue";
import Music from "./Music.vue";
import Cooking from "./Cooking.vue";
export default {
  name: "TopicSegment",
  components: {
    Python,
    JSVue,
    Java,
    Linux,
    MongoDB,
    OpenGL,
    Space,
    Music,
    Cooking,
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