<template>
  <div class="overall">
    <!-- 步骤条盒子 -->
    <div class="steps-box">
      <!-- 步骤条 -->
      <div class="Article-steps" :class="stepList.length <= activeIndex ? 'step-over':''">
        <!-- 步骤条背景进度条 -->
        <div class="line">
          <span
            class="plan"
            :style="`width:${activeIndex*(100/(stepList.length - 1)) - (100/(stepList.length - 1)/2)}%`"
          ></span>
        </div>
        <!-- 每步部分 -->
        <span
          class="step"
          v-for="(i,index) in stepList"
          :key="index"
          :class="activeIndex == i.stepIndex || i.stepIndex<=activeIndex ? 'step-active':''"
        >
          <span class="step-num">
            <span class="num">{{i.stepIndex}}</span>
          </span>
          <p class="title">{{i.title}}</p>
        </span>
      </div>
      <!-- 步骤条对应内容 -->
      <div class="Article-content">
        <div
          class="content"
          v-for="(i,index) in stepList"
          :key="index"
          v-show="activeIndex == index+1"
        >步骤{{index+1}}内容</div>
        <span class="btn" v-if="activeIndex != stepList.length" @click="nextStep()">下一步</span>
        <span class="btn" v-if="activeIndex != 1" @click="lastStep()">上一步</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //当前位置
      activeIndex: 1,
      //步骤条步数
      stepList: [
        {
          stepIndex: 1,
          title: "步骤1"
        },
        {
          stepIndex: 2,
          title: "步骤2"
        },
        {
          stepIndex: 3,
          title: "步骤3"
        },
        {
          stepIndex: 4,
          title: "步骤4"
        },
        {
          stepIndex: 5,
          title: "完成"
        }
      ]
    };
  },
  methods: {
    //点击下一步
    nextStep() {
        this.activeIndex += 1;
    },
    //点击上一步
    lastStep() {
        this.activeIndex -= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.steps-box {
  user-select: none;
  width: 500px;
  height: 400px;
  position: relative;
  // <!-- 步骤条背景进度条 -->
  .line {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 24px;
    left: 5%;
    background: #ccc;
    width: 90%;
    height: 2px;
    overflow: hidden;
    .plan {
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      transition: 0.5s;
      background: #8ab4f3;
    }
  }
  .Article-steps {
    display: flex;
    justify-content: space-between;
    .step {
      .title {
        font-size: 17px;
        font-weight: bold;
        color: #808080;
        margin-top: 5px;
      }
      .step-num {
        width: 50px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        background: #c0c0c0;
        clip-path: polygon(50% 0, 100% 85%, 0 85%);
        color: white;
        font-weight: bold;
        transition: 0.5s;
        .num {
          transition: 0.5s;
          display: inline-block;
        }
      }
    }
  }

  //当前所在位置样式
  .step-active {
    .step-num {
      background: #2d7df5 !important;
      transform: rotate(90deg);
      .num {
        transform: rotate(-90deg);
      }
    }
    .title {
      color: #2d7df5 !important;
    }
  }

  //全部完成样式
  .step-over {
    .plan {
      background: #91f062 !important;
    }
    .step-num {
      background: #67c23a !important;
    }
    .title {
      color: #67c23a !important;
    }
  }
  //对应内容
  .Article-content {
    padding: 20px;
    .btn {
      width: 150px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      background: #2d7df5;
      color: white;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    .content{
      padding: 20px;
    }
  }
}
</style>