<template>
  <div class="overall">
    <div class="vessel">
      <img class="bck" :src="list[activeIndex].img" alt />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in list" :key="index">
            <span>BANNER{{index+1}}</span>
            <img :src="i.img" alt style="width:100%" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-prev swiper-button-white"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-button-white"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        {
          img: require("@/assets/img/bck.jpg")
        },
        {
          img: require("@/assets/img/bck1.jpeg")
        },
        {
          img: require("@/assets/img/bck2.jpg")
        }
      ]
    };
  },
  mounted() {
    let _this = this;
    var mySwiper = new Swiper(".swiper-container", {
      effect: "fade", //切换效果
      fadeEffect: {
        crossFade: true
      },
      loop: true, //循环播放
      autoplay: true, //开启自动播放
      //显示底部小圆点
      pagination: {
        el: ".swiper-pagination"
      },
      //显示左右切换
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 4000 //4秒切换一次
      },
      on: {
        //当切换时触发的方法
        slideChange: function() {
          // this.activeIndex 当前轮播图下标
          if (this.activeIndex > _this.list.length) {
            _this.activeIndex = 0;
          } else {
            _this.activeIndex = this.activeIndex - 1;
          }
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.overall {
  overflow: hidden;
}
.vessel {
  width: 800px;
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bck {
  filter: blur(10px);
  width: 100%;
  transform: scale(1.1);
}
img {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
.swiper-container {
  width: 550px;
  height: 300px;
  transition: 0.5s;
  box-shadow: 2px 2px 5px rgb(73, 73, 73);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px rgb(73, 73, 73);
  }
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  span {
    position: relative;
    z-index: 5;
  }
}
.swiper-button-prev,
.swiper-button-next {
  opacity: 0;
  transition: 0.5s;
  // margin:0 1rem;
}
.swiper-container:hover .swiper-button-prev {
  opacity: 1;
  left: 40px;
}
.swiper-container:hover .swiper-button-next {
  opacity: 1;
  right: 40px;
}
</style>