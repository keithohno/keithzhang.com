<template>
  <div
    :class="{ 'about-details-shown': shown, 'about-details-hidden': !shown }"
    class="about-details"
  >
    <p>toggleable details section</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AboutDetail",
  props: {
    shown: Boolean,
  },
};
</script>

<style scoped>
.about-details {
  overflow: hidden;
  transition: 2s;
}
.about-details-hidden {
  max-height: 0;
}
.about-details-shown {
  max-height: 200px;
}
p {
  color: #ddeeff;
}
</style>