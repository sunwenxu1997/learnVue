<template>
  <div
    class="main"
    ref="main"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    infinite-scroll-delay="500"
  >
    <!-- infinite-scroll-delay  element-ui 默认是200ms ，interval  vue-waterfall 的回流动作之间的最小时间间隔也是 200ms,相等的话会有冲突 -->
    <waterfall :line-gap="w/waterLine">
      <waterfall-slot
        v-for="(item, index) in list"
        :width="w/waterLine"
        :height="randomHeightList[index].height"
        :order="index"
        :key="item.id"
      >
        <div class="box" :style="`animation-delay: ${randomHeightList[index].delay}s`">
          <div class="content" :style="`background:${randomHeightList[index].bck}`">
            <div class="img" v-if="item.imgUrl">IMG</div>
            <div class="msg">{{index+1}}</div>
          </div>
        </div>
      </waterfall-slot>
    </waterfall>
    <section class="noMore">
      <p v-if="loading" style="margin-top:10px;" class="loading">
        <span></span>
      </p>
      <p v-if="noMore" style="margin:10px 0;font-size:12px;color:#ccc">没有更多了</p>
    </section>
  </div>
</template>

<script>
import { waterfall, WaterfallSlot } from "vue-waterfall";
export default {
  components: {
    waterfall,
    WaterfallSlot
  },
  data() {
    return {
      w: 0, //窗口宽度
      waterLine: 3, //几列瀑布流  此处是3列
      randomMinHeight: 120, //随机最小高度
      randomMaxHeight: 300, //随机最大高度
      totalPages: 0, //后端返回的总条数
      count: 0, //起始页码
      list: [], //后端返回的数据列表
      scrollbarWidth: 0, //滚动条宽度
      loading: false,
      randomHeightList: [] //储存随机高度的列表，避免再次请求数据，list改变导致数据重新渲染
    };
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  created() {
    this.getMessage();
  },
  mounted() {
    this.judgeScroll();
  },
  methods: {
    // m~n之间的随机整数
    random(m, n) {
      return Math.floor(Math.random() * (n - m + 1) + m);
    },
    //解决PC端有滚动条时造成的窗口变化，导致无法铺满整个屏幕
    judgeScroll() {
      let odiv = this.$refs["main"];
      this.scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;
      this.w = window.innerWidth - this.scrollbarWidth;
    },
    //滑到底部时进行加载
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 1; //页数+1
        this.getMessage(); //调用接口，此时页数+1，查询下一页数据
      }, 2000);
    },
    //获取后端返回的数据信息
    getMessage() {
      let params = {
        templateId: "",
        pageNumber: this.count,
        pageSize: 20 //每页查询条数
      };
      this.$axios
        .post(
          "https://xiucai-api-prod0625.neafex.com/website/website/getNewsList",
          params,
          {
            headers: {
              "channel-code": "AXXXXXXXXX",
              "client-type": "MOH5",
              version: "0.0.1"
            }
          }
        )
        .then(res => {
          console.log(res);
          let heightList = [];
          //每次请求数据都会把相对应的随机瀑布高度给存到 randomHeightList ，方便list变化时，直接取相对应的randomHeightList 高度
          for (let i = 0; i < res.data.body.content.length; i++) {
            let obj = {
              height: this.random(this.randomMinHeight, this.randomMaxHeight),
              bck: `hsl(210, 100%, ${this.random(63, 85)}%)`,
              delay: i / 10
            };
            heightList.push(obj);
          }
          this.randomHeightList = this.randomHeightList.concat(heightList);
          //因为每次后端返回的都是数组，所以这边把数组拼接到一起
          this.list = this.list.concat(res.data.body.content);
          this.totalPages = res.data.body.totalPages;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
}
.noMore {
  width: 100%;
}
.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #409eff;
  border-left: 2px solid transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  box-sizing: border-box;
  animation: BOX 0.5s ease both 1;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    &:hover .msg {
      transform: scale(1.5);
    }
    .img {
      width: 100%;
      height: 100%;
      color: white;
      font-weight: 400;
      position: absolute;
      background: #409eff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      z-index: 99;
      &:hover {
        opacity: 0;
      }
    }
    .msg {
      transition: 0.5s;
      color: white;
      font-weight: 200;
      font-size: 2rem;
    }
  }
}
@keyframes BOX {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>