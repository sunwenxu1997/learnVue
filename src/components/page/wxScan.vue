<template>
  <div>
    <button @click="openScanQRCode()">调用微信扫一扫</button>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import browser from "@/assets/js/browser.js";
export default {
  data() {
    return {
      AppID: "wx0fb2b15f42a43184",
      AppSecret: "c7d37d76bbff2a85917cca854354d785",
      wxOpen: false
    };
  },
  created() {
    if (browser.versions.mobile) {
      //判断是否是移动设备打开。browser代码在下面
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        this.wxOpen = true;
      }
    }
  },
  mounted() {
    this.getAccessToken();
  },
  methods: {
    getAccessToken() {
      let params = {
        appid: "wx5d8ddad0b6436ef8",
        secret: "19a5928c98b31a27dd56d326d10b3fda",
        url: window.location.href.split("#")[0]
      };
      this.$axios
        .post("http://192.168.0.127:3000/getWX", params)
        .then(res => {
          console.log(res);
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appid, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.noncestr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    openScanQRCode() {
      if (this.wxOpen) {
        wx.ready(function() {
          // config信息验证成功后会执行ready方法,所有接口调用都必须在config接口获得结果之后
          // config 是一个客户端的异步操作,所以如果需要在页面加载时调用相关接口,则须把相关接口放在ready函数中调用来确保正确执行.对于用户触发是才调用的接口,则可以直接调用,不需要放在ready函数中
          wx.checkJsApi({
            // 判断当前客户端版本是否支持指定JS接口
            jsApiList: ["scanQRCode"],
            success: function(res) {
              // 以键值对的形式返回，可用true，不可用false。如：{"checkResult":{"scanQRCode":true},"errMsg":"checkJsApi:ok"}
              if (res.checkResult.scanQRCode === true) {
                wx.scanQRCode({
                  // 微信扫一扫接口
                  desc: "scanQRCode desc",
                  needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                  scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                  success: function(res) {
                    window.location.href = res.resultStr;
                    // const getCode = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  }
                });
              } else {
                alert("抱歉，当前客户端版本不支持扫一扫");
              }
            },
            fail: function(res) {
              // 检测getNetworkType该功能失败时处理
              alert("fail" + res);
            }
          });
        });
        /* 处理失败验证 */
        wx.error(function(res) {
          // config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
          alert("配置验证失败: " + res.errMsg);
        });
      } else {
        alert("请用微信打开");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>