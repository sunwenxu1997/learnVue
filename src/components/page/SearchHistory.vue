<template>
  <div>
    <!-- 历史搜索 -->
    <div class="search">
      <!-- v-model.trim 去空格 -->
      <input ref="input" type="text" @keyup.enter="search()" v-model.trim="searchCondition" placeholder="请输入搜索内容" />
      <div class="history" v-if="historySearch.length">
        <p>
          历史搜索
          <i class="el-icon-delete" @click="clearnHistory()"></i>
        </p>
        <section>
          <span v-for="(i,index) in historySearch" :key="index">{{i}}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCondition: "", //搜索的关键词
      historySearch: [] //存放历史搜索的关键词
    };
  },
  created() {
    let searchHistory = localStorage.getItem("searchWord");
    if (searchHistory) {
      this.historySearch = searchHistory.split(",");
      console.log(this.historySearch);
    }
  },
  mounted() {
    //刚进入时获取焦点
    this.$refs["input"].focus();
  },
  methods: {
    //点击回车调用搜索方法
    search() {
      this.getSearchMessage("input");
    },
    //获取搜索的相关数据(调用后端接口处)
    getSearchMessage(event) {
      if (event) {
        //此处是为了解决在移动端唤醒软键盘时，当点击完成按钮后软键盘不收回问题
        this.$refs[event].blur();
      }
      //接口调用成功时把关键词储存起来
      this.setLocalStorage();
      console.log(this.historySearch)
    },
    //储存历史搜索到LocalStorage
    setLocalStorage() {
      let searchWord = localStorage.getItem("searchWord");
      if (searchWord == null) {
        localStorage.setItem("searchWord", this.searchCondition);
      } else {
        let arr = localStorage.getItem("searchWord");
        arr = arr.split(",");
        //去除重复的历史搜索
        if (arr.indexOf(this.searchCondition) != -1) {
          arr = arr;
        } else {
          // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
          arr.unshift(this.searchCondition);
        }
        this.historySearch = arr;
        //设置历史搜索最多显示多少条
        if (this.historySearch.length > 5) {
          // pop() 方法用于删除并返回数组的最后一个元素。
          this.historySearch.pop();
        }
        localStorage.setItem("searchWord", this.historySearch);
      }
    },
    //清空历史搜索
    clearnHistory(){
      this.historySearch = [];
      localStorage.removeItem("searchWord");
    },
  }
};
</script>

<style scoped>
.search {
  width: 300px;
  margin: 0 auto;
  margin-top: 20%;
}
input {
  display: inline-block;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  background: transparent;
  border: none;
  box-shadow: 0 0 5px #e0dfdf;
}
p {
  text-align: left;
  margin-top: 20px;
}
section {
  display: flex;
  margin-top: 10px;
}
span {
  background: #e0dfdf;
  padding: 10px;
  border-radius: 15px;
  margin-right: 10px;
}
i{
    cursor: pointer;
}
i:hover{
    color: red;
}
</style>
