<template>
  <div>
    <!-- 分享 -->
    <a title="分享到QQ好友" href="javascript:void(0)" class="share_qq" @click="shareToqq()">
      <img src="http://images.cnblogs.com/cnblogs_com/a-cat/1193051/o_img_qq.png">
    </a>
  </div>
</template>

<script>
import Share from "vue-social-share";
export default {
  components: {
    share: Share
  },
  data() {
    return {
      config: {
        url: "", // 网址，默认使用 window.location.href
        source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: "", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: "", // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: "", // 图片, 默认取网页中第一个img标签
        sites: ["qzone", "qq", "weibo", "wechat", "douban"], // 启用的站点
        disabled: ["google", "facebook", "twitter"], // 禁用的站点
        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    shareToqq() {
      var _title,
        _source,
        _sourceUrl,
        _pic,
        _showcount,
        _desc,
        _summary,
        _site,
        _url = "http://www.newsucai.cn",
        _pic = "http://www.newsucai.cn/static/home/images/jpg/__header.jpg";
      var _shareUrl =
        "https://connect.qq.com/widget/shareqq/iframe_index.html?";
      _shareUrl += "url=" + encodeURIComponent(_url || location.href); //分享的链接
      _shareUrl += "&title=" + encodeURIComponent(_title || document.title); //分享的标题
      window.open(_shareUrl, "_blank");
    }
  }
};
</script>

<style>
</style>
