<template>
  <div class="overall">
      <maskOpen ref="maskOpen" :src="imgUrl"></maskOpen>
      <div class="parameter" @click="check">
          <img :src="imgUrl" alt="">
          <p class="title"><a href="https://github.com/Jexordexan/vue-slicksort" target="_blank">参考地址</a></p>
      </div>
    <!-- 拖拽 -->
    <SlickList
      :lockToContainerEdges="true"
      axis="x"
      lockAxis="x"
      v-model="items"
      class="SortableList"
      @input="getChangeLists"
    >
      <SlickItem v-for="(item, index) in items" class="SortableItem" :index="index" :key="index">
         <div class="title">{{ item.name }}</div>
          <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.itemArr" @input="getChangeList">
            <SlickItem
              class="list-item"
              v-for="(item, index) in item.itemArr"
              :index="index"
              :key="index"
            >{{ item }}</SlickItem>
          </SlickList>
      </SlickItem>
    </SlickList>
  </div>
</template>
 
<script>
// 安装 npm install --save vue-slicksort
import maskOpen from "@/components/common/maskOpen";
import { SlickList, SlickItem } from "vue-slicksort";
export default {
  components: {
    SlickItem,
    SlickList,
    maskOpen
  },
  data() {
    return {
        imgUrl:require('@/assets/img/drag.jpg'),
      flag: true,
      items: [
        {
          name: "Tab-1",
          itemArr: ["1-1", "1-2", "1-3"]
        },
        {
          name: "Tab-2",
          itemArr: ["2-1", "2-2", "2-3"]
        },
        {
          name: "Tab-3",
          itemArr: ["3-1", "3-2", "3-3"]
        }
      ]
    };
  },
  methods: {
    getChangeList(val) {
      console.log(val, "二级");
    },
    getChangeLists(vals) {
    //  拖拽完成后返回被打乱后的顺序
      console.log(vals, "一级");
    },
    check(){
    this.$refs.maskOpen.OpenMask()
    }
  }
};
</script>
<style  lang="scss" scoped>
.list {
    width: 100%;
  max-height: 80vh;
  margin: 0 auto;
  padding: 0;
  overflow: auto;
  background-color: #f3f3f3;
}
.list-item {
  width: 100%;
//   padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  color: #333;
  font-weight: 400;
  text-align: center;
  padding: 20px;
  box-shadow: 0 1px 2px #ccc;
}
.SortableList {
  display: flex;
  width: 600px;
  max-height: 90vh;
  margin: 0 auto;
  background-color: #dfdbdb;
  
}
.SortableItem {
    text-align: center;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  user-select: none; //不允许用户选中文字
  color: #333;
  font-weight: 400;
  position: relative;
  box-shadow: 0 1px 2px #ccc;
  .title{
      height: 50px;
      width: 100%;
     background: rgba(11, 145, 71, 0.658);
     color: white;
     font-weight: bold;
     line-height: 50px;
  }
}
</style>