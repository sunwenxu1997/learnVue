<template>
  <div class="hello">
     <img src="../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
     <li><router-link :to="{name:'drag'}">Tab拖拽</router-link></li>
      <li><router-link :to="{name:'drag+'}">Tab拖拽(修改+删除)</router-link></li>
      <li><router-link :to="{name:'zoom'}">图片滚轮缩放</router-link></li>
       <li><router-link :to="{name:'slot'}">vue插槽</router-link></li>
        <li><router-link :to="{name:'transition'}">vue渐变动画</router-link></li>
         <li><router-link :to="{name:'qrcode'}">vue生成二维码</router-link></li>
           <li><router-link :to="{name:'touch'}">vue-touch左右滑跳转路由</router-link></li>
            <li><router-link :to="{name:'scaleplate'}">标尺滑动</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to My Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin-top: 200px;
  cursor: default;
}
ul {
  margin-top: 50px;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
