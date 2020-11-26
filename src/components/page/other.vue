<template>
  <div>
    <!-- 此处是要截取的图片 -->
    <div class="over">
      <div id="imgDownload" ref="QRcodeSrcImg" @click="maskShow=false">
        <div class="box">
          <canvas id="QRCode"></canvas>
          <p class="text" v-for="(item,index) in 200" :key="index">{{index+1}}扫描二维码</p>
        </div>
      </div>
    </div>
    <!-- 此处是储存截取后的图片 -->
    <div class="photoShow" v-if="photoShow">
      <div id="photo">
        <p>长按图片保存</p>
        <img :src="photoUrl" id="img" alt />
        <!-- <span>长按图片保存和分享</span> -->
      </div>
    </div>
    <!-- 此处是保存到本地的方法 -->
    <div class="bottom" @click="imgDownload()">
      <div style="text-align: center;">
        <p style="font-size:1.4rem;margin-top:10px;color:#a5a4a4;;">保存到本地</p>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      photoUrl: "",
      photoShow: false
    };
  },
  methods: {
    // 图片保存方法
    imgDownload() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      let _this = this;
      _this.photoShow = true;
      // 声明一个画布元素,存储需下载图片范围
      let canvas = document.createElement("canvas");
      // 获取需下载范围元素
      let img = this.$refs["QRcodeSrcImg"];
      // 图片高度
      var w = parseInt(window.getComputedStyle(img).width);
      // 图片宽度
      var h = parseInt(window.getComputedStyle(img).height);
      // 声明画布宽高
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      // console.log(w, h);
      // let context = canvas.getContext("2d");
      // context.scale(2, 2);
      // 利用 html2canvas 下载 canvas
      html2canvas(img, { canvas: canvas }).then(function(canvas) {
        _this.photoUrl = canvas.toDataURL();
        // let blob = new Blob([_this.photoUrl]);
        let fileName = "文件名.png";
        if ("download" in document.createElement("a")) {
          // 非IE下载
          let elink = document.createElement("a");
          elink.download = fileName;
          elink.style.display = "none";
          elink.href = _this.photoUrl;
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName);
        }
        console.log(_this.photoUrl);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.over {
  width: 400px;
  height: 300px;
  overflow: auto;
}
.photoShow {
  background: rgba(0, 0, 0, 0.616);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  #photo {
    //保存图片容器大小
    width: 250px;
    // overflow: auto;
    img {
      display: block;
      width: 100%;
      // height: 100%;
    }
  }
}
#imgDownload {
  width: 300px;
  // height: 1000px;
  // background: red;
}
</style>