<template>
  <div>
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div">
      <section>左右滑</section>
    </v-touch>
  </div>
</template>

<script>
// npm install --s vue-touch@next

// main.js
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, { name: 'v-touch' })
// VueTouch.config.swipe = {
//   threshold: 100 //手指左右滑动距离     
// }

export default {
  methods: {
    onSwipeLeft: function() {
      this.$router.push({ path: "/transition" });
    },
    onSwipeRight: function() {
      this.$router.push({ path: "/zoom" });
    }
  }
};
</script>

<style scoped>
section {
  width: 500px;
  height: 200px;
  border: 1px solid black;
  float: left;
}
</style>
