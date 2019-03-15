<template>
  <div class="overall" v-if="maskShow">
    <!-- 图片查看 -->
    <div class="mask" @click="maskShow=false"></div>
      <img :src="src" alt>
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      maskShow: false
    };
  },
  methods:{
      OpenMask(){
          this.maskShow = true;
      }
  }
};
</script>

<style scoped>
.overall{
    position: fixed;
    z-index: 999;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
}
img{
    position: relative;
    z-index: 55;
    animation: fadeIn 0.5s ease both 1;
}@keyframes fadeIn {
    0%{
        opacity: 0;
        transform: scale(0.5)
    }
    100%{
        opacity: 1;
        transform: scale(1)
    }
}
</style>
