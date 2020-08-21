<template>
  <div class="background" :class="uav_line?'black':''">
    <div class="cover" v-if="!fly">
      <div class="center">
        <h1>start</h1>
      </div>
      <!-- <div class="btm-msg">
        <div>
          <p>W：垂直向上 上升</p>
          <p>S：垂直向下 下降</p>
          <p>A：水平向左 左转</p>
          <p>D：水平向右 右转</p>
        </div>
        <div>
          <p>I：向前偏移 前进</p>
          <p>K：向后偏移 后退</p>
          <p>J：向左偏移 左飞</p>
          <p>L：向右偏移 右飞</p>
        </div>
      </div>-->
    </div>
    <div
      class="body"
      :style="`filter: drop-shadow(0px ${uav_shadow}px ${uav_shadow/10}px ${fly&&uav_vertical>20?'rgba(0, 0, 0, 0.7)':'rgba(0, 0, 0, 0.0ƒ)'});`"
    >
      <!-- 无人机 -->
      <div
        @click="uavFly()"
        id="container"
        :style="`transform:translateY(${-uav_vertical}px) translateX(${uav_lr_to}px) translateZ(${-uav_qh_to}px) scale(.12) rotateX(${container_rotate}deg);`"
      >
        <div
          :id="uav_line?'uav':''"
          class="uav"
          :style="`transform: rotateZ(${uav_level}deg) rotateY(${uav_lr}deg) rotateX(${uav_qh}deg)`"
        >
          <uav-jijia :flying="fly" class="uav-jijia-qr"></uav-jijia>
          <uav-jijia :flying="fly" class="uav-jijia-ql"></uav-jijia>
          <uav-shenti></uav-shenti>
          <uav-jijia :flying="fly" :jiwei="true" class="uav-jijia-hr"></uav-jijia>
          <uav-jijia :flying="fly" :jiwei="true" class="uav-jijia-hl"></uav-jijia>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shenti, jijia } from "./components/index";
export default {
  components: {
    "uav-shenti": shenti,
    "uav-jijia": jijia
  },
  data() {
    return {
      window_w: window.innerWidth,
      window_h: window.innerHeight,
      fly: false, //是否已经起飞
      uav_line: false, //是否转线条或者实物无人机
      container_rotate: 0,
      uav_shadow: 0, //默认无人机阴影位置
      uav_sensitivity: 3, //灵敏度 默认为1
      uav_level: 0, //无人机水平角度
      uav_vertical: 0, //无人机垂直高度
      uav_lr: 0, //无人机左右偏移
      uav_qh: 0, //无人机前后偏移
      uav_lr_to: 0, //无人机左右偏移飞行距离
      uav_qh_to: 0 //无人机前后偏移飞行距离
    };
  },
  mounted() {
    this.listenKeydown();
  },
  methods: {
    //监听键盘事件
    listenKeydown() {
      let that = this;
      let sen = that.uav_sensitivity;
      let level_num = 0; //初始水平偏移为 0
      let vertical_num = 0; //初始垂直偏移为 0
      let lr_num = 0; //初始左右偏移量为 0
      let qh_num = 0; //初始前后偏移量为 0
      let lr_ing = false; //左右偏移是否正在执行
      let qh_ing = false; //前后偏移是否正在执行
      document.addEventListener(
        "keydown",
        e => {
          var ev = e || window.event;
          console.log(ev.keyCode);
          switch (ev.keyCode) {
            //用户按 A 键，无人机水平往左旋转
            case 65:
              level_num = -1;
              break;
            //用户按 D 键，无人机水平往右旋转
            case 68:
              level_num = 1;
              break;
            //用户按 W 键，无人机垂直上升
            case 87:
              //达到最大高度 200 时不再上升
              if (that.uav_vertical > that.window_h / 2) {
                vertical_num = 0;
              } else {
                vertical_num = 1;
              }
              break;
            //用户按 S 键，无人机垂直下降
            case 83:
              //达到最低高度时不再下降
              if (that.uav_vertical < 100) {
                vertical_num = 0;
              } else {
                vertical_num = -1;
              }
              break;
            //用户按 J 键，无人机往左偏移
            case 74:
              if (that.uav_lr_to < -that.window_w / 3) {
                lr_num = 0;
              } else {
                lr_num = -0.5;
              }
              lr_ing = true;
              break;
            //用户按 L 键，无人机往右偏移
            case 76:
              if (that.uav_lr_to > that.window_w / 3) {
                lr_num = 0;
              } else {
                lr_num = 0.5;
              }
              lr_ing = true;
              break;
            //用户按 I 键，无人机往前偏移
            case 73:
              qh_num = 0.5;
              qh_ing = true;
              break;
            //用户按 K 键，无人机往后偏移
            case 75:
              qh_num = -0.5;
              qh_ing = true;
              break;
            //用户按 空格 键，转换为线条或者实体无人机
            case 32:
              that.uav_line = !that.uav_line;
              break;
            default:
              break;
          }
        },
        false
      );
      document.addEventListener(
        "keyup",
        e => {
          var ev = e || window.event;
          switch (ev.keyCode) {
            case 65:
              level_num = 0;
              break;
            case 68:
              level_num = 0;
              break;
            case 87:
              vertical_num = 0;
              break;
            case 83:
              vertical_num = 0;
              break;
            case 74:
              lr_num = -1;
              lr_ing = false;
              break;
            case 76:
              lr_num = 1;
              lr_ing = false;
              break;
            case 73:
              qh_num = 1;
              qh_ing = false;
              break;
            case 75:
              qh_num = -1;
              qh_ing = false;
              break;
            default:
              break;
          }
        },
        false
      );
      //为了实现无人机上升和旋转同时操作
      function init() {
        if (that.fly) {
          //水平垂直偏移处理
          that.uav_level += level_num * sen;
          that.uav_vertical += vertical_num * sen;
          //阴影偏移
          that.uav_shadow += vertical_num * sen;
          //如果正在执行，偏移时有最大值
          //左右偏移处理 达到临界值松开回正归0
          if (lr_ing) {
            that.uav_lr = Math.min(40, that.uav_lr + lr_num * sen);
            that.uav_lr = Math.max(-40, that.uav_lr + lr_num * sen);
            // that.uav_lr += lr_num * sen;
            //是否允许左右移动
            that.uav_lr_to += lr_num * sen * 2;
          } else {
            if (lr_num > 0) {
              if (0 <= that.uav_lr) {
                that.uav_lr -= lr_num * sen;
              }
            } else {
              if (that.uav_lr <= 0) {
                that.uav_lr += -lr_num * sen;
              }
            }
          }

          if (qh_ing) {
            that.uav_qh = Math.min(20, that.uav_qh + qh_num * sen);
            that.uav_qh = Math.max(-20, that.uav_qh + qh_num * sen);
            // that.uav_qh += qh_num * sen;
            //是否允许前后移动
            that.uav_qh_to += qh_num * sen * 5;
          } else {
            if (qh_num > 0) {
              if (0 <= that.uav_qh) {
                that.uav_qh -= qh_num * sen;
              }
            } else {
              if (that.uav_qh <= 0) {
                that.uav_qh += -qh_num * sen;
              }
            }
          }
        }

        window.requestAnimationFrame(init);
      }
      init();
    },
    //点击无人机起飞
    uavFly() {
      let container = document.getElementById("container");
      container.style.top = "20%";
      let timer = setInterval(() => {
        this.container_rotate += 1;
        if (80 <= this.container_rotate) {
          clearInterval(timer);
        }
      }, 10);
      setTimeout(() => {
        this.fly = true;
      }, 1000);
    }
  }
};
</script>
<style lang="scss" >
:root {
  --uavColor: #ccc;
  --uavBorder: white;
}
#uav {
  transform-origin: 50% 50%;
  .uav,
  .uav-boder {
    background: transparent !important;
    border: 5px solid var(--uavBorder);
    box-sizing: border-box;
    svg path {
      opacity: 1 !important;
      fill: transparent !important;
      stroke: var(--uavBorder);
      stroke-width: 5 !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    position: relative;
    z-index: 99;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    // animation: change 0.5s linear infinite alternate;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: white;
      animation: change 1s linear infinite alternate;
      opacity: 0.3;
    }
    &::after {
      opacity: 0.3;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: white;
      animation: change 1s linear infinite alternate-reverse;
    }
    h1 {
      position: relative;
      z-index: 5;
      font-size: 17px;
      letter-spacing: 0.2rem;
      font-weight: 100;
      color: white;
      text-shadow: 0 0 3px black;
    }
  }
  @keyframes change {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.2);
    }
  }
  .btm-msg {
    width: 100%;
    padding: 50px 100px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
}
.background {
  // 整体背景颜色
  background: #f1f1f1;
  transition: .3s;
  &.black{
    background: rgb(34, 34, 34);
  }
  .body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    perspective: 10000;
  }
}
//无人机容器
#container {
  cursor: pointer;
  transform-style: preserve-3d;
  position: relative;
  top: 0;
  transition: top 0.5s;
}
.uav {
  transform-style: preserve-3d;
}
.shenti {
  width: 100px;
  height: 200px;
  background: #ccc;
}
.dibu {
  width: 100px;
  height: 100px;
  background: #808080;
  transform-origin: 0 0;
  transform: rotateX(-50deg);
}

.uav-jijia-qr {
  left: 570px;
  transform: rotateZ(-33deg) translateZ(-50px) translateY(200px);
}
.uav-jijia-ql {
  left: -70px;
  transform: rotateZ(33deg) translateZ(-50px) translateY(200px) scaleX(-1);
}
.uav-jijia-hr {
  left: 585px;
  transform: rotateZ(47deg) translateZ(-80px) translateY(130px) scaleY(-1);
}
.uav-jijia-hl {
  left: -77px;
  transform: rotateZ(-47deg) translateZ(-80px) translateY(130px) scaleY(-1)
    scaleX(-1);
}
</style>