<template>
 <canvas id="canvas"></canvas>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      count:1,
      mp4List: []
    };
  },
  mounted() {
    let w, h;                          // 定义一个窗口宽高的变量
    let ball_num = 100;                  //每次点击生成的小球个数
    let Gravity = 0.8;                 //小球下落速度 越小越慢
    let Firction = 0.9;                //小球弹跳力度 越大越高
    let ballArray = [];               //储存小球的数组

    //获取canvas标签
    let canvas = document.querySelector("#canvas")
    //创建画笔
    let ctx = canvas.getContext("2d");
    //小球颜色数组
    let colorArray = ["rgb(65, 105, 225)", "rgb(65, 166, 225)", "rgb(65, 214, 225)", "rgb(65, 225, 190)", "rgb(65, 225, 132)"];

    // 获取窗口大小方法
    function getWindow_size() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }


    // 随机生成一个 lower ~ upper 的整数
    function randomIntFronRange(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };

    //创建小球的方法(主要是小球运动轨迹的绘制)
    function Ball(x, y, dx, dy, radius, color) {
        //此处并没有直接执行绘制动画，而是事先定义好相关属性值
        this.x = x;
        this.y = y;
        this.dy = dy
        this.dx = dx;
        this.radius = radius;
        this.color = color;

        //绘制一个圆球，并填充颜色
        // https://www.w3school.com.cn/tags/canvas_arc.asp

        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        //实时更新动画
        this.update = function () {
            //y 轴临界值判断
            //如果小球在下降过程中到达底部时(及绘制小球的中心坐标位置超出窗口高度时)
            // alert(this.dy)  //不太清楚的可以 alert 一下
            if (this.y + this.radius + this.dy + Gravity > h) {
                //小球 y轴方向改变 （往上）
                this.dy = -this.dy;
                this.dy *= Firction;
                this.dx *= Firction;
            } else {
                //小球  y轴坐标递增 (往下)
                this.dy += Gravity;
            }
            //x 轴临界值判断
            if (this.x + this.radius + this.dx >= w || this.x - this.radius + this.dx <= 0) {
                //小球 x轴方向改变
                this.dx = -this.dx;
            }
            //小球 x,y坐标位置改变（因为之前的 dy,dx有取反过，所以此处会实现上下，左右的运动路线）
            this.y += this.dy;
            this.x += this.dx;
            //根据改变后的坐标位置绘图
            this.draw();
        }
    };

    //创建小球的方法(相关样式，起始坐标位置等)
    function init(m_x, m_y) {
        for (let i = 0; i < ball_num; i++) {
            let radius = randomIntFronRange(2, 10); //圆的半径
            // x,y 为绘制圆的中心坐标
            let x = m_x;
            let y = m_y;
            let dx = randomIntFronRange(-5, 5);//小球 x 轴位置 递增或者递减的一个随机值（小球是往左还是往右弹）
            let dy = randomIntFronRange(1, 2); //小球 y 轴位置 递增或者递减的一个随机值（小球上下弹动高度）
            let color = colorArray[Math.floor(Math.random() * colorArray.length)]; //从颜色数组里面随机取一个颜色
            ballArray.push(new Ball(x, y, dx, dy, radius, color)); //往小球数组里面添加每个小球的相关数值
        }
    };
   
   //执行动画方法
    function animation() {
        // 更新动画
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
        requestAnimationFrame(animation)
        //清除每个小球的运动痕迹
        ctx.clearRect(0, 0, w, h);
        for (let n of ballArray) {
            n.update();
        }
    };

    window.onload = function () {
        getWindow_size();
        //监听鼠标点击事件
        document.addEventListener("mousedown", function (event) {
            //清空画布
            // https://www.w3school.com.cn/tags/canvas_clearrect.asp
            ctx.clearRect(0, 0, w, h);
            //每次点击时获取鼠标位置，以鼠标位置生成小球
            init(event.clientX, event.clientY);
        });
        animation();
    }
  },
};
</script>

<style lang="scss" scoped>
* {
        margin: 0;
        padding: 0;
    }

    canvas {
        display: block;
    }
</style>