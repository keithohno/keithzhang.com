<template>
  <nav class="d-flex justify-content-center align-items-center">
    <div class="mx-3">
      <a href="#home-section">HOME</a>
    </div>
    |
    <div class="mx-3">
      <a href="#project-section">PROJECTS</a>
    </div>
    |
    <div class="mx-3">
      <a href="#contact-section">CONTACT</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
* {
  color: #ddeeff;
}
nav {
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  background-color: #161a28;
  border-bottom: 2px solid white;
  font-size: 18px;
}
</style>