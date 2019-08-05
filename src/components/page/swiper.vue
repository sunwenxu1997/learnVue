<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(i,index) in 5" :key="index">{{index}}</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from 'axios'
export default {
  mounted() {
    let _this = this;
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 1,
      on: {
        //回调函数，swiper从当前slide开始过渡到另一个slide时执行
        slideChangeTransitionStart: function() {
           console.log( this.activeIndex)
        }
      }
    });
 
  }
};
</script>

<style>
/* 每个轮播图占比大小，100%则整个屏幕铺满 */
.swiper-slide{
    width: 80%;
    height: 20rem;
    line-height: 20rem;
    background: red;
}
/* 滑动到当前轮播图的样式 */
.swiper-slide-active{
  background:#ff6600;
  color:#fff;
}
</style>
