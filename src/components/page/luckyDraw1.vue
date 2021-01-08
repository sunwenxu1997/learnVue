<template>
  <div>
    <div class="container">
      <!-- 涂刮蹭 -->
      <img id="redux" src="@/assets/img/bb5fa12a-60a3-496c-8897-8c9190ff494b.png" />
      <!-- 结果层 也可以替换成标签 -->
      <!-- <img id="robot" src="@/assets/img/Tesla.jpg" /> -->
      <div v-if="load" id="robot">谢谢参与</div>
    </div>
    <h2>{{result}}</h2>
  </div>
</template>

<script>
import { jqueryEraser } from '../../assets/js/jquery.eraser'
export default {
  mixins: [jqueryEraser],
  data() {
    return {
      load: false,
      result: '',
    }
  },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 300)
  },
  methods: {
    init(event) {
      let _this = this
      console.log(111)
      $('#redux').eraser({
        completeRatio: 0.7, //当画布被擦除50%时触发事件
        size: 50, //橡皮擦大小，默认40
        completeFunction: function() {
          _this.result = '谢谢参与'
        }
      })
      _this.load = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  margin: 0 10%;
  position: relative;
  width: 489px;
  height: 187px;
  * {
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
  }
}
#robot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: red;
  background: rgb(238, 238, 238);
}
#redux {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
}
</style>