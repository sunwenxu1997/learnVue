<template>
  <div id="canvas"></div>
</template>

<script>
import ball from './img/ball.png'
import box from './img/box.png'
import Matter from 'matter-js'
export default {
  // 案列 https://brm.io/matter-js/demo/#sprites
  mounted () {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
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
        showAngleIndicator: false,// 刚体转角指示
        wireframes: false  // 线框模式
      }
    });
    //    开始渲染
    Render.run(render);

    // 开始运行和加载引擎
    var runner = Runner.create();
    Runner.run(runner, engine);

    //  添加墙壁属性
    var offset = 10,
      options = {
        isStatic: true
      };

    world.bodies = [];
    // 这些静态墙将不会在这个精灵的例子中渲染
    Composite.add(world, [
      Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
      Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
    ]);

    /**
    * 创建一个新的复合材料，其中包含在网格排列中的回调中创建的实体。
    * 此功能使用身体的边界来防止重叠
    * stack 堆栈  (x,y,列,行,左右间距,上下间距) 
    */
    var stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
      if (Common.random() > 0.35) {
        return Bodies.rectangle(x, y, 64, 64, {
          render: {
            strokeStyle: '#ffffff',
            sprite: {
              texture: box
            }
          }
        });
      } else {
        return Bodies.circle(x, y, 46, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture: ball
            }
          }
        });
      }
    });

    Composite.add(world, stack);

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