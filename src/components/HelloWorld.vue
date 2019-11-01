<template>
  <div class="hello">
    <img src="../assets/img/logo.png" />
    <h1>{{ msg }}</h1>
    <ul>
    <li><router-link :style="`color:${$ThemeColor} !important`" :to="{name:'drag'}">Tab拖拽</router-link></li>
    <li><router-link :to="{name:'drag+'}">Tab拖拽(修改+删除)</router-link></li>
    <li><router-link :to="{name:'zoom'}">图片滚轮缩放</router-link></li>
    <li><router-link :to="{name:'slot'}">vue插槽</router-link></li>
    <li><router-link :to="{name:'transition'}">vue渐变动画</router-link></li>
    <li><router-link :to="{name:'qrcode',query:{id:'12331',code:'FGD1110',phone:'15518270529'}}">vue生成二维码功能</router-link></li>
    <li><router-link :to="{name:'touch'}">vue-touch左右滑跳转路由</router-link></li>
    <li><router-link :to="{name:'scaleplate'}">标尺滑动功能</router-link></li>
    <li><router-link :to="{name:'cropper'}">vue-cropper 头像上传</router-link></li>
    <li><router-link :to="{name:'DigitalLoad'}">数字加载</router-link></li>
    <li><router-link :to="{name:'DatePicker'}">日期选择器范围</router-link></li>
    <li><router-link :to="{name:'share'}">分享功能</router-link></li>
    <li><router-link :to="{name:'copy'}">一键复制功能</router-link></li>
    <li><router-link :to="{name:'InfiniteScroll'}">Element-ui 无限滚动</router-link></li>
    <li><router-link :to="{name:'clickButton'}">按键点击效果</router-link></li>
    <li><router-link :to="{name:'swiper'}">swiper的使用</router-link></li>
    <li><router-link :to="{name:'mock'}">mock.js的使用</router-link></li>
    <li><router-link :to="{name:'SearchHistory'}">历史搜索功能</router-link></li>
    <li><router-link :to="{name:'DateSchedule'}">日期进度条</router-link></li>
    <li><router-link :to="{name:'SlidingBlock'}">滑块拖动</router-link></li>
    <li><router-link :to="{name:'ChannerBanner'}">轮播图切换效果</router-link></li>
    <li><router-link :to="{name:'wxScan'}">微信扫一扫</router-link></li>
    <li><router-link :to="{name:'PackagingComponents'}">封装组件</router-link></li>
    <li><router-link :to="{name:'Roll'}">滚动效果</router-link></li>
    <li><router-link :to="{name:'DepthCards'}">深度卡片</router-link></li>
    <li><router-link :to="{name:'RuptureText'}">破裂文本</router-link></li>
    <li><router-link :to="{name:'StickyBall'}">黏黏的球</router-link></li>
    <li><router-link :to="{name:'Wave'}">canvas波浪效果</router-link></li>
    <li><router-link :to="{name:'circularRing'}">圆环进度条效果</router-link></li>
    <li><router-link :to="{name:'ParticleButton'}">粒子按键效果</router-link></li>
    <li><router-link :to="{name:'NavigationBar'}">滑动导航栏</router-link></li>
    <li><router-link :to="{name:'vuex'}">vuex的使用</router-link></li>
    <li><router-link :to="{name:'waterfallFlow'}">瀑布流加载</router-link></li>
    <li><router-link :to="{name:'other'}">其他</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Vue,Hei Hei"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  cursor: default;
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 30px;
}
h1{
  margin: 0;
  padding: 0;
}
li {
  display:block;
  margin: 0 10px;
}
a {
  color: #338d65;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
  font-weight: bold;
}
</style>
