<template>
  <div class="d-flex align-items-center flex-column" id="home-section">
    <h1>KEITH ZHANG</h1>
    <img src="../../../public/ME.png" class="portrait" />
    <p class="my-text">
      Hi, I'm Keith! I'm <span class="small-text">(almost!)</span> a
      <span class="yellow-text">computer science</span> graduate, looking to
      <span class="yellow-text">apply</span> my skills and
      <span class="yellow-text">build</span> experience as a software engineer,
      with a focus towards <span class="yellow-text">front-end</span> web
      development.
    </p>
    <p></p>
    <p class="my-text">
      I'd like to stand on the <span class="yellow-text">moon</span> someday :)
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeSection",
};
</script>

<style scoped>
* {
  color: #ddeeff;
}
.portrait {
  margin-top: 3vh;
  margin-bottom: 5vh;
  width: calc(90px + 6vw);
}
p {
  max-width: 600px;
  width: 85%;
}
#home-section {
  padding-top: 60px;
  min-height: 105vh;
}
.yellow-text {
  color: #ffeecc;
  font-weight: 500;
}
</style>
