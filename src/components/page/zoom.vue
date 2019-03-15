<template>
  <div class="overall">
      <div>
 <img src="@/assets/img/logo.png" alt @mousewheel="rollImg(this)" ref="bigImage">
      <p>滚动鼠标</p>
      </div>
     
  </div>
</template>

<script>
export default {
  methods: {
   rollImg() {
      /* 获取当前页面的缩放比
            若未设置zoom缩放比，则为默认100%，即1，原图大小
        */
      var zoom = parseInt(this.$refs.bigImage.style.zoom) || 100;
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom
            wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动
        */
      zoom += event.wheelDelta / 12;
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 100 && zoom <250) {
        this.$refs.bigImage.style.zoom = zoom + "%";
      }
      return false;
    },
  }
};
</script>

<style>
</style>
