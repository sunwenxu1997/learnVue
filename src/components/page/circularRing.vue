<template>
  <div class="overall">
    <div class="annulus-box">
      <div class="plan">
          <span></span>
      </div>
      <div class="annulus-bck">
        <div class="annulus-left">
          <!-- :style="`transform: rotate(${plan>50?(plan-50)*3.6:0}deg);`" -->
          <div ref="semicircle-l" class="semicircle"></div>
        </div>
        <div class="annulus-right">
          <!-- :style="`transform: rotate(${plan<50?plan*3.6:180}deg);`" -->
          <div ref="semicircle-r" class="semicircle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      plan: 70
    };
  },
  mounted() {
    this.planChange();
    let _this = this
    anime({
      targets:'.plan span',
      innerHTML:['0%',`${_this.plan}%`],
      round: 1,
      easing: "linear",
      delay:500, //动画延时
    });
  },
  methods: {
    planChange() {
      setTimeout(() => {
        if (this.plan > 50 && this.plan <= 100) {
          this.$refs["semicircle-l"].style.transform = `rotate(${(this.plan -
            50) *
            3.6}deg)`;
        }
        if (this.plan > 100) {
          this.$refs["semicircle-l"].style.transform = `rotate(180deg)`;
        }
        if (this.plan < 50) {
          this.$refs["semicircle-r"].style.transform = `rotate(${this.plan *
            3.6}deg)`;
        } else {
          this.$refs["semicircle-r"].style.transform = `rotate(180deg)`;
        }
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.annulus-box {
  width: 200px;
  height: 200px;
  //   box-shadow: 0 0 5px #ccc;
  position: relative;
  .plan {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: calc(50% - 75px);
    top: calc(50% - 75px);
    z-index: 5;
    box-shadow: 0 0 5px #ccc inset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    color: #424242;
  }
  //   -webkit-mask: radial-gradient(transparent 50px, white 0px);
  .annulus-bck {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background:radial-gradient(rgb(0, 255, 213) 50%,rgb(0, 110, 255) 100%);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .annulus-left,
  .annulus-right {
    transform: scale(1.01);
    transform-origin: 50% 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .semicircle {
      transition: linear 0.5s;
      width: 200px;
      height: 100%;
      border-radius: 50%;
    }
  }
  .annulus-left {
    .semicircle {
      transition-delay: 0.5s;
      left: 0;
      clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
      background: white;
    }
  }
  .annulus-right {
    .semicircle {
      position: relative;
      left: -100%;
      clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
      background: white;
    }
  }
}
</style>