<template>
  <CategoryContainer icon="building_icon.png" title="Build">
    <p>"to form by ordering and uniting materials into a composite whole"</p>
    <p>
      Ever since my childhood days of jigsaws and legos, I've always enjoyed
      seeing small, intricate details coalesce into a cohesive, functioning
      whole. My passion for computer science begins with my proclivity to
      create.
    </p>
    <TagList
      :tags="['Python', 'JS/Vue', 'Java', 'Linux']"
      :tag_nums="[0, 1, 2, 3]"
    />
  </CategoryContainer>
</template>

<script>
import CategoryContainer from "./CategoryContainer.vue";
import TagList from "./TagList.vue";
export default {
  name: "Building",
  components: {
    CategoryContainer,
    TagList,
  },
};
</script>