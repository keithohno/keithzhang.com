<template>
  <div class="d-flex align-items-center flex-column" id="project-section">
    <p>
      <strong>
        <a href="/dinner">WhatsForDinner</a>
      </strong>
      (WIP) - a recipe app built using Vue, Flask, and MongoDB. KEITH ZHANG
    </p>
    <p>
      <strong>
        <router-link to="/experiments">Experiments</router-link>
      </strong>
      - a couple small projects.
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
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
#project-section {
  min-height: 105vh;
  padding-top: 60px;
}
</style>
