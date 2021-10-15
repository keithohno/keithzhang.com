<template>
  <CategoryContainer icon="learning_icon.png" title="Learn">
    <p>
      "to acquire knowledge of or skill in by study, instruction, or experience"
    </p>
    <p>
      As a student, Christian, and young adult, I am constantly humbled by the
      vast nature of the world we live in. Over the coming months and years, I
      hope to explore where the knowledge I've accumulated intersects the needs
      of the communities around me.
    </p>
    <TagList :tags="['MongoDB', 'OpenGL']" />
  </CategoryContainer>
</template>

<script>
import CategoryContainer from "./CategoryContainer.vue";
import TagList from "./TagList.vue";
export default {
  name: "Learning",
  components: {
    CategoryContainer,
    TagList,
  },
};
</script>