<template>
  <CategoryContainer icon="love_icon.png" title="Love">
    <p>
      "an intense feeling of deep affection; a great interest and pleasure in
      something"
    </p>
    <p>Surprise, surprise, I'm not just a boring CS kid!</p>
    <TagList :tags="['Space', 'Music', 'Cooking']" :tag_nums="[6, 7, 8]" />
  </CategoryContainer>
</template>

<script>
import CategoryContainer from "./CategoryContainer.vue";
import TagList from "./TagList.vue";
export default {
  name: "Love",
  components: {
    CategoryContainer,
    TagList,
  },
};
</script>