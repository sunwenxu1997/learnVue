<template>
  <div class="rightNav">
    <ul class="tab-nav">
      <li v-for="(i,index) in navList" :key="index">
        <div class="nav" @click="openNav(index,i.list.length)">
          <i class="el-icon-s-home"></i>
          <span>{{i.title}}</span>
          <i v-if="i.list.length" id="right-btn" class="el-icon-arrow-right"></i>
        </div>
        <div class="nav-n-box">
          <div class="nav-n" v-for="(n,index) in i.list" :key="index">{{n.title}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "首页",
          name: "home",
          list: []
        },
        {
          title: "业务介绍",
          name: "BusinessIntroduction",
          list: [
            {
              title: "交易规则",
              name: "BusinessIntroduction"
            },
            {
              title: "政策法规",
              name: "BusinessIntroduction"
            }
          ]
        },
        {
          title: "新闻资讯",
          name: "News",
          list: [
            {
              title: "公告通知",
              name: "BusinessIntroduction"
            },
            {
              title: "公司新闻",
              name: "BusinessIntroduction"
            },
            {
              title: "行业资讯",
              name: "BusinessIntroduction"
            }
          ]
        },
        {
          title: "关于我们",
          name: "AboutUs",
          list: [
            {
              title: "中心介绍",
              name: "BusinessIntroduction"
            },
            {
              title: "法律申明",
              name: "BusinessIntroduction"
            },
            {
              title: "常见问题",
              name: "BusinessIntroduction"
            }
          ]
        }
      ]
    };
  },
  methods: {
    openNav(index, num) {
      let _this = this;
      let nav = document.querySelectorAll(".nav"); //获取父级菜单栏，以便添加选中样式
      let items = document.querySelectorAll(".nav-n-box"); //获取容纳子级菜单栏的容器，以便动态设置高度，实现下拉效果
      console.log(nav)
      //-----------------可注释部分开始------注释后则不是手风琴效果------------------
      // 遍历菜单栏，移除所有选中后的样式   添加此段可实现手风琴效果，注释则实现多展示效果
      for (let i = 0; i < nav.length; i++) {
        // nav[index].classList.contains("nav-n-box-active") 判断标签内是否含有该class属性，以布尔值类型返回
        if (
          items[i].style.height == "" ||
          items[i].style.height == "0rem" ||
          nav[index].classList.contains("nav-n-box-active")
        ) {
          let height = items[index].style.height;
          items[index].style.height = height;
        } else {
          items[i].style.height = "0rem";
        }
        nav[i].classList.remove("nav-n-box-active");
      }
      //-----------------可注释部分结束------------------------

      //根据子菜单栏的高度判断，是否展开菜单栏，若有进行遍历操作，那么每次点击某个菜单栏的时候 height 都为 0
      if (
        items[index].style.height == "" ||
        items[index].style.height == "0rem"
      ) {
        //num 为子菜单栏的个数，根据子菜单栏确定容器的高度
        items[index].style.height = num * 2 + "rem";
        //添加右箭头旋转样式
        nav[index].classList.add("nav-n-box-active");
      } else {
        items[index].style.height = "0rem";
        //移除右箭头旋转样式
        nav[index].classList.remove("nav-n-box-active");
      }
      //------------------------------------------
    }
  }
};
</script>

<style lang="scss" scoped>
.rightNav {
  position: fixed;
  width: 65%;
  height: 100%;
  top: 20%;
  left: 20%;
  background: white;
  z-index: 100;
  max-width: 200px;
  .tab-nav {
    padding: 1rem;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      cursor: pointer;
      user-select: none;
      .nav {
        padding: 1rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          transition: 0.3s;
          color: rgb(0, 225, 255);
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: left;
          color: #808080;
          font-size: 0.88rem;
          margin-left: 1rem;
        }
      }
      .nav-n-box {
        transition: 0.3s;
        width: 100%;
        height: 0;
        overflow: hidden;
        .nav-n {
          width: 100%;
          font-size: 0.88rem;
          color: #808080;
          height: 2rem;
          text-align: left;
          padding-left: 2rem;
          line-height: 2rem;
          transition: 0.3s;
          &:hover {
            background: rgb(0, 225, 255);
            color: white;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
//点击后右箭头的反转效果
.nav-n-box-active {
  #right-btn {
    transform: rotate(90deg) !important;
  }
}
</style>