<template>
  <div class="overall">
    <div>
      <div class="box">
        <div class="card-box" @click="open(i,index)" v-for="(i,index) in list" :key="index">
          <div class="card" :class="{'active':i.activeIndex == index}">
            <!-- 正面 -->
            <div class="z">
              <img src="@/assets/img/bck3.jpg" alt />
              <h3>点我翻牌</h3>
            </div>
            <!-- 反面 内容面 -->
            <div class="f">
              <span>{{i.winner}}</span>
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top:40px">
        剩余翻牌
        <b>{{openNumber}}</b> 次数
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openNumber: 3, //剩余翻牌次数
      listNum: 6, //卡片个数
      winner: null, //当前抽中的奖品
      list: [] //奖品列表
    }
  },
  created() {
    this.init()
  },
  methods: {
    //初始化奖品列表，根据listNum生成奖品列表
    init() {
      for (let i = 0; i < this.listNum; i++) {
        let item = {
          activeIndex: null, //翻开的下标
          winner: null //获得的奖品
        }
        this.list.push(item)
      }
    },
    //后端获取数据
    getWinner() {
      return new Promise(resolve => {
        this.winner = '谢谢参与'
        resolve()
      })
    },
    //翻开卡片的方法
    async open(row, i) {
      if (this.openNumber > 0) {
        //判断用户没有翻开卡片
        if (!row.activeIndex) {
          await this.getWinner()
          this.list.forEach((item, index) => {
            if (i == index) {
              item.activeIndex = index
              item.winner = this.winner
            }
          })
          this.openNumber--
          console.log(this.list)
        } else {
          alert('你已经翻开过了哦')
        }
      } else {
        alert('你的机会已经用完了哦')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overall {
  perspective: 1000px;
}
.box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95vw;
  max-width: 400px;
  .card-box {
    width: 28%;
    height: 11rem;
    position: relative;
    margin: 0.5rem;
    cursor: pointer;
    user-select: none;
  }
  .card {
    width: 100%;
    height: 100%;
    perspective: 500px;
    transform-style: preserve-3d;
    transition: 0.5s;
    position: absolute;
    left: 0;
    top: 0;
    &.active {
      transform: rotateY(180deg);
    }
    /* 正面的样式 */
    .z {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 2px #cc9793;
      &:hover img {
        transform: scale(1.5) translateX(-20%);
      }
      img {
        transition: 0.3s;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      h3 {
        position: relative;
        z-index: 3;
        color: white;
        font-weight: 200;
        font-size: 1rem;
        display: inline-block;
        border: 1px dashed white;
        padding: 5px;
      }
      //   opacity: .5;
    }
    /* 反面的样式 内容部分 */
    .f {
      outline: 1px dashed #0ee7e7;
      outline-offset: -0.5rem;
      box-sizing: border-box;
      background: #fcfcfc;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      transform-style: preserve-3d;
      transform: rotateY(180deg) translateZ(1px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>