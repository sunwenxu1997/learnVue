<template>
  <div>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  props: ["msg"],
  watch: {
    msg() {
      this.$emit("cc", "我被子组件改变了");
    }
  },
  model: {
    prop: "msg",
    event: "cc"
  }
};
</script>

<style>
</style>