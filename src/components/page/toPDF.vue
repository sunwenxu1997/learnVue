<template>
  <div>
    <div ref="IMG">
      <ol>
        <li v-for="item in 50" :key="item">
          <h1>页面转PDF</h1>
        </li>
      </ol>
    </div>
    <div @click="imgDownload" class="download">转PDF</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default {
  data() {
    return {
      imgURL: ""
    };
  },
  methods: {
    // 图片保存方法
    imgDownload() {
      let _this = this;
      // 获取需转图片的范围元素
      let img = this.$refs["IMG"];
      // 图片高度
      var w = parseInt(window.getComputedStyle(img).width);
      // 图片宽度
      var h = parseInt(window.getComputedStyle(img).height);
      //滚轮置顶，避免留白
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // 利用 html2canvas 下载 canvas
      html2canvas(img).then(function(canvas) {
        //转化为本地的图片地址
        _this.imgURL = canvas.toDataURL();
        var filename = "导出的文件.pdf";
        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (w / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = h;
        //页面偏移
        var position = 0;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / w) * h;
        var pdf = new jsPDF("", "pt", "a4");
        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(_this.imgURL, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          // 分页
          while (leftHeight > 0) {
            pdf.addImage(
              _this.imgURL,
              "JPEG",
              0,
              position,
              imgWidth,
              imgHeight
            );
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        //转pdf下载
        pdf.save(filename);
      });
    }
  }
};
</script>

<style scoped>
h1{
  text-align: left;
}
.download{
  position: fixed;
  width: 100px;
  height: 60px;
  background: blueviolet;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  right: 0;
  bottom: 50px;
  z-index: 99;
  cursor: pointer;
}
</style>