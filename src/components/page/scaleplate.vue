<template>
  <div>
    <!-- <h3 id="numberID"></h3> -->
    <input id="numberID" type="number" v-model="inputNumber" @input="inputChange()">
    <button @click="toLeft()">往左</button>
    <button @click="toRight()">往右</button>
    <div class="box" >
      <span class="pillar"></span>
      <div class="wrapper" id="wrapper1">
        <div class="scroller" :style="`transform: translateX(-${inputNumber*5/1000}px)`">
          <ul class="clearfix" >
            <li v-for="(i,index) in 101" :key="index">
              <span>
                <i>{{index*10000}}</i>
              </span>
              <section v-for="(i,index) in 10" :key="index"></section>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iscroll from "@/assets/js/iscroll.js";
import navbarscroll from "@/assets/js/navbarscroll.js";
export default {
  data() {
    return {
      inputNumber:'',
      inputValue: 0,
      defaultSelect: 0,
      castMoney: 1000, //起投金额
      IScroll: window.IScroll
    };
  },
  watch: {
    inputValue(n, o) {
      if (n != 0) {
        console.log(111);
        this.defaultSelect = Number(this.inputValue) / 1000;
      }
    }
  },
  created() {
    this.setSession();
  },
  mounted() {
    $(function() {
      //demo示例六 通过id调取
      $(".wrapper").navbarscroll({
        duibiScreenWidth: 0.1, //单位以rem为准，默认为0.4rem
        scrollerWidth: 1, //单位以px为准，默认为3,[仅用于特殊情况：外层宽度因为小数点造成的不精准情况]
        fingerClick: 0, //目标第0或1个选项触发,必须每一项长度一致，方可用此项
        defaultSelect: 8,
        endClickScroll: function(obj) {
          console.log(obj);
        }
      });
    });
  },
  methods: {
    inputChange(){
      console.log(document.getElementById("numberID"))
    },
    //把起投金额储存到sessionStorage里面
    setSession() {
      let _this = this;
      window.sessionStorage.setItem("castMoney", _this.castMoney);
    },
    toLeft() {
      this.inputValue = document.getElementById("numberID").innerText;
      this.defaultSelect = Math.floor(Number(this.inputValue) / 1000);
      this.defaultSelect -= 5;
      if (this.defaultSelect < 0) {
        this.defaultSelect = 1;
      }
      $(".wrapper").navbarscroll({
        duibiScreenWidth: 0.1, //单位以rem为准，默认为0.4rem
        scrollerWidth: 1, //单位以px为准，默认为3,[仅用于特殊情况：外层宽度因为小数点造成的不精准情况]
        defaultSelect: this.defaultSelect,
        fingerClick: 0, //目标第0或1个选项触发,必须每一项长度一致，方可用此项
        endClickScroll: function(obj) {
          console.log(obj);
        }
      });
      this.inputValue = document.getElementById("numberID").innerText;
      console.log(this.inputValue);
    },
    toRight() {
      this.inputValue = document.getElementById("numberID").innerText;
      this.defaultSelect = Math.floor(Number(this.inputValue) / 1000);
      this.defaultSelect += 5;
      if (this.defaultSelect > 997) {
        this.defaultSelect = 997;
      }
      $(".wrapper").navbarscroll({
        duibiScreenWidth: 0.1, //单位以rem为准，默认为0.4rem
        scrollerWidth: 1, //单位以px为准，默认为3,[仅用于特殊情况：外层宽度因为小数点造成的不精准情况]
        defaultSelect: this.defaultSelect,
        fingerClick: 0, //目标第0或1个选项触发,必须每一项长度一致，方可用此项
        endClickScroll: function(obj) {
          console.log(obj);
        }
      });
      this.inputValue = document.getElementById("numberID").innerText;
      console.log(this.inputValue);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

.box {
  height: 50px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  
}

.wrap {
  min-width: 320px;
  max-width: 768px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.wrapper {
  position: relative;
  height: 49px;
  line-height: 50px;
  width: 100%;
  margin: 0 auto;
}

.wrapper .scroller {
  position: absolute;
  padding: 0 48% 0 50%;
}

.wrapper .scroller li {
  float: left;
  width: 50px;
  height: 13px;
  line-height: 13px;
  text-align: center;
  font-style: none;
  margin: 0 20px;
  padding: 30px 0 10px;
  position: relative;
}

/*	.wrapper .scroller li:first-child {width:230px;}
	.wrapper .scroller li:last-child {width:210px;}*/
.wrapper .scroller li span {
  display: block;
  border-left: 1px solid #ccc;
  /*border-right:1px solid #ccc;*/
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
}

.wrapper .scroller li span i {
  display: inline-block;
  font-size: 12px;
  font-style: normal;
  position: absolute;
  top: 7px;
  left: -10px;
}

.pillar {
  display: inline-block;
  width: 1px;
  height: 100%;
  border-radius: 10px;
  background: red;
  position: absolute;
  z-index: 2;
  left: 50%;
  margin-left: 0px;
}

h3 {
  text-align: center;
  line-height: 60px;
}
.clearfix section {
  width: 5px;
  box-sizing: border-box;
  height: 2px;
  display: inline-block;
  border-right: 1px solid #ccc;
  position: relative;
  top: -13px;
}
.clearfix section:last-child {
  border-right: 0px solid #ccc;
}
.wrapper .scroller li:last-child span {
  border-bottom: none;
}
.wrapper .scroller li:last-child section {
  display: none;
}
</style>
