<template>
  <div id="jijia">
    <div :id="jiwei?'ji':''">
      <div class="uav ji-1 t"></div>
      <div class="uav ji-1 b"></div>
      <div class="uav ji-1 q"></div>
      <div class="uav ji-1 h"></div>
      <div class="uav ji-2 t"></div>
      <div class="uav ji-2 b"></div>
      <div class="uav ji-2 q"></div>
      <div class="uav ji-2 h"></div>
      <uav-yepian class="uav-yepian" :flying="flying"></uav-yepian>
    </div>
  </div>
</template>

<script>
import yepian from "./yepian";
export default {
  props: {
    flying: Boolean,
    jiwei: Boolean
  },
  components: {
    "uav-yepian": yepian
  }
};
</script>

<style lang="scss" scoped>
#jijia {
  position: relative;
  transform-style: preserve-3d;
  width: 3px;
  .uav{
      opacity: .7;
  }
}
#ji {
  transform-style: preserve-3d;
  transform-origin: 0 50%;
  transform: scaleX(0.7);
}
.uav-yepian {
  position: absolute;
  left: 400px;
  top: -430px;
}
.ji-1 {
  width: 600px;
  height: 50px;
  position: absolute;
  left: -300px;
  &.t {
    transform: skewX(-45deg);
    background: #a3a3a3;
  }
  &.b {
    transform: translateZ(-50px) skewX(-45deg);
    background: #ccc;
  }
  &.q {
    transform: rotateX(-90deg) translateY(25px) translateZ(-25px)
      translateX(25px);
    background: #b6b6b6;
  }
  &.h {
    width: 658px;
    transform: rotateX(-90deg) translateY(25px) translateZ(25px)
      translateX(-25px);
    background: #b6b6b6;
  }
}
.ji-2 {
  width: 60px;
  height: 150px;
  position: absolute;
  top: -100px;
  right: -408px;
  &.t {
    transform: skewX(-45deg);
    background: #a3a3a3;
  }
  &.b {
    transform: translateZ(-50px) skewX(-45deg);
    background: #ccc;
  }
  &.q {
    width: 50px;
    transform: rotateY(90deg) rotateX(-45deg) translateX(25px) translateZ(-25px)
      translateY(-10px) scaleY(0.95);
    background: #ccc;
  }
  &.h {
    width: 50px;
    height: 225px;
    transform: rotateY(90deg) rotateX(-45deg) translateX(25px) translateZ(-10px)
      translateY(-44px) scaleY(0.945);
    background: #ccc;
  }
}
</style>