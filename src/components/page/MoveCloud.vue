<template>
  <div class="body">
    <div class="cover"></div>
    <svg width="0" height="0" style="display: none">
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" />
        <feDisplacementMap in="SourceGraphic" scale="500" />
      </filter>
    </svg>
    <div class="cloud_box">
      <div class="moon" v-if="moon"></div>
      <div
        class="cloud"
        v-for="(i,index) in cloudNum"
        :key="index"
        :style="`width:${random(200,900)}px;left:${random(-200,200)}%;bottom:${random(-10,20)}%;   animation-delay: ${random(-20,0)}s;`"
      >
        <img
          v-if="index%2 == 0"
          :style="random(0,index)%2 == 0?'transform:scaleX(-1);':''"
          src="@/assets/img/cloud_1.png"
          alt
        />
        <img
          v-if="index%2 != 0"
          :style="random(0,index)%2 != 0?'transform:scaleX(-1);':''"
          src="@/assets/img/cloud_3.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      phone: false,
      cloudNum: 200,
      moon:false,
    };
  },
  created() {
    const browser = {
      versions: (function() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return {
          //移动终端浏览器版本信息
          trident: u.indexOf("Trident") > -1, //IE内核
          presto: u.indexOf("Presto") > -1, //opera内核
          webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
          gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
          iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf("iPad") > -1, //是否iPad
          webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
        };
      })(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.versions.mobile) {
      this.cloudNum = 20;
      this.phone = true;
    }
  },
  mounted() {
    if (this.phone) {
      var text = "";
      window.addEventListener("deviceorientation", orientationHandler, false);
      function orientationHandler(event) {
        // text = "";
        // var arrow = document.querySelector(".cover");
        // text += "左右旋转：rotate alpha{" + Math.round(event.alpha) + "deg)<p>";
        // text += "前后旋转：rotate beta{" + Math.round(event.beta) + "deg)<p>";
        // text += "扭转设备：rotate gamma{" + Math.round(event.gamma) + "deg)<p>";
        // arrow.innerHTML = text;

        let box = document.querySelector(".cloud_box");
        TweenLite.to(box, 0.5, {
          ease: Back.easeOut.config(1.7),
          y: Math.round(event.beta) * 3,
          rotationZ: Math.round(event.gamma)
        });
      }
    }
     document.addEventListener('mousemove',this.move)
    let nowTime = new Date();
    let hour = nowTime.getHours();
    let body = document.querySelector(".body");
    if (hour < 6) {
      body.style.background =
        "linear-gradient(20deg,rgb(205, 248, 248) 0%,rgb(51, 139, 161) 50%,rgb(3, 84, 122) 100%)";
      // document.write("早上好！");
    } else if (hour < 15) {
      body.style.background =
        "linear-gradient(-150deg, rgb(205, 224, 248) 0%, rgb(51, 99, 161) 50%,rgb(3, 55, 122) 100%)";
      // document.write("中午好！");
    } else if (hour < 19) {
      body.style.background =
        "linear-gradient(-10deg,rgb(248, 205, 112) 0%,rgb(216, 89, 16) 50%,rgb(126, 30, 86) 100%)";
      // document.write("下午好！");
    } else {
      this.moon = true
      body.style.background =
        "linear-gradient(0deg,rgb(16, 44, 95) 0%,rgb(9, 29, 66) 50%,rgb(0, 7, 19) 100%)";
      // document.write("夜里好！");
    }
  },
  methods: {
    // 随机生成一个整数
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //鼠标移入事件
    move(e) {
      if (!this.phone) {
        let box = document.querySelector(".cloud_box");
        let x = -(e.clientX - this.w / 2) * 0.2;
        let y = e.clientY - this.h / 2;
        TweenLite.to(box, 0.5, {
          ease: Back.easeOut.config(1.7),
          //云层左右移动量
          x: x,
          //云层上下移动量
          y: -y * 0.5,
          //云层旋转角度控制
          rotationZ: (x / this.w) * 100
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}
//月亮
.moon {
  position: absolute;
  right: 20%;
  top: 10%;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  border: 3px solid white;
  box-sizing: border-box;
  box-shadow: 0 0 80px white;
  overflow: hidden;
  &::after {
    content: "";
    filter: url(#filter);
    width: 100px;
    height: 100px;
    background: rgb(243, 243, 243);
    position: absolute;
    top: 10px;
    left: 15px;
  }
}
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background: linear-gradient(
  //   20deg,
  //   rgb(205, 248, 248) 0%,
  //   rgb(51, 139, 161) 50%,
  //   rgb(3, 84, 122) 100%
  // );
  // background: linear-gradient(
  //   -150deg,
  //   rgb(205, 224, 248) 0%,
  //   rgb(51, 99, 161) 50%,
  //   rgb(3, 55, 122) 100%
  // );
  // background: linear-gradient(
  //   -10deg,
  //   rgb(248, 205, 112) 0%,
  //   rgb(216, 89, 16) 50%,
  //   rgb(126, 30, 86) 100%
  // );
  // background: linear-gradient(
  //   0deg,
  //   rgb(16, 44, 95) 0%,
  //   rgb(9, 29, 66) 50%,
  //   rgb(0, 7, 19) 100%
  // );
  .cloud_box {
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 500px;
    animation: fadeIn 1s 0.5s ease both 1;
    .cloud {
      transform-style: preserve-3d;
      transform-origin: 50% 100%;
      width: 200px;
      height: 200px;
      position: absolute;
      bottom: 0;
      opacity: 0;
      animation-name: move;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      transform: translateZ(-2000px);
      img {
        width: 100%;
        // filter:invert(0.1);
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes move {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.7;
    // translateY(-200%)  控制云层高度
    transform: translateZ(500px) translateY(-100%);
  }
}
</style>