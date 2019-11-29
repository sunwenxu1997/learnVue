<template>
  <div class="overall">
    <div id="img-box" @mouseenter="scaleWMinus()" @mouseleave="scaleWAdd()">
      <div class="img-box">
        <h2>WATER</h2>
        <div class="img-url">
          <img src="@/assets/img/bck2.jpg" alt />
        </div>
      </div>
    </div>
    <svg width="0" height="0">
      <filter id="water">
        <feTurbulence type="fractalNoise" baseFrequency=".05 .05" numOctaves="1" result="noise1" />
        <feColorMatrix in="noise1" type="hueRotate" values="0" result="noise2">
          <!-- dur  波纹频率 -->
          <animate attributeName="values" from="0" to="360" dur="1s" repeatCount="indefinite" />
        </feColorMatrix>
        <!-- scale 波纹数量 -->
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          :scale="scaleW"
          in="SourceGraphic"
          in2="noise2"
        />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scaleW: 15, //默认波纹数量
      waterEnter: null, //进入时的计时器
      waterLeave: null //移出时的计时器
    };
  },
  methods: {
    //鼠标进入时波纹慢慢减少
    scaleWMinus() {
      console.log("进入");
      let _this = this;
      clearInterval(_this.waterEnter);
      _this.waterLeave = setInterval(() => {
        _this.scaleW -= 1;
        if (_this.scaleW == 0 || _this.scaleW < 0) {
          clearInterval(_this.waterLeave);
        }
      }, 100);
    },
    //鼠标移出时波纹慢慢增多
    scaleWAdd() {
      console.log("移出");
      let _this = this;
      clearInterval(_this.waterLeave);
      _this.waterEnter = setInterval(() => {
        _this.scaleW += 1;
        if (_this.scaleW == 15 || _this.scaleW > 15) {
          clearInterval(_this.waterEnter);
        }
      }, 50);
    }
  }
};
</script>

<style lang="scss" scoped>
#img-box {
  width: 400px;
  height: 250px;
  overflow: hidden;
  .img-box {
    width: 100%;
    height: 100%;
    filter: url("#water");
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-url {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      img {
        width: 100%;
        transform: scale(1.3);
      }
    }
    h2 {
      color: white;
      font-size: 30px;
      opacity: 0.9;
      position: relative;
      z-index: 5;
    }
  }
}
</style>