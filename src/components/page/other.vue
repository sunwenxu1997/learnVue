<template>
  <div class="overall">
    <input type="text" @keyup.enter="enterNum()" v-model="num" />
    <div class="video-box">
      <video
        id="my-video"
        class="video-js"
        preload="auto"
        width="100%"
        height="100%"
        data-setup="{}"
      >
       <source src="@/assets/mp4/1.mp4" type="video/mp4" />
        <source src="@/assets/mp4/2.mp4" type="video/mp4" />
      </video>
      <!-- <video id="video" width="100%" height="100%" autoplay preload muted>
       
      </video> -->
      <div class="play" @click="clickPlay()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      mp4List: []
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    enterNum() {
      let _this = this;
      _this.mp4List = _this.num.split("");
      console.log(_this.mp4List);
    },
    clickPlay() {
      let video = document.getElementById("my-video");
      let btn = document.querySelector(".play");
      btn.style.display = "none";
      video.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.video-box {
  width: 500px;
  height: 400px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  position: absolute;
  top: 0;
  left: 0;
}
.play {
  width: 50px;
  height: 50px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 50%;
  position: relative;
  z-index: 5;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play:hover {
  box-shadow: 0 0 30px #ccc;
}

.play::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(20% 0, 100% 50%, 20% 100%);
  background: #5c5c5c;
  transform: scale(0.4);
}
</style>