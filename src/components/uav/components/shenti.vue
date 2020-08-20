<template>
  <div id="shenti">
    <!-- 身体组件 -->
    <div class="uav shen_t">
      <svg>
        <path
          id="svg_1"
          d="m0.71429,138.29017l139.28571,-138.29017l227.14286,0l132.85714,138.57143l-122.85714,661.42857l-235.71429,0l-140.71429,-661.70983z"
        />
      </svg>
      <div class="uav shen_tr">
        <svg>
          <path
            id="svg_2"
            d="m0,-0.99554l347.14286,153.85268l0,518.57143l-347.14286,0l0,-672.42411z"
          />
        </svg>
      </div>
      <div class="uav shen_tl">
        <svg style="transform: scaleX(-1);">
          <path
            id="svg_2"
            d="m0,-0.99554l347.14286,153.85268l0,518.57143l-347.14286,0l0,-672.42411z"
          />
        </svg>
      </div>
      <div class="uav shen_b">
        <svg>
          <path
            id="svg_2"
            d="m0.71429,138.29017l139.28571,-138.29017l227.14286,0l132.85714,138.57143l-122.85714,661.42857l-235.71429,0l-140.71429,-661.70983z"
          />
        </svg>
      </div>
      <div class="uav shen_ht">
        <svg>
          <path
            id="svg_4"
            d="m0.15986,-0.09215l235.45647,0.09215l-40.75344,150.68487l-162.0769,-0.45662l-32.62613,-150.32039z"
          />
        </svg>
      </div>
      <div class="uav shen_hb" v-for="(i,index) in 5" :key="index" >
        <svg>
          <path
            id="svg_4"
            d="m0.15986,-0.09215l235.45647,0.09215l-40.75344,150.68487l-162.0769,-0.45662l-32.62613,-150.32039z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#shenti {
  transform-style: preserve-3d;
  .uav {
    border: none !important;
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke-width: 1;
        opacity: 0.8;
      }
    }
  }
}
.shen_t,
.shen_b {
  width: 501px;
  height: 801px;
  position: relative;
}
.shen_t {
  path {
    fill: #808080;
  }
}
.shen_b {
  transform: scale(0.76) translateZ(-173px) translateY(115px);
  position: absolute;
  bottom: 0;
  path {
    fill: #ccc;
  }
}
.shen_tr,
.shen_tl {
  width: 350px;
  height: 672px;
  position: absolute;
  bottom: 0;
  path {
    fill: #a0a0a0;
  }
}
.shen_tr {
  right: -225px;
  transform-origin: 0 100%;
  transform: rotateY(100deg) rotateX(-10.5deg) rotateZ(-2deg) scaleX(0.5);
}
.shen_tl {
  left: -210px;
  transform-origin: 100% 100%;
  transform: rotateY(-100deg) rotateX(-11.5deg) rotateZ(2deg) scaleX(0.5);
}
.shen_ht,
.shen_hb {
  position: absolute;
  bottom: -150px;
  left: 141px;
  width: 240px;
  height: 151px;
}
.shen_ht {
  transform-origin: 50% 0;
  transform: rotateX(-60deg);
}
.shen_hb {
  transform-origin: 50% 0;
  transform: translateZ(-173px) translateY(-9px) scaleX(.75) scaleY(.58) rotateX(17deg);
}
</style>