<template>
  <div class="overall">
    <div ref="box" class="box">
      <section
        class="line"
        v-for="(i,index) in sum"
        :key="index"
        :class="num <= index && index <= defaultRoll+num?'line':'lineRoll'"
      >{{index+1}}</section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 50, //总行数
      defaultRoll: 13, //默认行数，主要根据css样式中指定容器的高而定（此处为 600px/50px = 12）
      num: 0 //当前滚动条滚动距离相当于滚动了几行
    };
  },
  mounted() {
    let _this = this;
    this.$refs["box"].addEventListener("scroll", function(e) {
      let scrollTop = e.target.scrollTop;
      _this.num = Math.floor(scrollTop / 50);
      console.log(_this.num);
    });
  }
};
</script>

<style lang="scss" scoped>
.overall {
  background: #f1f1f1;
}
.box {
  perspective: 1000;
  width: 300px;
  height: 600px;
  box-shadow: 0 0 5px #ccc;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(63, 63, 63);
  .line {
    box-sizing: border-box;
    height: 50px;
    background: #f1f1f1;
    line-height: 50px;
    opacity: 1;
    transition: 1s;
    font-weight: bold;
    position: relative;
    z-index: 5;
  }
  //    此处可定义不同的切换样式

    // .lineRoll {
    //   opacity: 0;
    //   transform: scale(0.2);
    //   background: #e9e8e8;
    // }

  // .lineRoll {
  //     opacity: 0;
  //     background: rgb(63, 63, 63);
  //   }

//   .lineRoll {
//     transform-style: preserve-3d;
//     opacity: 0;
//     background: rgb(63, 63, 63);
//     transform: rotateX(50deg) rotateY(60deg);
//   }

// .lineRoll {
//     transform-style: preserve-3d;
//     transform:translateX(-80%);
// }

  .lineRoll {
    transform-style: preserve-3d;
    opacity: 0;
    transform-origin: 50% 50%;
    transform: rotateY(180deg) scaleX(0.2);
  }
  

// .lineRoll {
//     transform-style: preserve-3d;
//     opacity: 0;
//     background: rgb(63, 63, 63);
//     transform-origin: 50% 100%;
//     transform: rotateX(90deg) translateY(-50px);
//   }


}
</style>