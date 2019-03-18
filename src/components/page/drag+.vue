<template>
  <div class="overall">
    <!-- @sort-start 排序开始时被触发  发出： { event: MouseEvent, node: HTMLElement, index: number, collection: string }-->
    <!-- @sort-move 在排序过程中移动鼠标时触发 发出： { event } -->
    <!-- @sort-end 排序结束时触发 发出： { event, newIndex, oldIndex, collection } -->
    <!-- @input 排序后以新排序的列表结束后触发 发出： Array -->
    <SlickList
      :lockToContainerEdges="true"
      lockOffset="0%"
      axis="xy"
      lockAxis="xy"
      :distance="10"
      v-model="items"
      @input="getChangeLists"
      @sort-start="shouldCancelStart"
      id="box"
    >
      <!-- @sort-start="shouldCancelStart" -->
      <SlickItem class="tab" v-for="(i,index) in items" :key="index" :index="index">
        <el-button  type="text" class="close" @click="close(index)"></el-button>
        <el-button  type="text" class="edit" @click="edit(i)"></el-button>
        <div class="title">{{i.name}}</div>
      </SlickItem>
    </SlickList>
    <!-- <div id="mask" v-if="maskShow">
      <div class="mask" @click="maskShow = false;inputShow = false"></div>
      <div class="hint-box">
        <div class="content" v-if="inputShow">
          <input type="text">
        </div>
        <div class="content" v-else>请确定删除(删除后将无法恢复)</div>
        <div class="btn">
          <span @click="confirm">确定</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { SlickList, SlickItem } from "vue-slicksort";
export default {
  components: {
    SlickList,
    SlickItem
  },
  data() {
    return {
      maskShow:false,
      inputShow:false,
      items: [
        {name:"1-1"},
        {name:"1-2"},
        {name:"1-3"},
        {name:"1-4"},
        {name:"1-5"},
        {name:"1-6"},
        {name:"1-7"},
        {name:"1-8"},
        {name:"1-9"},
        {name:"1-10"},
        {name:"1-11"},
        {name:"1-12"},
        {name:"1-13"},
        {name:"1-14"},
        {name:"1-15"}
      ]
    };
  },
  methods: {
    //  拖拽完成后返回被打乱后的顺序
    getChangeLists(vals) {
      console.log(vals);
      console.log(this.items);
    },
    //拖拽前执行的方法
    shouldCancelStart(e) {
      // let newItems = this.items.splice(e.index,1)
      // console.log( newItems)
    },
    //删除并关闭该tab
    close(e) {
     this.$confirm('请确定删除(删除后将无法恢复)！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let newItems = this.items.splice(e, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //编辑方法
    edit(e){
      this.$prompt('请输入修改内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:'请输入1 - 10位的内容',
          inputPattern: /^[A-Za-z0-9]{1,10}$/,
          inputErrorMessage: '命名格式不正确'
        }).then(({ value }) => {
         e.name = value
          this.$message({
            type: 'success',
            message: '修改为: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    //确定方法，执行下一步
    confirm(){
      this.maskShow = false;
      this.inputShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/colour.scss";
#box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  width: 600px;
  max-height: 90vh;
  margin: 0 auto;
  background-color: #dfdbdb;
}
.tab {
  cursor: pointer;
  text-align: center;
  width: 200px;
  background-color: #fff;
  box-sizing: border-box;
  user-select: none; //不允许用户选中文字
  color: #333;
  font-weight: 400;
  position: relative;
  box-shadow: 1px 1px 2px #ccc;
  &:hover .edit{
   opacity: 1;
   transform: scale(1)
  }
  &:hover .close{
   opacity: 1;
   transform: scale(1)
  }
  .title {
    height: 50px;
    width: 100%;
    color: rgba(11, 145, 71, 0.658);
    font-weight: bold;
    line-height: 50px;
  }
  .edit,
  .close {
    transition: 0.5s;
    width: 10px;
    height: 10px;
    padding: 0 !important;
    position: absolute;
    top: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px #ccc;
    opacity: 0;
    transform: scale(0);
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 0px #ccc;
    }
  }
  .edit {
    right: 25px;
    background: rgb(19, 230, 114);
  }
  .close {
    right: 10px;
    background: rgb(248, 121, 121);
  }
}

#mask {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
  .hint-box {
      width: 300px;
      padding: 30px;
      box-sizing: border-box;
      background: white;
    font-size: 15px;
    .content {
      
    }
    .btn{
      margin-top: 80px;
      text-align: right;
      box-sizing: border-box;
      cursor: pointer;
      span{
           padding: 10px 15px;
          background: $base;
          color: white;
          
      }
    }
  }
}
</style>
