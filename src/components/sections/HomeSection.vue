<template>
  <div class="section-wrapper" id="home-section">
    <h1>KEITH ZHANG</h1>
    <div class="section-small">
      <div class="portrait-box">
        <img
          src="../../../public/ME.png"
          v-if="!moon"
          class="portrait"
          @click="toggle_moon"
        />
        <img
          src="../../../public/moon.png"
          v-if="moon"
          class="portrait-moon"
          @click="toggle_moon"
        />
      </div>
      <div>
        <p class="my-text">
          Hi, I'm Keith! I'm <span class="small-text">(almost!)</span> a
          <span class="yellow-text">computer science</span> graduate, looking to
          <span class="yellow-text">apply</span> my skills and
          <span class="yellow-text">build</span> experience as a software
          engineer, with a focus towards
          <span class="yellow-text">front-end</span> web development.
        </p>
        <p></p>
        <p class="my-text">
          I'd like to stand on the <span class="yellow-text">moon</span> someday
          :)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection",
  data: function () {
    return {
      moon: false,
    };
  },
  methods: {
    toggle_moon() {
      this.moon = !this.moon;
    },
  },
};
</script>

<style scoped>
.my-text {
  color: #ddeeff;
}
h1 {
  font-family: KoHo;
  font-size: calc(30px + 6vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: calc(4px + 1.1vw);
  color: #ddeeff;
  width: 95%;
}
.portrait-box {
  margin-top: 3vh;
  margin-bottom: 5vh;
  width: calc(90px + 6vw);
  height: calc(90px + 6vw);
  border-radius: calc(45px + 3vw);
}
.portrait {
  position: absolute;
  width: calc(90px + 6vw);
}
.portrait-moon {
  position: absolute;
  width: calc(90px + 6vw);
}
#home-section {
  padding-top: 60px;
}
.yellow-text {
  color: #ffeecc;
  font-weight: 500;
}
</style>
