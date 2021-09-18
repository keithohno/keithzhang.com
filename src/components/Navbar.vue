<template>
  <nav class="d-flex justify-content-center align-items-center">
    <div class="my-link">
      <a href="#home-section">HOME</a>
    </div>
    |
    <div class="my-link">
      <a href="#project-section">PROJECTS</a>
    </div>
    |
    <div class="my-link">
      <a href="#resume-section">RESUME</a>
    </div>
    |
    <div class="my-link">
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
  height: calc(-4px + 6vh);
  background-color: #141723;
  border-bottom: 2px solid white;
  font-size: calc(-2px + 2.7vh);
}
.my-link {
  margin-left: calc(6px + 1vw);
  margin-right: calc(6px + 1vw);
}
a {
  text-decoration: none;
}
</style>