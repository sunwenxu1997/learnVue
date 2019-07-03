<template>
  <div>
    <!-- 一键复制 -->
    <div class="text">
        <section>
          <span class="message">{{message}}</span>
          <button class="cobyOrderSn" @click="copyMessage('.cobyOrderSn')" data-clipboard-action="copy" :data-clipboard-text="message">复制</button>
        </section>
        <section>
          <span class="message" style="color:#5fa50e">{{message1}}</span>
          <button class="cobyOrderSn1" @click="copyMessage('.cobyOrderSn1')" data-clipboard-action="copy" :data-clipboard-text="message1">复制</button>
        </section>
      <br />
      <input type="text" style="margin-top:20px;" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "1291397693",
      message1: "1000000000"
    };
  },
  methods: {
    copyMessage(value) {
      let clipboard = new this.clipboard(value);
      clipboard.on("success", function() {
        console.log('复制成功');
      });
      clipboard.on("error", function() {
         console.log('复制失败');
      });
    }
  }
};
</script>

<style scoped>
.text {
  margin-top: 20%;
}
.message {
  font-size: 20px;
  color: #2981f5;
  margin: 0 20px 0 0px;
}
section{
    margin-top: 10px;
}
button{
    border: none;
    border-radius: 20px;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
}
button:hover{
    opacity: 1;
}
button:active{
    transform: scale(0.9);
}
.cobyOrderSn{
 background: #2981f5;
}
.cobyOrderSn1{
 background: #5fa50e;
}
</style>
