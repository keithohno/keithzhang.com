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
          Hi, I'm Keith, a soon-to-be computer science graduate. I love
          <span class="yellow-text">building</span> systems that work, and
          <span class="yellow-text">learning</span> about the world we live in.
        </p>
        <p></p>
        <p class="my-text">
          I'd <span class="yellow-text">love</span> to stand on the moon someday
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
