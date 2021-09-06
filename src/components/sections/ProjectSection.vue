<template>
  <div class="d-flex align-items-center flex-column" id="project-section">
    <p>
      <strong>
        <a href="/dinner">WhatsForDinner</a>
      </strong>
      (WIP) - a recipe app built using Vue, Flask, and MongoDB.
    </p>
    <p>
      <strong>
        <a href="https://github.com/keithohno/keithzhang.com">keithzhang.com</a>
      </strong>
      (WIP) - This website! Uses Vue on the front-end, and is automatically
      deployed to a Google Cloud server with Ansible.
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
