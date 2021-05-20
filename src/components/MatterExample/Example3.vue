<template>
  <div id="canvas"></div>
</template>

<script>
import Matter from 'matter-js'
export default {
  // 案列 https://brm.io/matter-js/demo/#airFriction
  mounted () {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      //* Mouse 模块包含用于创建和操作鼠标输入的方法
      //* MouseConstraint 用于创建鼠标约束的方法。鼠标约束用于允许用户交互，提供通过鼠标或触摸移动身体的能力。
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

    // 创建一个引擎
    var engine = Engine.create(),
      // 引擎内的世界
      world = engine.world;

    //渲染配置属性
    var render = Render.create({
      element: document.getElementById('canvas'),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        showVelocity: true
      }
    });
    //    开始渲染
    Render.run(render);

    // 开始运行和加载引擎
    var runner = Runner.create();
    Runner.run(runner, engine);

    // 添加 物理块
    Composite.add(world, [
      // 下降的方块 frictionAir 空气的摩擦阻力
      Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
      Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
      Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

      // 创建静止墙面
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);

    // 添加鼠标控制事件---------------------------------
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Composite.add(world, mouseConstraint);

    // 保持鼠标与渲染同步
    render.mouse = mouse;
    // ---------------------------------

    // 使渲染视图适合场景
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 }
    // });

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