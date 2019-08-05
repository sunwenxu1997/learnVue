<template>
  <div>
    <div class="cropper-content">
      <div class="cropper">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="false"
          :fixed="true"
          :fixedNumber="[1,1]"
          :full="option.full"
          :centerBox="true"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :fixedBox="option.fixedBox"
          @realTime="realTime"
        ></vueCropper>
      </div>
    </div>
    <div class="bottom-button">
      <div class="selectImg">
        <span class="text">选择图片</span>
        <input
          type="file"
          class="uploads"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event)"
          ref="selectImg"
        >
      </div>
      <!-- <span @click="down()">下载图片</span> -->
      <div class="uploading" @click="finish()">上传头像</div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  components: {
    vueCropper: VueCropper
  },
  data() {
    return {
      headImg: "",
      //剪切图片上传
      crap: false,
      previews: {},
      option: {
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        original: false,
        canMoveBox: false,
        autoCrop: true,
        fixedBox: true
      },
      fileName: "", //本机文件地址
      downImg: "#",
      uploadImgRelaPath: "" //上传后的图片的地址（不带服务器域名）
    };
  },
  mounted(){
    
  this.$refs.selectImg.click()
  },
  methods: {
    //上传图片（点击上传按钮）
    finish() {
      let _this = this;
      let formData = new FormData();
      // 输出
      this.$refs.cropper.getCropBlob(data => {
        let img = window.URL.createObjectURL(data);
        console.log(data);
        // formData.append("file", data, this.fileName);
        console.log(img)
        let uploadData = new FormData();
         uploadData.append("file", data);
        this.$axios.post('https://xiucai-api-sit.neafex.com/core-api/userSignIn/uploadUserAvatar',uploadData).then(res=>{
          console.log(res)
           _this.$message({
          //element-ui的消息Message消息提示组件
          type: "success",
          message: "上传成功"
        });
        })
       
      });
    },
    // 实时预览函数
    realTime(data) {
      console.log(data);
      this.previews = data;
    },
    //下载图片
    down() {
      var aLink = document.createElement("a");
      aLink.download = "author-img";
      this.$refs.cropper.getCropBlob(data => {
        this.downImg = window.URL.createObjectURL(data);
        aLink.href = window.URL.createObjectURL(data);
        aLink.click();
      });
    },
    //选择本地图片
    uploadImg(e) {
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        _this.option.img = data;
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    }
  }
};
</script>

<style lang="scss">
// 底部按钮建
.bottom-button {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  .uploading {
    width: 80px;
    height: 2rem;
    line-height: 2rem;
    background: #40ce53;
    color: white;
    border-radius: 0.25rem;
    font-size: 0.8rem;
  }
  .selectImg {
    width: 80px;
    height: 2rem;
    line-height: 2rem;
    color: white;
    font-size: 0.8rem;
    background: #65a2e7;
    border-radius: 0.25rem;
    position: relative;
  }
  .text{
     position: absolute;
     z-index: 5;
     left: 15px;
  }
  .uploads {
    opacity: 0;
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
//改变背景色
.cropper-box {
  background: #333 !important;
}
//使截图框变为圆形
.cropper-crop-box {
  overflow: hidden;
  border-radius: 50% !important;
}
//截图相关样式
.cropper-content {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  .cropper {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .show-preview {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    .preview {
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #cccccc;
      background: #cccccc;
      margin-left: 40px;
    }
  }
}
</style>