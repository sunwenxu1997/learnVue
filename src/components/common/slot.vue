<template>
  <div class="overall">
    <div class="box">
      <div
        v-for="(item,index) in list"
        :key="index"
        class="tab-box"
        :style="`background:hsl(153, ${47 - (index+1)*2}%, ${49 - (index+1)*2}%);`"
      >
        <div
          class="left"
          :style="`background:hsl(153, ${47 - (index+1)*4}%, ${49 - (index+1)*4}%);`"
        >
          <slot name="left">{{item}}</slot>
        </div>
        <div
          class="right"
          :style="`background:hsl(153, ${47 - (index+1)*6}%, ${49 - (index+1)*6}%);`"
        >
          <slot name="right">R</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["list"]
};
</script>

<style scoped lang="scss">
@import "../../assets/css/colour.scss";
.tab-box {
  width: 200px;
  height: 40px;
  padding: 20px;
  color: white;

  position: relative;
  .left,
  .right {
    width: 50%;
    height: 100%;
    line-height: 80px;
    position: absolute;
    top: 0;
    opacity: 0.8;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background: hsl(153, 47%, 49%) !important;
    }
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}
</style>
