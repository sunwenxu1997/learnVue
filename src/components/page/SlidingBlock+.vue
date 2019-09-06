<template>
  <div class="overall">
    <div class="box" ref="box">
      <div class="dot" ref="dot"></div>
      <div class="scale-box">
        <span
          class="scale"
          v-for="(i,index) in 101"
          :style="index%10 == 0?'height:20px':''"
          :key="index"
        ></span>
      </div>
    </div>
    <span class="title">{{plan}}%</span>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      plan: 0, //进度滑块
      bck: 0 //进度背景
    };
  },
  watch:{
      plan(){
          this.runAnime()
      }
  },
  mounted() {
    this.getZoom("box", "dot");
  },
  methods: {
    getZoom(d1, d2) {
      var _this = this;
      var oDiv1 = this.$refs[d1];
      var oDiv2 = this.$refs[d2];
      oDiv2.onmousedown = function(ev) {
        ev.preventDefault();
        //鼠标按下位置
        var oEvent = ev || event;
        var disX = oEvent.clientX - oDiv2.offsetLeft;
        document.onmousemove = function(ev) {
          var oEvent = ev || event;
          var l = oEvent.clientX - disX;

          if (l < 0) {
            l = 0;
          } else if (l > oDiv1.offsetWidth - oDiv2.offsetWidth) {
            l = oDiv1.offsetWidth - oDiv2.offsetWidth;
          }
          _this.plan = (
            l /
            ((oDiv1.offsetWidth - oDiv2.offsetWidth) / 100)
          ).toFixed(0);
          _this.bck = l;
          oDiv2.style.left = l + "px"; //l范围：[0,580]
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
    runAnime() {
      for (let i = 0; i < 10; i++) {
        if (i < 5) {
            let dot = document.getElementsByClassName('scale')[this.plan]
            anime({
                targets:document.getElementsByClassName('scale')[this.plan - i],
                top:i*10
            })
        } else {
            
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 400px;
  height: 50px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
}
.dot {
  width: 1px;
  height: 30px;
  background: #37b383;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  &::before {
    content: "";
    width: 30px;
    height: 30px;
    background: #37b383;
    position: absolute;
    left: -15px;
    border-radius: 50%;
  }
}
.title {
  font-weight: bold;
  width: 100px;
  height: 30px;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
}
.scale-box {
  width: 100%;
  height: 20px;
  background: #ccc;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .scale {
    display: inline-block;
    width: 1px;
    height: 10px;
    background: #575656;
    position: relative;
  }
}
</style>