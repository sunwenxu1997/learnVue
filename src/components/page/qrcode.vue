<template>
  <div>
    <!-- //二维码生成 -->
    <!-- // 用于输入内容的input -->
    <!-- <input v-model="message"> -->
    <!-- // 将获取到的信息画到画布上 -->
    <canvas id="msg"></canvas>
   <!-- <button @click="spread">分享</button> -->
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      message: ''
    };
  },
  created(){
     this.message = 'https://jinzhengbao-h5.neafex.com'
  },
  methods:{
    spread(){
        this.message = 'https://jinzhengbao-h5.neafex.com'
    }
  },
  watch: {
    // 通过监听获取数据
    message(val) {
      // 打印获取到的数据
      console.log(val);
      // 获取页面的canvas
      var msg = document.getElementById("msg");
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, val, function(error) {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
/*  由于输入的内容不同，展示的二维码大小页不一样，所以这里限制画布的大小 */
    #msg{
        border: 2px solid #42b983;
        width:200px;
        height:200px;
    }
</style>
