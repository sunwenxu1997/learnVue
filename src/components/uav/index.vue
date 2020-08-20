<template>
  <div class="background">
    <div
      class="body"
      :style="`filter: drop-shadow(0px ${uav_shadow}px ${uav_shadow/10}px ${fly&&uav_vertical>20?'rgba(0, 0, 0, 0.7)':'rgba(0, 0, 0, 0.0ƒ)'});`"
    >
      <!-- 无人机 -->
      <div
        @click="uavFly()"
        id="container"
        :style="`transform:translateY(${-uav_vertical}px) translateX(${uav_lr_to}px) translateZ(${-uav_qh_to}px) scale(1) rotateX(${container_rotate}deg);`"
      >
        <div
          id="uav"
          :style="`transform: rotateZ(${uav_level}deg) rotateY(${uav_lr}deg) rotateX(${uav_qh}deg)`"
        >
          <uav-shenti></uav-shenti>
          <!-- <uav-yepian :flying="fly"></uav-yepian> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shenti, yepian } from "./components/index";
export default {
  components: {
    "uav-shenti": shenti,
    "uav-yepian": yepian
  },
  data() {
    return {
      window_w: window.innerWidth,
      window_h: window.innerHeight,
      fly: true, //是否已经起飞
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
            //   that.uav_lr = Math.min(40, that.uav_lr + lr_num * sen);
            //   that.uav_lr = Math.max(-40, that.uav_lr + lr_num * sen);
            that.uav_lr += lr_num * sen;
            //是否允许左右移动
            //   that.uav_lr_to += lr_num * sen * 2;
          } else {
            // if (lr_num > 0) {
            //   if (0 <= that.uav_lr) {
            //     that.uav_lr -= lr_num * sen;
            //   }
            // } else {
            //   if (that.uav_lr <= 0) {
            //     that.uav_lr += -lr_num * sen;
            //   }
            // }
          }

          if (qh_ing) {
            //   that.uav_qh = Math.min(20, that.uav_qh + qh_num * sen);
            //   that.uav_qh = Math.max(-20, that.uav_qh + qh_num * sen);
            that.uav_qh += qh_num * sen;
            //是否允许前后移动
            //   that.uav_qh_to += qh_num * sen * 3;
          } else {
            // if (qh_num > 0) {
            //   if (0 <= that.uav_qh) {
            //     that.uav_qh -= qh_num * sen;
            //   }
            // } else {
            //   if (that.uav_qh <= 0) {
            //     that.uav_qh += -qh_num * sen;
            //   }
            // }
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
:root{
    --uavColor:#ccc;
    --uavBorder:black;
}
#uav {
  .uav {
    background: transparent !important;
    border: 1px solid var(--uavBorder);
    box-sizing: border-box;
    svg path{
        opacity: 1 !important;
        fill: transparent !important;
        stroke: var(--uavBorder);
    }
  }
}
</style>
<style lang="scss" scoped>
.background {
  // 整体背景颜色
  background: #f1f1f1;
  .body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 3000;
  }
}
//无人机容器
#container {
  perspective: 3000;
  cursor: pointer;
  transform-style: preserve-3d;
  position: relative;
  top: 0;
  transition: top 0.5s;
}
#uav {
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  .uav {
    transform-style: preserve-3d;
  }
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
</style>