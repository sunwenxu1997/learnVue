<template>
  <div>
    <!-- 网页模块过渡效果 -->
    <div class="block" v-for="(j,indexj) in 7" :key="indexj">
      <div class="title">BLOCK {{j}}</div>
      <div class="content">
        <span
          v-for="(i,index) in 4"
          :key="index"
          :class="getClassName(j)"
          :style="`background:hsl(${210-j*30}, 100%, ${random(63,90)}%); transition-delay: ${i/10}s`"
        >{{j}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null
    };
  },
  mounted() {
    let _this = this;
    _this.items = document.querySelectorAll(".block");
    _this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // m~n之间的随机整数
    random(m, n) {
      return Math.floor(Math.random() * (n - m + 1) + m);
    },
    //定义特殊的样式(此处只是方便实现效果，具体可自己定义)
    getClassName(num) {
      if (num == 1) {
        return "toScaleBig";
      } else if (num == 2) {
        return "toTop";
      } else if (num == 3) {
        return "toBottom";
      } else if (num == 4) {
        return "toLeft";
      } else if (num == 5) {
        return "toRight";
      } else if (num == 6) {
        return "toRoate";
      } else if (num == 7) {
        return "toScaleSmall";
      }
    },
    //判断 模块 是否达到可视范围
    isElementInViewport(el) {
      // getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
      // 注意：如果模块的整体宽或高 大于 浏览器可视窗口 的时候，此方法不可使用
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    //监听滚轮方法
    handleScroll(val) {
      let _this = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //每次滚轮滚动都会遍历 模块数组，从而添加样式
      for (let i = 0; i < _this.items.length; i++) {
        //如果 模块 达到可视范围，那么添加样式
        if (_this.isElementInViewport(_this.items[i])) {
          _this.items[i].classList.add("in-view");
        } else {
          //每次滚动时都会出现过度效果
          //   _this.items[i].classList.remove("in-view");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  cursor: default;
  width: 100%;
  max-width: 200px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  position: relative;
  .title {
    font-size: 2rem;
    font-weight: 200;
    padding: 20px;
    opacity: 0;
    transition: 0.5s;
    transform: scale(0.5);
  }
  .content {
    span {
      display: inline-block;
      width: 100px;
      height: 100px;
      font-weight: bold;
      line-height: 100px;
      color: white;
      font-size: 3rem;
      transition: 0.5s;
      opacity: 0;
    }
    //自定义的相关过度效果
    .toScaleBig {
      transform: scale(0.5);
    }
    .toTop {
      transform: translateY(50px);
    }
    .toBottom {
      transform: translateY(-50px);
    }
    .toLeft {
      transform: translateX(50px);
    }
    .toRight {
      transform: translateX(-50px);
    }
    .toRoate {
      transform: rotate(45deg);
    }
    .toScaleSmall {
      transform: scale(1.5);
    }
  }
}

.in-view {
  opacity: 1;
  .title {
    opacity: 1;
    transform: scale(1);
  }
  .content {
    span {
      opacity: 1;
    }
    //自定义的相关最终效果
    .toScaleBig {
      transform: scale(1);
    }
    .toTop {
      transform: translateY(0px);
    }
    .toBottom {
      transform: translateY(0px);
    }
    .toLeft {
      transform: translateX(0px);
    }
    .toRight {
      transform: translateX(0px);
    }
    .toRoate {
      transform: rotate(0deg);
    }
    .toScaleSmall {
      transform: scale(1);
    }
  }
}
</style>