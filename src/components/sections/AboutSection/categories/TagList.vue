<template>
  <div class="tag-list">
    <Tag v-for="tag in tags" :key="tag" :name="tag" />
  </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
  name: "TagList",
  components: {
    Tag,
  },
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-direction: row;
}
</style>