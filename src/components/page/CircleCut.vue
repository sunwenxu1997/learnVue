<template>
  <div class="overall">
    <div class="item" @mousemove="move">
      <img src="@/assets/img/bck3.jpg" alt />
      <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
        <defs>
          <clipPath id="clip">
            <circle cx="0" cy="0" fill="#000" r="0px" />
          </clipPath>
        </defs>
        <text class="svg-text" dy=".3em" x="100px" y="100px">Mount</text>
        <g clip-path="url(#clip)">
          <image
            height="100%"
            preserveAspectRatio="xMinYMin slice"
            width="100%"
            xlink:href="@/assets/img/bck4.jpg"
          />
          <text class="svg-masked-text" dy=".3em" x="100px" y="100px">Mount</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cx: 0,
      cy: 0
    };
  },
  methods: {
    move(e) {
      let box = document.querySelector(".item");
      let dt = document.querySelector("#clip circle");
      let cx = e.pageX - box.offsetLeft;
      let cy = e.pageY - box.offsetTop;
      dt.setAttribute("cx", cx);
      dt.setAttribute("cy", cy);
      dt.setAttribute("r", "130px");
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
.item circle {
  transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: 50% 50%;
  transform: scale(0)
}
.item text {
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
.svg-masked-text {
  fill: white;
}
.item:hover circle,
.item:hover image {
  transform: scale(1);
}
</style>