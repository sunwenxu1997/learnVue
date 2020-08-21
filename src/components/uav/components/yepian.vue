<template>
  <div id="yepian" :class="flying?'flying':''">
    <div class="yepian z">
      <div class="uav ye_t">
        <svg>
          <path
            id="svg_3"
            d="m0.27471,0.21492l49.39565,34.69736l0,164.41747l-49.45058,-43.14501l0.05493,-155.96983z"
          />
        </svg>
      </div>
      <div class="uav ye_b">
        <svg>
          <path
            id="svg_4"
            d="m-0.55553,-0.29852l49.8888,42.52069l0,108.44431l-18.66664,0l-31.22216,-150.965z"
          />
        </svg>
      </div>
    </div>
    <div class="yepian f">
      <div class="uav ye_t">
        <svg>
          <path
            id="svg_3"
            d="m0.27471,0.21492l49.39565,34.69736l0,164.41747l-49.45058,-43.14501l0.05493,-155.96983z"
          />
        </svg>
      </div>
      <div class="uav ye_b">
        <svg>
          <path
            id="svg_4"
            d="m-0.55553,-0.29852l49.8888,42.52069l0,108.44431l-18.66664,0l-31.22216,-150.965z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flying: Boolean
  }
};
</script>

<style lang="scss" scoped>
.flying {
  animation: xuanzhuan .1s linear infinite;
  filter: blur(30px);
}
#yepian {
  transform: translateZ(45px);
  transform-style: preserve-3d;
  .uav {
    border: none !important;
    svg {
      width: 100%;
      height: 100%;
      path {
        opacity: 0.8;
        stroke-width: 1;
      }
    }
  }
}
@keyframes xuanzhuan {
  0% {
    transform: rotate(0deg) translateZ(45px);
  }
  100% {
    transform: rotate(360deg) translateZ(45px);
  }
}
.ye_t,
.ye_b {
  width: 50px;
  //   background: red;
  overflow: hidden;
}
.ye_t {
  height: 200px;
  path {
    fill: rgb(94, 94, 94);
  }
}
.ye_b {
  height: 151px;
  position: relative;
  top: -45px;
  transform-origin: 50% 0;
  transform: rotateX(-20deg) rotateY(-18deg) translateZ(8px) rotateZ(-3deg);
  path {
    fill: rgb(56, 56, 56);
  }
}
.yepian {
  transform-style: preserve-3d;
  position: relative;
  &.z {
    left: -5px;
    top: 50px;
    transform: rotateY(20deg);
  }
  &.f {
    left: 5px;
    top: -50px;
    transform: scaleY(-1) scaleX(-1) rotateY(20deg);
  }
}
</style>