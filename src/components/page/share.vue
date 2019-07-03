<template>
  <div style="margin-top:100px;">
    <button @click="shareToQQ()">分享到QQ</button>
    <button @click="shareToRoom()">分享到QQ空间</button>
    <button @click="shareToMicroblog()">分享到微博</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //分享到QQ好友(PC端可用)
    shareToQQ() {
      //此处分享链接内无法携带图片
      const share = {
        title: "东金秀财",
        desc: "描述",
        share_url: "https://xiucai.neafex.com/#/"
      };
      location.replace(
        "https://connect.qq.com/widget/shareqq/index.html?url=" +
          encodeURIComponent(share.share_url) +
          "&title=" +
          share.title +
          "&desc=" +
          share.desc
      );
    },
    //分享到QQ空间(可用)
    shareToRoom() {
        //自定义内容
      const share = {
        title: "东金秀财",
        desc: "描述",
        image_url: ["https://oss.neafex.com/xiucai-img/wxgzh.jpeg"],
        share_url: "https://xiucai.neafex.com/#/"
      };
      let image_urls = share.image_url.map(function(image) {
        return encodeURIComponent(image);
      });
       //跳转地址
      location.replace(
        "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
          encodeURIComponent(share.share_url) +
          "&title=" +
          share.title +
          "&pics=" +
          image_urls.join("|") +
          "&summary=" +
          share.desc
      );
    },
    //分享到微博(可用)
    shareToMicroblog() {
      //自定义内容
      const share = {
        title: "东金秀财",
        image_url: ["https://oss.neafex.com/xiucai-img/wxgzh.jpeg"],
        share_url: "https://xiucai.neafex.com/#/"
      };
      //跳转地址
      location.replace(
        "https://service.weibo.com/share/share.php?url=" +
          encodeURIComponent(share.share_url) +
          "&title=" +
          share.title +
          "&pic=" +
          share.image_url +
          "&searchPic=true"
      );
    }
  }
};
</script>

<style>
</style>
