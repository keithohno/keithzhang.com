<template>
  <div class="topic-tag" @click="select_tag">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    name: String,
    tag_num: Number,
  },
  methods: {
    select_tag() {
      this.$store.commit("select_tag", this.tag_num);
    },
  },
};
</script>

<style scoped>
.topic-tag {
  display: inline-block;
  background-color: rgb(22, 26, 40, 1);
  border: 2px solid white;
  padding: 5px 9px;
  margin: 5px;
}
</style>