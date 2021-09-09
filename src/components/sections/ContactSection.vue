<template>
  <div class="d-flex align-items-center flex-column" id="contact-section">
    <h3 class="mb-4">CONTACT ME</h3>
    <p class="my-text">EMAIL: keith.zhang@stonybrook.edu</p>
    <p class="my-text">
      I will eventually make a nice little form that sends me an email but for
      now you'll have to do it yourself ;)
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
p {
  max-width: 600px;
  width: 85%;
  font-size: 20px;
}
#contact-section {
  min-height: 105vh;
  padding-top: 60px;
}
</style>
