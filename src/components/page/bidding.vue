<template>
  <div class="overall-home">
    <div id="head-nav">
      <div class="head-nav">
        <div class="nav-l">
          <span class="logo-text">NEAFEX</span>
          <span>东金中心电子竞价系统</span>
        </div>
        <div class="nav-r">
          <div class="user">
            <i class="el-icon-user"></i>
            <span class="toLogin">登录</span>
          </div>
        </div>
      </div>
    </div>
    <div id="home-content">
      <div class="home-content">
        <div class="home-con-box" style="width:40%;height:280px;">
          <div class="box-title">招标信息</div>
          <div class="text-box" v-for="item in 5" :key="item">
            <span class="title">项目名称：</span>
            <span class="msg">why</span>
          </div>
          <div id="button-box">
            <div class="button-box" style="margin-right:20px;">下载招标文件</div>
            <div class="button-box">下载招标文件</div>
          </div>
        </div>
        <div class="home-con-box" style="width:55%;height:280px;">
          <div class="box-title">招标公告</div>
          <div class="notice-box">
            <div class="notice" v-for="item in 10" :key="item" @click="openNotice()">
              <span>竞价时间通知</span>
              <span class="time">2019-11-21</span>
            </div>
          </div>
        </div>
        <div class="home-con-box" style="width:25%;height:180px;">
          <el-table :data="tableData" style="width:100%;" :height="130">
            <el-table-column prop="date" label="目前排名" width="100" align="center"></el-table-column>
            <el-table-column prop="name" label="公司名称" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="home-con-box" style="width:70%;height:180px;">
          <div class="box-title">标书上传</div>
          <div class="upload">
            <div class="img">
              <i class="el-icon-s-promotion"></i>
            </div>
            <h2>应标文件上传未开始</h2>
            <div class="button-box">查看文件</div>
          </div>
        </div>
        <div class="home-con-box" style="width:100%;height:340px;">
          <div class="box-title">投标信息</div>
          <div id="toubiao-msg">
            <el-table :data="tableData" style="width:50%;" :height="250">
              <el-table-column prop="date" label="投标次数" width="100" align="center"></el-table-column>
              <el-table-column prop="date" label="价格(元)" width="200" align="center"></el-table-column>
              <el-table-column prop="name" label="投标时间" align="center"></el-table-column>
              <el-table-column prop="name" label="剩余投标次数" align="center"></el-table-column>
            </el-table>
            <div class="toubiao-r">
              <div class="count-down">
                <span class="remain-text">剩余时间&#x3000;</span>
                <input type="text" class="time" v-model="hours" />:
                <input type="text" class="time" v-model="mines" />:
                <input type="text" class="time" v-model="second" />
              </div>
              <div class="input-box">
                <span class="label">输入报价:</span>
                <input type="text" placeholder="请输入报价" maxlength="12" />
                <span class="dot"></span>
                <span class="yuan">元</span>
              </div>
              <div class="input-box">
                <span class="label">确认报价:</span>
                <input type="text" placeholder="请确认报价" maxlength="12" />
                <span class="dot"></span>
                <span class="yuan">元</span>
              </div>
              <div id="button-box">
                <div class="button-box">确认</div>
                <div class="button-box">重置</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 时间格式化工具
import moment from "moment";
export default {
  data() {
    return {
      hours: "02",
      mines: "15",
      second: "55",
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    let _this = this;
    setInterval(() => {
      let nowTime = new Date();
      _this.hours = moment(nowTime).format("HH");
      _this.mines = moment(nowTime).format("mm");
      _this.second = moment(nowTime).format("ss");
    }, 1000);
  },
  methods: {
    openNotice() {
      this.$alert(
        "竞价时间通知竞价时间通知竞价时间通知竞价时间通知竞价时间通知",
        "竞价时间通知",
        {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        }
      );
    }
  }
};
</script>

<style lang="scss" >
body {
  &::-webkit-scrollbar {
    opacity: 0;
    background: transparent !important;
    width: 2px; //y轴滚轮的宽
    // height: 5px; //x轴滚轮的高
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    // border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #eeeeee;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // border-radius: 10px;
    background: transparent;
    //  -webkit-scrollBar-track-color:black;
  }
}
.overall-home {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f3f3f3;
  #head-nav {
    z-index: 99;
    width: 100%;
    height: 80px;
    background: #08264c;
    position: fixed;
    box-sizing: border-box;
    min-width: 1200px;
    .head-nav {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      color: white;
      span {
        font-size: 15px;
      }
      .nav-l {
        .logo-text {
          font-size: 30px;
          font-weight: bold;
          margin-right: 10px;
        }
      }
      .nav-r {
        cursor: default;
        i {
          padding: 0 5px;
          font-size: 1.5rem;
          color: white;
        }
        .toLogin {
          cursor: pointer;
        }
      }
    }
  }

  #home-content {
    width: 100%;
    min-width: 1200px;

    background: #f3f3f3;
    .home-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .home-con-box {
      margin: 20px 0;
      height: 100%;
      transition: 0.5s;
      border-radius: 2px;
      box-sizing: border-box;
      padding: 15px 30px;
      background: white;
      box-shadow: 0px 0px 5px #a8a8a8;
      position: relative;
      &:hover {
        box-shadow: 0px 0px 15px #a8a8a8;
      }
      &:hover::before {
        box-shadow: 0px 0px 1px #a8a8a8 inset;
      }
      &::before {
        content: "";
        width: 15px;
        height: 15px;
        background: #f3f3f3;
        position: absolute;
        right: 15px;
        top: 15px;
        box-shadow: 2px 2px 5px #a8a8a8 inset;
        transition: 0.5s;
      }
      .box-title {
        text-align: left;
        font-size: 17px;
        font-weight: bold;
        color: #5a5a5a;
        position: relative;
        margin-bottom: 20px;
        padding-left: 15px;
        &::before {
          content: "";
          width: 5px;
          height: 20px;
          background: #08264c;
          position: absolute;
          left: 0px;
          top: 2px;
        }
      }
      .notice-box {
        height: 200px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          opacity: 0;
          background: transparent !important;
          width: 2px; //y轴滚轮的宽
          // height: 5px; //x轴滚轮的高
        }
        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          // border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          background: #eeeeee;
        }
        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          // border-radius: 10px;
          background: transparent;
          //  -webkit-scrollBar-track-color:black;
        }
        .notice {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
          margin: 5px 0;
          padding: 5px;
          cursor: pointer;
          &:hover {
            background: #f0f0f0;
          }
        }
      }
      .upload {
        height: calc(100% - 50px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          min-width: 100px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 3rem;
            color: #08264c;
          }
        }
        h2 {
          color: #5a5a5a;
        }
      }
      #button-box {
        display: flex;
        margin-top: 20px;
      }
      #toubiao-msg {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        .toubiao-r {
          width: 40%;
          height: 200px;
          margin-left: 100px;
          #button-box {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            .button-box {
              margin: 0 10px;
            }
          }
          .count-down {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-weight: bold;
            background: #ececec;
            border: 3px dashed #08264c;
            box-sizing: border-box;
            .remain-text {
              font-size: 20px;
              font-weight: bold;
            }
            .time {
              display: inline-block;
              width: 50px;
              height: 50px;
              border: none;
              margin: 0 5px;
              background: #08264c;
              opacity: 0.8;
              font-size: 35px;
              text-align: center;
              color: white;
              font-weight: bold;
              text-shadow: 2px 2px 3px rgb(66, 66, 66);
            }
          }
        }
      }
    }
  }

  .text-box {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 15px;
  }
  .button-box {
    padding: 10px 20px;
    background: #08264c;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    &:active {
      opacity: 0.8;
    }
  }

  .el-table__body-wrapper.is-scrolling-none {
    &::-webkit-scrollbar {
      opacity: 0;
      background: transparent !important;
      width: 2px; //y轴滚轮的宽
      // height: 5px; //x轴滚轮的高
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      // border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #eeeeee;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      // border-radius: 10px;
      background: transparent;
      //  -webkit-scrollBar-track-color:black;
    }
  }
  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    position: relative;
    .label {
      min-width: 100px;
      font-weight: bold;
      font-size: 17px;
    }
    .dot {
      transition: 0.5s;
      width: 5px;
      height: 5px;
      background: #08264c;
      opacity: 0.8;
      position: absolute;
      left: 0;
      opacity: 0;
      transform: translateX(-20px);
    }
    input {
      width: 100%;
      height: 25px;
      border: none;
      outline: none;
      border-bottom: 2px solid #ccc;
      padding: 5px 10px;
      font-size: 15px;
      font-weight: bold;
      color: red;
      &:focus ~ .dot {
        transform: translateX(-10px);
        opacity: 1;
      }
    }
    .yuan {
      min-width: 50px;
      font-weight: bold;
      font-size: 17px;
    }
  }
}
</style>