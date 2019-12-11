<template>
  <!-- 支付结果加载模块 -->
  <el-main
    v-if="waiting"
    v-loading="waiting"
    element-loading-background="rgba(255, 255, 255, 0.7)"
    class="callbackEleLoading"
    element-loading-text="支付结果获取中，请等待"
  ></el-main>
</template>

<script>
export default {
  data() {
    return {
      waiting: true,
      selfTimeout: null, //支付超时
      selfInterval: null //支付弹框开启，开始轮询
    };
  },
  mounted() {
    this.initWebSocket()
    //给支付设定一个等待限制，30s后无影响时就断开连接
    this.selfTimeout = setTimeout(() => {
      this.websocketclose();
      this.waiting = false;
      this.$message.warning("支付超时，请重新支付");
    }, 30000);
  },
  methods: {
    //初始化weosocket
    initWebSocket() {
      let XAuthToken = window.sessionStorage.getItem("XAuthToken");
      if (XAuthToken) {
        let websocket = "";
        if ("WebSocket" in window) {
          let wsuri =
            "wss://" + 'websocket地址' + "/websocket/" + XAuthToken; //ws地址
          window.websock = new WebSocket(wsuri);
          window.websock.onopen = this.websocketonopen;
          window.websock.onerror = this.websocketonerror;
          window.websock.onsend = this.websocketsend;
          window.websock.onmessage = this.websocketonmessage;
          window.websock.onclose = this.websocketclose;
        } else {
          console.log("当前浏览器 Not support websocket");
        } //连接成功建立的回调方法 websocket.onopen = function () { console.log("WebSocket连接成功")
      }
    },
    // WebSocket连接成功
    websocketonopen() {
      console.log("WebSocket连接成功");
      console.log("开始每隔1s发送信息询问");
      this.selfInterval = setInterval(this.websocketsend, 1000);
    },
    // WebSocket连接发生错误
    websocketonerror(e) {
      //错误
      console.log(e);
      console.log("WebSocket连接发生错误");
    },
    //数据接收
    websocketonmessage(e) {
      if (e) {
        let redata = JSON.parse(e.data);
        //注意：长连接我们是后台直接1秒推送一条数据，
        //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
        //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
        console.log(redata.retCode);
        if (redata.retCode == "N00000") {
          this.waiting = false;
          this.$message.success("支付成功");
        } else {
          this.$message.error("支付失败");
        }
        clearInterval(this.selfInterval);
        this.websocketclose();
      }
    },
    //数据发送
    websocketsend() {
      let dataContent = {
        msg: "等待支付结果"
      };
      console.log(dataContent.msg);
      window.websock.send(JSON.stringify(dataContent));
    },
    //连接关闭
    websocketclose(e) {
      clearTimeout(this.selfTimeout);
      clearInterval(this.selfInterval);
      console.log("连接关闭");
    }
  }
};
</script>

<style scoped>
.callbackEleLoading {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>