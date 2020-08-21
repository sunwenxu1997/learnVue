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
        <div class="b_b" v-for="item in 3" :key="item" :style="`transform: scale(${.1*item + .4}) translateY(${-70*item}px);`">
          <div class="l uav-boder"></div>
          <div class="r uav-boder"></div>
        </div>
      </div>
      <div class="uav shen_ht">
        <svg>
          <path
            id="svg_4"
            d="m0.15986,-0.09215l235.45647,0.09215l-40.75344,150.68487l-162.0769,-0.45662l-32.62613,-150.32039z"
          />
        </svg>
      </div>
      <div class="uav shen_hb">
        <svg>
          <path
            id="svg_4"
            d="m0.15986,-0.09215l235.45647,0.09215l-40.75344,150.68487l-162.0769,-0.45662l-32.62613,-150.32039z"
          />
        </svg>
      </div>
      <div class="uav shen_hbr">
        <svg>
          <path id="svg_1" d="m-0.25,0.22656l349.75,-0.22656l-90,151l-259.75,-150.77344z" />
        </svg>
      </div>
      <div class="uav shen_hbl">
        <svg style="transform: scaleX(-1)">
          <path id="svg_1" d="m-0.25,0.22656l349.75,-0.22656l-90,151l-259.75,-150.77344z" />
        </svg>
      </div>
      <div class="uav logo">
        <svg>
          <path
            id="svg_4"
            d="m86.8605,43.58286l-21.74425,-21.7224l-42.79068,42.79068l40.93022,18.13953l-39.99998,47.44184l70.69765,-45.58138l-40.4651,-26.97673l33.37215,-14.09153z"
          />
          <path
            id="svg_5"
            d="m130.1163,43.11774l23.83713,65.2543l17.67441,-35.81394l21.39534,33.95347l22.32557,-63.7209l-26.0465,29.30231l-16.27906,-31.16278l-18.60464,30.69766l-24.30225,-28.51013z"
          />
          <path
            id="svg_6"
            d="m279.88368,64.51309l-31.04657,-33.35031l24.18603,50.69765l-21.86045,33.95348l29.76743,-22.79069l27.44185,22.32557l-18.60465,-37.20929l27.44185,-49.76742l-37.32549,36.14101z"
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
  position: relative;
  transform-style: preserve-3d;
  .uav {
    border: none ;
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke-width: 1;
        opacity: 0.9;
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
  .b_b {
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 110px;
    bottom: 250px;
    .l {
      width: 100px;
      height: 30px;
      background: #808080;
      transform: skewX(45deg);
    }
    .r {
      width: 100px;
      height: 30px;
      background: #808080;
      transform: skewX(-45deg);
    }
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
  path {
    fill: #a0a0a0;
  }
}
.shen_hb {
  transform-origin: 50% 0;
  transform: translateZ(-173px) translateY(-9px) scaleX(0.75) scaleY(0.58)
    rotateX(17deg);
  path {
    fill: #ccc;
  }
}
.shen_hbr,
.shen_hbl {
  width: 350px;
  height: 150px;
  position: absolute;
  bottom: -149px;
  path {
    fill: #a0a0a0;
  }
}
.shen_hbr {
  right: -225px;
  transform-origin: 0% 0%;
  transform: rotateY(100deg) rotateZ(-2deg) rotateX(-12deg) scaleY(0.53)
    scaleX(0.5);
}
.shen_hbl {
  left: -210px;
  transform-origin: 100% 0%;
  transform: rotateY(-100deg) rotateZ(2deg) rotateX(-8deg) scaleX(0.5)
    scaleY(0.53);
}
.logo {
  width: 350px;
  height: 150px;
  transform: scale(0.5) translateZ(1px);
  z-index: 6;
  position: absolute;
  left: 85px;
  bottom: 50px;
  path {
    fill: white;
  }
}
</style>