<template>
  <div class="overall">
    <div class="box">
      <span class="dot" v-for="i in 250" :key="i"></span>
      <span class="text" @click="clickButton()">button</span>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {};
  },
  mounted() {
    // anime({
    //   targets: ".dot",
    //   opacity: [
    //     { value: 0.4, easing: "easeOutSine", duration: 500 },
    //     { value: 1, easing: "easeInOutQuad", duration: 600 }
    //   ],
    //   delay: anime.stagger(100, { grid: [25, 10], from: "center" }),
    //   duration: 500,
    //   loop: true
    // });
  },
  methods: {
    //   效果1
    clickButton() {
      let tl = anime.timeline({
        loop: 1
      });
      tl.add({
        targets: ".text",
        easing: "easeInOutSine",
        clipPath: [
          { value: " polygon(0% 0%,100% 0%, 100% 100%,0% 100%)" },
          { value: " polygon(100% 0%,100% 0%, 100% 100%,100% 100%)" }
        ],
        begin: function() {
          anime({
            targets: ".dot",
            translateX: function() {
              return anime.random(-40, 40);
            },
            translateY: function() {
              return anime.random(-40, 40);
            },
            scale: function() {
              return anime.random(4, 0.5);
            },
            easing: "easeInOutSine",
            opacity: [{ value: 0, duration: 800 }],
            delay: anime.stagger(40, { grid: [25, 10], from: "100" })
          });
        }
      });
    }

    // 效果2
    // clickButton() {
    //   let tl = anime.timeline({
    //     loop: 1
    //   });
    //   tl.add({
    //     targets: ".text",
    //     easing: "easeInOutSine",
    //     clipPath: [
    //       { value: "circle(50% at 50% 50%)", duration: 0 },
    //       { value: "circle(0% at 50% 50%)" }
    //     ],
    //     begin: function() {
    //       anime({
    //         targets: ".dot",
    //         translateX: function() {
    //           return anime.random(-40, 40);
    //         },
    //         translateY: function() {
    //           return anime.random(-40, 40);
    //         },
    //         scale: function() {
    //           return anime.random(4, 0.1);
    //         },
    //         transformOrigin:function () {
    //           return anime.random(-20,20)  
    //         },
    //         rotate:function () {
    //             return anime.random(90,360)
    //         },
    //         borderRadius: [
    //           { value: "0%", duration: 0 },
    //           { value: "50%", duration: 100 }
    //         ],
    //         easing: "easeInOutSine",
    //         opacity: [{ value: 0, duration: 800 }],
    //         delay: anime.stagger(40, { grid: [25, 10], from: "center" })
    //       });
    //     }
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 40px;

  position: relative;
  display: flex;
  flex-wrap: wrap;
  .dot {
    display: block;
    width: 4px;
    height: 4px;
    // border-radius: 50%;
    background: #0adb68;
  }
  .text {
    transform-origin: 30px 50%;
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    font-size: 0.88rem;
    font-weight: bold;
    color: white;
    line-height: 40px;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>