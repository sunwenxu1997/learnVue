<template>
  <div class="overall">
    <div class="mouseMove">
      <div class="dot"></div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  mounted() {
    let mm = document.querySelector(".mouseMove");
    let dt = document.querySelector(".dot");
    window.addEventListener("mousemove", function(e) {
      let x = e.pageX + 5;
      let y = e.pageY + 5;
      TweenLite.to(mm, 0, { x: x, y: y });
      // TweenLite.to(dt, 0, { x: x, y: y });
    });
  }
};
</script>

<style lang="scss" scoped>
.mouseMove {
  width: 5px;
  height: 5px;
  background: red;
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  .dot{
    width: 50px;
    height: 50px;
    clip-path: polygon();
    position: absolute;
    background: none;
    z-index: -1;
    border-radius: 50%;
    border: 2px solid #b3b3b3;
    transform: translateX(-25px) translateY(-25px);
  }
}
.box {
  width: 300px;
  height: 300px;
  background: #ccc;
  transition: 0.5s;
  &:hover {
    background: black;
  }
}
</style>