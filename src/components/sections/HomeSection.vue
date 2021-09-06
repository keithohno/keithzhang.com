<template>
  <div class="d-flex align-items-center flex-column" id="home-section">
    <h1>KEITH ZHANG</h1>
    <img src="../../../public/ME.png" class="portrait" />
    <p>Hi! I'm Keith. Welcome to my website!</p>
    <p>
      [ insert nice, catchy bio about who i am, what i do, and where i want to
      be someday ]
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeSection",
};
</script>

<style scoped>
@font-face {
  font-family: "KoHo";
  src: url("../../../public/fonts/koho.woff") format("woff"),
    url("../../../public/fonts/koho.woff2") format("woff2");
}
* {
  color: #ddeeff;
}
.portrait {
  margin-top: 20px;
  max-width: 160px;
  margin-bottom: 40px;
}
h1 {
  font-family: KoHo;
  font-size: calc(50px + 5vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: 10px;
  width: 85%;
}
p {
  max-width: 600px;
  width: 85%;
  font-size: 20px;
}
#home-section {
  padding-top: 60px;
  min-height: 105vh;
}
</style>
