<template>
  <div class="overall">
    <!-- 按键点击效果 -->
    <div class="box">
      <div
        class="btn"
        v-for="(i,index) in 4"
        :key="index"
        @mousedown="downBtn"
        @mousemove="moveBtn(index)"
        @click="clickBtn(index)"
      >
        <span>{{index}}</span>
        <div ref="cover" class="changeCover" :class="btnIndex == index?'active':''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnIndex: null,
      hoverIndex: null
    };
  },
  methods: {
    moveBtn(index) {
      console.log(index)
      this.hoverIndex = index;
    },
    downBtn(e) {
      if (this.btnIndex == this.hoverIndex) {
        this.btnIndex = null;
      }
      let x = e.offsetX;
      let y = e.offsetY;
      this.$refs["cover"][this.hoverIndex].style.top = y + "px";
      this.$refs["cover"][this.hoverIndex].style.left = x + "px";
    },
    clickBtn(index) {
      this.btnIndex = index;
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  border: 1px solid #42b983;
}
.box .btn {
  width: 80px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-align: center;
  color: #808080;
  cursor: pointer;
  border-right: 1px solid #42b983;
  position: relative;
  overflow: hidden;
  user-select: none;
}
.box .btn:last-child {
  border-right: none;
}
.box .btn:hover span {
  transition: 0.5s;
  color: #42b983;
}
.changeCover {
  width: 2px;
  height: 2px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: rgba(92, 199, 149, 0.267);
  transform: scale(0);
}
.active {
  transition: 0.7s;
  transform: scale(200);
  /* 使用动画，点击后背景色消失 */
  animation: change 0.7s ease both 1;
}
@keyframes change {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(200);
    opacity: 0;
  }
}
</style>
