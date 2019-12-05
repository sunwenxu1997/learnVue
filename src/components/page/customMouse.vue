<template>
  <div class="overall">
    <div class="mouseMove-dot" :style="`width:${dt_w}px;height:${dt_w}px`"></div>
    <div class="mouseMove-bck" :style="`width:${bk_w}px;height:${bk_w}px`"></div>
    <div id="box">
      <div class="box">HOVER</div>
      <span class="text">mouse</span>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      w: window.innerWidth, //窗口宽
      h: window.innerHeight, //窗口高
      dt_w: 4, //小点宽高
      bk_w: 50 //圆框宽高
    };
  },
  mounted() {
    //注意：此处针对样式的放大，是通过 TweenLite.to(bk, 0.3, { x: x轴, y: y轴, scale: 1.3 })，而不是直接通过添加样式 transform: scale();
    //因为 TweenLite 是相对于 transform：translate() 进行位置确定的，而不是 top,left
    //所以单纯的修改 transform: scale() 会造成位置坐标归0
    this.MouseMove(".box", "incursor-bck");
    this.MouseMove(".text", "incursor-bck-text");
    this.MouseClick();
  },
  methods: {
    //鼠标移动时相关样式的添加 (el 为鼠标移入的标签， cl 为鼠标移入该标签内更改鼠标的样式)
    MouseMove(el, cl) {
      let _this = this;
      let dt = document.querySelector(".mouseMove-dot"); //小点
      let bk = document.querySelector(".mouseMove-bck"); //圆框
      let dt_w = _this.dt_w / 2; //小点 默认位置偏移量
      let bk_w = _this.bk_w / 2; //圆框 默认位置偏移量
      //监听鼠标移动
      window.addEventListener("mousemove", function(e) {
        let x = e.pageX;
        let y = e.pageY;
        TweenLite.to(dt, 0.5, {
          ease: Back.easeOut.config(1.7),
          x: x - dt_w,
          y: y - dt_w
        });
        TweenLite.to(bk, 1, {
          ease: Back.easeOut.config(1.7),
          x: x - bk_w,
          y: y - bk_w
        });

        let o = document.querySelectorAll(el);
        for (let e = 0; e < o.length; e++)
          //移入定义标签时，放大圆框
          (o[e].onmouseenter = function() {
            TweenLite.to(bk, 0.3, {
              x: x - bk_w,
              y: y - bk_w,
              scale: 1.3
            });
            dt.classList.add("incursor-dot"); //隐藏小点
            bk.classList.add(cl); //给圆框添加样式
          }),
            //移除定义标签时，恢复样式
            (o[e].onmouseleave = function() {
              TweenLite.to(bk, 0.3, {
                x: x - bk_w,
                y: y - bk_w,
                scale: 1
              });
              dt.classList.remove("incursor-dot");
              bk.classList.remove(cl);
            });

        //当鼠标不在浏览器窗口范围内时，隐藏起来
        if (_this.w <= x + 5 || _this.h <= y + 5 || x < 5 || y < 5) {
          dt.style.opacity = 0;
          bk.style.opacity = 0;
        } else {
          dt.style.opacity = 1;
          bk.style.opacity = 1;
        }
      });
    },
    //鼠标点击时，相关样式的添加
    MouseClick() {
      let _this = this;
      let dt = document.querySelector(".mouseMove-dot");
      let bk = document.querySelector(".mouseMove-bck");
      let dt_w = _this.dt_w / 2; //小点 默认位置偏移量
      let bk_w = _this.bk_w / 2; //圆框 默认位置偏移量
      window.addEventListener("mousedown", function(e) {
        let x = e.pageX;
        let y = e.pageY;
        //点击时放大圆框
        TweenLite.to(bk, 0.3, {
          x: x - bk_w,
          y: y - bk_w,
          scale: 1.8
        });
        dt.classList.add("click-dot");
        bk.classList.add("click-bck");
      });
      window.addEventListener("mouseup", function(e) {
        let x = e.pageX;
        let y = e.pageY;
        //松开时恢复原来大小
        TweenLite.to(bk, 0.3, {
          x: x - bk_w,
          y: y - bk_w,
          scale: 1
        });
        dt.classList.remove("click-dot");
        bk.classList.remove("click-bck");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
//消除鼠标样式
.overall {
  cursor: none;
}
.text {
  display: inline-block;
  font-size: 25px;
  font-weight: 200;
  padding: 20px;
  color: #77f3de;
}
.box {
  width: 200px;
  height: 200px;
  background: rgb(29, 192, 204);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  opacity: 0.8;
  &:hover{
     background: rgb(29, 204, 151);
  }
}
.mouseMove-dot,
.mouseMove-bck {
  user-select: none;
  pointer-events: none; //禁止选择器方法
  mix-blend-mode: difference; //背景如何混合
  position: fixed;
  left: 0;
  top: 0;
  border-radius: 50%;
  z-index: 999;
  opacity: 0;
}
.mouseMove-dot {
  background: #686868;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
}
.mouseMove-bck {
  border: 2px solid #575757;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  transition: border 0.3s, opacity 0.3s, background 0.5s;
}

// 鼠标点击样式
.click-dot {
  opacity: 0;
}
.click-bck {
  border: 2px solid #77f3de;
}
//鼠标移入样式
.incursor-dot {
  background: transparent;
}
.incursor-bck {
  border: 2px solid transparent;
  background: #fff;
}
.incursor-bck-text {
  border: 2px solid transparent;
  background: rgb(240, 221, 113);
}
</style>