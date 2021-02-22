<template>
  <div class="body">
    <slider :planNum.sync="plan" :color="['#D6FF7F','#00B3CC']"></slider>
    <slider :planNum.sync="plan1" :color="['#ED7B84','#9055FF']"></slider>
    <slider :planNum.sync="plan2" :color="['#2F80ED']"></slider>
    <slider :planNum.sync="plan3"></slider>
  </div>
</template>

<script>
import slider from '../common/slider'
export default {
  components: {
    slider
  },
  data() {
    return {
      plan: 75,
      plan1: 45,
      plan2: 100,
      plan3: 88
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.body {
  display: inline-block;
  margin: 50px auto;
}
</style>