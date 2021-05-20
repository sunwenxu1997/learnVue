<template>
  <div id="canvas"></div>
</template>

<script>
import Matter from 'matter-js'
export default {
  mounted () {
    /**
     * Engine 是引擎
     * Render 是渲染器
     * Runner 是表演环境
     * Bodies 可以用来创建各种形状的物体。
     * Vertices 模块包含用于创建和处理顶点集的方法
     * Mouse 模块包含用于创建和操作鼠标输入的方法
     * MouseConstraint 用于创建鼠标约束的方法。鼠标约束用于允许用户交互，提供通过鼠标或触摸移动身体的能力。
     * Common 模块包含所有模块共有的实用程序功能
     * Composites 模块包含用于创建具有常用配置（例如，堆栈和链）的复合实体的工厂方法
     */
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Vertices = Matter.Vertices;
    // 创建一个引擎
    var engine = Engine.create();

    //render(渲染器)将要渲染的物理引擎是之前所创建的engine，而渲染的对象是html网页的body
    var render = Render.create({
      element: document.getElementById('canvas'), //渲染容器
      engine: engine, //引擎
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 1.5, // 设置像素比 越高越清楚 越耗性能
        background: '#fafafa', // 全局渲染模式时背景色 线框模式为 false 生效
        wireframeBackground: '#222', // 线框模式时背景色 线框模式为 true 生效
        hasBounds: false,
        enabled: true,
        wireframes: true, // 线框模式
        showSleeping: true, // 刚体睡眠状态
        showDebug: false, // Debug 信息
        showBroadphase: false, // 粗测阶段
        showBounds: false, // 刚体的界限
        showVelocity: false, // 移动刚体时速度
        showCollisions: false, // 刚体碰撞点
        showSeparations: false, // 刚体分离
        showAxes: false, // 刚体轴线
        showPositions: false, // 刚体位置
        showAngleIndicator: false, // 刚体转角指示
        showIds: false, // 显示每个刚体的 ID
        showVertexNumbers: false, // 刚体顶点数
        showConvexHulls: false, // 刚体凸包点
        showInternalEdges: false, // 刚体内部边界
        showMousePosition: false // 鼠标约束线
      }
    });

    //参数(500,170,40,260）中，前两个是物体坐标，后两个分别是宽度和长度。 
    //需要注意的是，这里的坐标系统中，500和170是矩形的中心所在位置
    //而html的canvas中坐标描述的是矩形的左上角。
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    //将isStatic设为true，即是静止的
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // 把所有的身体加到世界上
    Composite.add(engine.world, [boxA, boxB, ground]);

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