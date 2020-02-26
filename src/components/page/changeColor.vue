<template>
  <div class="box">
    <div class="change_tab">
      <span @click="changeColor(1)">主题色1</span>
      <span @click="changeColor(2)">主题色2</span>
      <span @click="changeColor(3)">主题色3</span>
    </div>
    <h3>文字颜色</h3>
    <div class="bck"></div>
  </div>
</template>

<script>
export default {
  methods: {
    changeColor(num) {
      let root = document.querySelector(":root");
      if (num == 1) {
        root.style.setProperty("--color", "rgb(253, 44, 79)");
        root.style.setProperty("--bck", "rgb(255, 192, 203)");
      } else if (num == 2) {
        root.style.setProperty("--color", "rgb(253, 114, 0)");
        root.style.setProperty("--bck", "rgb(253, 216, 186)");
      } else if (num == 3) {
        root.style.setProperty("--color", "rgb(79, 67, 253)");
        root.style.setProperty("--bck", "rgb(196, 192, 255)");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  padding: 50px;
  .change_tab {
    display: flex;
    span {
      margin-right: 20px;
      color: #3d3d3d;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h3 {
    transition: 0.3s;
    color: var(--color);
    text-align: left;
    margin: 20px 0;
  }
  .bck {
    transition: 0.3s;
    width: 100px;
    height: 100px;
    background: var(--bck);
  }
}
</style>