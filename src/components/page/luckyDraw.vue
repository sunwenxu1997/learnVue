<template>
  <div class="overall">
    <div class="chouJiang">
      <div class="egg" @click="clickOne(index)" v-for="(i,index) in chouJiang.num" :key="index">
        <!-- 锤子图片 -->
        <img
          class="chuizi"
          :class="{'qiao':chouJiang.qiao && chouJiang.egg == index}"
          src="@/assets/img/chuizi.png"
          alt
        />
        <!-- 鸡蛋图片 -->
        <img
          class="eg"
          :class="{'qiao':chouJiang.qiao && chouJiang.egg == index}"
          src="@/assets/img/egg.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chouJiang: {
        num: 3, //默认蛋数量
        egg: null, //敲击的哪个鸡蛋
        qiao: false, //是否敲击
        result: '谢谢参与', //默认结果
        time: 1000 //多少秒后弹出结果 ms
      }
    }
  },
  methods: {
    //敲击鸡蛋的方法
    clickOne(index) {
      //敲击过一次就不能再敲击
      if (!this.chouJiang.qiao) {
        this.chouJiang.egg = index
        this.chouJiang.qiao = true
        setTimeout(() => {
          alert(this.chouJiang.result)
        }, this.chouJiang.time)
      } else {
        alert('您已经敲过了哦～')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chouJiang {
  margin: 50px 0;
}
/* 砸金蛋 */
.chouJiang {
  display: flex;
  justify-content: center;
  transform: scale(0.7);
  .egg {
    touch-action: none;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    height: 150px;
    cursor: pointer;
    // overflow: hidden;
    margin: 0 20px;
    // border: 1px solid #ccc;
    position: relative;
    &:hover .chuizi {
      opacity: 1;
    }
    img {
      user-select: none;
      pointer-events: none;
    }
    .eg {
      height: 100%;
      transform: scale(1.3);
      &.qiao {
        animation: clickOne_eg 0.5s steps(1) 0.4s both 1;
      }
    }
    .chuizi {
      transform-origin: 100% 100%;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 9;
      &.qiao {
        animation: clickOne_chuizi 0.7s ease-in both 1;
      }
    }
  }
  /* 敲鸡蛋后的锤子动画 */
  @keyframes clickOne_chuizi {
    50% {
      transform: rotate(30deg);
    }
    99% {
      opacity: 1;
      transform: rotate(0);
    }
    100% {
      opacity: 0;
      transform: rotate(0);
    }
  }
  /* 敲鸡蛋后的鸡蛋动画 */
  @keyframes clickOne_eg {
    100% {
      opacity: 0;
    }
  }
}
</style>