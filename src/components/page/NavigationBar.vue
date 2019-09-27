<template>
  <div class="overall">
    <div class="tab-box">
      <span
        v-for="(i,index) in 4"
        :key="index"
        :class="defaultIndex==index?'active':''"
        @click="defaultIndex=index"
      >
        <div class="dot"></div>
        {{list[index]}}
      </span>
      <div class="bar-box">
        <div class="bar"></div>
      </div>
    </div>
    <svg style="width: 0; height: 0;">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultIndex: 1,
      list:['A','B','C','D']
    };
  }
};
</script>

<style lang="scss" scoped>
.tab-box {
  box-shadow: 0 0 5px #ccc;
  width: 400px;
  height: 50px;
  background: #0084ff;
  border-radius: 2px;
  display: flex;
  position: relative;
  z-index: 99;
}
//------------------------------------鼠标点击后加载类似水滴的动画部分-------------------------------------
.tab-box span {
  display: block;
  flex-grow: 1;
  line-height: 50px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: 0.5s ease;
  user-select: none;
  color: white;
  border-bottom: 3px solid transparent;
  .dot {
    display: inline-block;
    width: 30px;
    height: 10px;
    //此处引用的是滤镜效果，相当于在字母的最上层放置一个滤镜模板，在这个模板里小圆球的移动，会有种黏黏的感觉
    -webkit-filter: url("#goo");
    filter: url("#goo");
    position: absolute;
    background: #0084ff;
    left: calc(50% - 15px);
    top: 1px;
    &::after {
      content: "";
      position: absolute;
      left: calc(50% - 6px);
      width: 12px;
      height: 12px;
      display: block;
      background: #0084ff;
      border-radius: 50%;
     
    }
  }
}
.active {
  text-shadow: 0 0 10px white;
  border-bottom: 3px solid white !important;
}
.active .dot::after {
  animation: gooey 1s both 1 ease;
}
@keyframes gooey {
  50% {
    transform: translateY(-30px) scaleX(0.8);
  }
}
//------------------------------------鼠标点击后加载类似水滴的动画部分-------------------------------------



//------------------------------------鼠标经过的下划线跟随部分-------------------------------------
.tab-box span:hover {
  text-shadow: 0 0 10px white;
}
//此处会发现有 + * + * + * +  这样的东西，百度了一下，没找到具体介绍
//感觉应该是控制该元素之外的的标签  比如此处有4个 span标签，+ * + * + * +的意思就是4层之后的标签
//每个span标签所处的层数不一样，所以就会有不同数量的 +*+*+*
.tab-box span:nth-of-type(1):hover + * + * + * + .bar-box .bar {
  left: 0;
}
.tab-box span:nth-of-type(2):hover + * + * + .bar-box .bar {
  left: 25%;
}
.tab-box span:nth-of-type(3):hover + * + .bar-box .bar {
  left: 50%;
}
.tab-box span:nth-of-type(4):hover + .bar-box .bar {
  left: 75%;
}
.bar-box {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.tab-box .bar {
  width: 25%;
  height: 3px;
  position: absolute;
  left: -25%;
  bottom: 0;
  background: white;
  transition: 0.5s ease;
  opacity: 0.9;
}
//------------------------------------鼠标经过的下划线跟随部分-------------------------------------
</style>