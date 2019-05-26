<template>
  <div class="overall">
    <div class="box">
      <div class="tab" @click="show = !show">
        <transition name="bounce">
          <div class="tab-item" v-if="show">Click</div>
        </transition>
      </div>
      <div class="tab" @click="show1 = !show1" >
        <transition name="move">
          <div class="tab-item" v-if="show1" style="background:#297452;">Click</div>
        </transition>
        <!-- <transition name="fade" mode="out-in">
             <div class="tab-item" v-if="show1" style="background:#297452;">Click</div>
          </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show1: true
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/colour.scss";
.box {
    display: flex;
    flex-wrap: wrap;
  background: #ccc;
  color: white;
  cursor: pointer;
  .tab {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    .tab-item {
     width: 100%;
     height: 100%;
      background: $base;
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1) ;
  }
}

.move-enter-active {
  animation: move 0.5s;
}
.move-leave-active {
  animation: move 0.5s reverse;
}
@keyframes move {
  0% {
    transform: scale(1) translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
}

.fade-enter-active {
  animation: move 0.5s;
}
.fade-leave-active {
  animation: move 0.5s reverse;
}
@keyframes fade {
  0% {
    transform: scale(1) translateX(200px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
}
</style>
