<template>
  <div class="section-wrapper" id="home-section">
    <h1>KEITH ZHANG</h1>
    <div class="section-small">
      <div
        class="portrait-box"
        @mouseenter="toggle_moon"
        @mouseexit="toggle_moon"
      >
        <transition name="fade">
          <img
            src="../../../public/ME.png"
            v-show="!moon"
            class="portrait-face"
          />
        </transition>
        <transition name="fade">
          <img
            src="../../../public/moon.png"
            v-show="moon"
            class="portrait-moon"
          />
        </transition>
      </div>
      <div class="my-text">
        <p>
          Hi, I'm Keith, a soon-to-be computer science graduate. I want to
          <span class="blue-text">build</span> systems that solve problems, and
          <span class="yellow-text">learn</span> more about the world at large.
        </p>
        <p></p>
        <p>
          I'd <span class="pink-text">love</span> to stand on the moon someday
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
  border-radius: 50%;
  animation: pulse 3s infinite;
}
.portrait-face,
.portrait-moon {
  position: absolute;
  width: calc(90px + 6vw);
}
#home-section {
  padding-top: 60px;
}
.blue-text {
  color: #aac6ff;
}
.yellow-text {
  color: #ffeecc;
}
.pink-text {
  color: #ffccdd;
}
.blue-text,
.yellow-text,
.pink-text {
  font-weight: 500;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 rgba(255, 238, 204, 0);
  }

  50% {
    box-shadow: 0 0 rgba(255, 238, 204, 1);
  }

  100% {
    box-shadow: 0 0 0 10px rgba(255, 238, 204, 0);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
