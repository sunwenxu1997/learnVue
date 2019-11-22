<template>
  <div class="overall">
    <div class="text-box">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <svg height="0" width="0">
      <defs>
        <clipPath id="svgTextPath">
          <!-- textLength 文字的长度 此处对应容器的宽度  x y 为横纵坐标位置 -->
          <text x="0" y="180" textLength="700px">learning</text>
          <text x="200" y="300" textLength="250px">vue</text>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  mounted() {
    this.move();
  },
  methods: {
    move() {
      let box = document.querySelector(".text-box");
      let dt = document.querySelectorAll(".dot");
      window.addEventListener("mousemove", function(e) {
        for (let i = 0; i < dt.length; i++) {
          //圆灯相对于 容器的坐标位置
          let x = e.pageX - box.offsetLeft - dt[i].offsetWidth / 2;
          let y = e.pageY - box.offsetTop - dt[i].offsetHeight / 2;
          TweenLite.to(dt[i], i + 0.2, {
            x: x,
            y: y,
            ease: Back.easeOut.config(1.7)
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.text-box {
  width: 700px;
  height: 400px;
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  //引入剪切路径
  clip-path: url(#svgTextPath);
  color: white;
  background: #2fddc6;
  //移动圆灯的样式
  .dot {
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.9;
  }
  .dot:nth-child(1) {
    width: 350px;
    height: 350px;
    background: rgb(30, 207, 148);
    z-index: 8;
    transform: translateX(-175px) translateY(-175px);
  }
  .dot:nth-child(2) {
    width: 500px;
    height: 500px;
    background: rgb(28, 204, 195);
    z-index: 7;
    transform: translateX(-250px) translateY(-250px);
  }
  .dot:nth-child(3) {
    width: 700px;
    height: 700px;
    background: rgb(18, 155, 247);
    z-index: 6;
    transform: translateX(-350px) translateY(-350px);
  }
}
//剪切文字的文字样式 此处的文字颜色取背景色
text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 8rem;
  text-transform: uppercase;
}
</style>