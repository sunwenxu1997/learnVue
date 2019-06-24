<template>
  <div>
    <!-- 数字加载效果 -->
    <div class="box">
     <div class="value">{{changeNumber}}</div>
      <el-switch
        v-model="NumberShow"
      
        @change="DigitalLoad(NumberValue)"
      ></el-switch>
    </div>
  </div>
</template>

<script>
// 数字动画加载插件
import { TweenMax, Power2, TimelineLite } from "gsap";
export default {
  computed: {
    changeNumber() {
      return this.tweenedNumber.toFixed(2);
    }
  },
  data() {
    return {
      tweenedNumber: 0, //初始化数字，使数字归0
      NumberValue: 9999, //需要变化的数字
      NumberShow: false //数字是否显示
    };
  },
  methods: {
    //数字加载方法
    DigitalLoad(value) {
      console.log(1111);
      //   this.NumberShow = !this.NumberShow;
      if (this.NumberShow) {
        // 0.5 为变化时间
        TweenLite.to(this.$data, 0.5, { tweenedNumber: value });
      } else {
        TweenLite.to(this.$data, 0.5, { tweenedNumber: 0 });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  padding: 40px 0;
  text-align: center;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  box-shadow: 2px 2px 3px #ccc;
  .value{
      font-size: 30px;
     margin-bottom: 10px;
     color: #409EFF;
    //   color: #f4f4f4;
    //  text-shadow: -1px -1px white, 1px 1px rgb(190, 190, 190), 2px 2px #949494, 3px 3px #8d8c8c;
  }
}
</style>
