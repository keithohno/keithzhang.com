<template>
  <div class="d-flex align-items-center flex-column" id="contact-section">
    <p>EMAIL: keith.zhang@stonybrook.edu</p>
    <p>
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
* {
  color: #ddeeff;
}
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
