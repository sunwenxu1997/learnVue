<template>
  <div class="overall">
    <button @click="skip()">支付完成</button>
    <button @click="skip()">支付失败</button>
  </div>
</template>

<script>
export default {
  methods:{
    skip(){
       window.location = 'http://localhost:8080/#/tr?address=pay'
    }
  }
};
</script>

<style>
</style>