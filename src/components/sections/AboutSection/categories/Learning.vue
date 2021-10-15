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
    <ul>
      <li>
        MongoDB -- I used MongoDB to construct the data end of WhatsForDinner!
        Learning how to make more specialized queries that leverage search
        indexing is on my current TODO list, especially as I hope to grow the
        data set.
      </li>
      <li>
        OpenGL -- One of my favorite parts of software engineering is seeing
        abstract data rendered into tangible, physical components. After taking
        an introductory course last year, I've been learning modern OpenGL (with
        C++), and creating simple 2D and 3D demos.
      </li>
    </ul>
  </CategoryContainer>
</template>

<script>
import CategoryContainer from "./CategoryContainer.vue";
export default {
  name: "Learning",
  components: {
    CategoryContainer,
  },
};
</script>