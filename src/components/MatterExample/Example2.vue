<template>
  <div id="canvas"></div>
</template>

<script>
import Matter from 'matter-js'
export default {
  mounted () {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Vertices = Matter.Vertices;


    var engine = Engine.create();
    var render = Render.create({
      element: document.getElementById('canvas'), //渲染容器
      engine: engine, //引擎
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 1.5,// 设置像素比 越高越清楚 越耗性能
        wireframes: false, // 线框模式
      }
    })
    // 矩形创建 https://brm.io/matter-js/docs/classes/Bodies.html#method_rectangle
    var rectangle = Bodies.rectangle(400, 200, 80, 80);
    // 圆形创建  https://brm.io/matter-js/docs/classes/Bodies.html#method_circle
    var circle = Bodies.circle(450, 50, 40)
    // 顶点创建复合实体 https://brm.io/matter-js/docs/classes/Bodies.html#method_fromVertices
    var star = Bodies.fromVertices(200, 200, Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38'));
    // 多边形创建 https://brm.io/matter-js/docs/classes/Bodies.html#method_polygon
    // 3边 半径为60
    var polygon = Bodies.polygon(200, 460, 3, 60);
    // 梯形创建
    var trapezoid = Bodies.trapezoid(200, 10, 50, 50, .5)

    //创建一个地面 将isStatic设为true，即是静止的
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    // 把所有的身体加到世界上
    Composite.add(engine.world, [rectangle, circle, star, polygon, trapezoid, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }
}
</script>

<style lang="scss" scoped>
#canvas {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>