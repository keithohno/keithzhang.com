<template>
  <div class="tag-list">
    <Tag
      v-for="(tag, index) in tags"
      :key="tag"
      :name="tag"
      :tag_num="tag_nums[index]"
      @select-tag="$emit('select-tag')"
    />
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
    tag_nums: Array,
  },
};
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-direction: row;
}
</style>