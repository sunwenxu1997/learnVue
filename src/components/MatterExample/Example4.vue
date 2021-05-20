<template>
  <div id="canvas"></div>
</template>

<script>
import Matter from 'matter-js'
export default {
  // 案列 https://brm.io/matter-js/demo/#avalanche
  mounted () {
    //   npm install MatterWrap 实现超出循环
    try {
      if (typeof MatterWrap !== 'undefined') {
        // either use by name from plugin registry (Browser global)
        Matter.use('matter-wrap');
      } else {
        // or require and use the plugin directly (Node.js, Webpack etc.)
        Matter.use(require('matter-wrap'));
      }
    } catch (e) {
      // could not require the plugin or install needed
    }
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      //* Mouse 模块包含用于创建和操作鼠标输入的方法
      //* MouseConstraint 用于创建鼠标约束的方法。鼠标约束用于允许用户交互，提供通过鼠标或触摸移动身体的能力。
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Common = Matter.Common

    // 创建一个引擎
    var engine = Engine.create(),
      // 引擎内的世界
      world = engine.world;

    //渲染配置属性
    var render = Render.create({
      element: document.getElementById('canvas'),
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        showAngleIndicator: true //刚体转角指示
      }
    });
    // 开始渲染
    Render.run(render);

    // 开始运行和加载引擎
    var runner = Runner.create();
    Runner.run(runner, engine);

    /**
     * 创建一个新的复合材料，其中包含在网格排列中的回调中创建的实体。
     * 此功能使用身体的边界来防止重叠
     */
    var stack = Composites.stack(20, 20, 20, 5, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 20), {
        friction: 0.00001, //空气阻力
        restitution: .5, //反弹指数
        density: 0.001      }); //密度
    });
    Composite.add(world, stack);

    // 添加 碰撞墙
    Composite.add(world, [
      Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: 'red' } }),
      Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: 'blue' } }),
      Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04, render: { fillStyle: 'pink' } })
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
    Render.lookAt(render, Composite.allBodies(world));

    // 使用matter-wrap插件进行包装
    // 超出界面后循环
    for (var i = 0; i < stack.bodies.length; i += 1) {
      stack.bodies[i].plugin.wrap = {
        min: { x: render.bounds.min.x, y: render.bounds.min.y },
        max: { x: render.bounds.max.x, y: render.bounds.max.y }
      };
    }
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