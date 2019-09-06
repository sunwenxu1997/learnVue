<template>
  <div>
    <text-component :title="message1.title" :content='message1.content' contentAlign="right"></text-component>
    <text-component :title="message2.title" :titleWidth="30" :content='message2.content' ></text-component>
    <text-component :textCard="true" :title="message1.title" :content='message1.content' contentAlign="right"></text-component>
    <text-component :textCard="true" :useInput="true" :content="inputContent">
        <template v-slot:iconfont>
            <i class="el-icon-user"></i>
        </template>
        <template v-slot:input>
           <input type="text" v-model="inputContent">
        </template>
    </text-component>
    {{inputContent}}
  </div>
</template>

<script>
import textComponent from "../common/TextComponents";
export default {
  components: {
    "text-component": textComponent
  },
  data(){
      return{
          inputContent:'',
          message1:{
              title:'学习',
              content:'我在慢慢学习，请勿打扰。'
          },
          message2:{
              title:'学习学习学习学习',
              content:'我在慢慢学习，请勿打扰。我在慢慢学习，请勿打扰。我在慢慢学习，请勿打扰。我在慢慢学习，请勿打扰。'
          },
      }
  }
};
</script>

<style lang="scss" scoped>
</style>