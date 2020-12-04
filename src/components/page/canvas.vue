<template>
  <!-- canvas 小车动画 -->
  <div class="overall">
    <div class="map-box" ref="map-box" :style="`width:${canvasW}px;height:${canvasH}px`">
      <!-- <div class="car">
        <img src="@/assets/img/car.jpeg" alt />
      </div>-->
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    scale() {
      // this.addCar();
    }
  },
  data() {
    return {
      canvasW: 800, //画布宽高
      canvasH: 700,
      ctx: null, //画布
      scale: 1, //画布缩放比例
      translateX: 0, //画布水平偏移
      translateY: 0, ///画布垂直偏移
      map: {
        pointColor: "#39628a",
        pointSize: 5,
        lineColor: "#39628a"
      },
      car: {
        w: 20,
        h: 25,
        color: "blue"
      },
      badLineColor: "red", //损坏路线颜色
      //地图点坐标位置
      map_points: [
        { id: "1", x: 100, y: 100 },
        { id: "2", x: 200, y: 100 },
        { id: "3", x: 300, y: 100 },
        { id: "4", x: 100, y: 200 },
        { id: "5", x: 200, y: 200 },
        { id: "6", x: 300, y: 200 },
        { id: "7", x: 400, y: 200 },
        { id: "8", x: 100, y: 300 },
        { id: "9", x: 200, y: 300 },
        { id: "10", x: 300, y: 300 }
      ],
      //小车位置信息
      car_points: [
        {
          id: "car1",
          startId: "1",
          endId: "2"
        },
        {
          id: "car2",
          startId: "5",
          endId: "9"
        },
        {
          id: "car3",
          startId: "2",
          endId: "5"
        }
      ],
      //损坏路线
      badLine: [
        {
          startId: "3",
          endId: "6"
        },
        {
          startId: "9",
          endId: "10"
        }
      ]
    };
  },
  mounted() {
    this.init();
    let _this = this;
    let MapBox = this.$refs["map-box"];
    let left = MapBox.offsetLeft;
    let top = MapBox.offsetTop;
    MapBox.onmousedown = function(e) {
      let downX = e.offsetX - _this.translateX,
        downY = e.offsetY - _this.translateY;
      MapBox.onmousemove = function(e) {
        _this.translateX = e.offsetX - downX;
        _this.translateY = e.offsetY - downY;
        _this.init();
      };
      MapBox.onmouseup = function() {
        MapBox.onmousemove = null;
        MapBox.onmouseup = null;
      };
    };
    MapBox.addEventListener("mousewheel", function(e) {
      _this.scale += e.wheelDelta / 1200;
      _this.scale = Math.max(0.5, _this.scale);
      _this.scale = Math.min(5, _this.scale);
      // console.log(e.offsetX * _this.scale);
      if (_this.scale > 0.5 && _this.scale < 5) {
        _this.translateX = e.offsetX - e.offsetX * _this.scale;
        _this.translateY = e.offsetY - e.offsetY * _this.scale;
        _this.init();
      }
    });
  },
  methods: {
    //初始化画布
    init() {
      let w = this.canvasW,
        h = this.canvasH;
      let canvas = document.getElementById("canvas");
      canvas.width = w;
      canvas.height = h;
      this.ctx = canvas.getContext("2d");
      this.ctx.translate(this.translateX, this.translateY); //画布比例缩放
      this.ctx.scale(this.scale, this.scale); //画布比例缩放
      this.drawMap(); //绘制地图
      this.addCar(); //添加小车
    },
    //绘制地图
    drawMap() {
      // 绘制坐标点
      let points = this.map_points;
      // 根据坐标点连线
      let line = [];
      points.map((i, indexI) => {
        points.map((j, indexJ) => {
          //只对线x，y相同的坐标点进行筛选
          if (i.x == j.x || i.y == j.y) {
            let obj = {
              id: i.id,
              s_x: i.x,
              s_y: i.y,
              e_x: j.x,
              e_y: j.y
            };
            line.push(obj);
          }
        });
      });
      line.forEach(row => {
        //绘制地图连接线条
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.map.lineColor;
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(row.s_x, row.s_y);
        this.ctx.lineTo(row.e_x, row.e_y);
        this.ctx.stroke();
        this.ctx.closePath();
      });
      // this.drawBadLine(); //绘制损坏路线
      points.forEach(row => {
        // 绘制地图坐标点
        this.ctx.beginPath();
        this.ctx.fillStyle = this.map.pointColor;
        this.ctx.arc(row.x, row.y, this.map.pointSize, 0, 2 * Math.PI);
        // this.ctx.fill();
        this.ctx.lineWidth = 3; //设置线宽
        this.ctx.lineCap = "round";
        this.ctx.stroke();
        this.ctx.fillStyle = "#666666";
        this.ctx.font = "13px Georgia";
        this.ctx.fillText(row.id, row.x - 5, row.y - 10);
        this.ctx.closePath();
      });
    },
    //针对传入点的id进行连线 损坏路线
    drawBadLine() {
      this.badLine.forEach(b => {
        let s_x, s_y, e_x, e_y;
        this.map_points.forEach(item => {
          if (item.id == b.startId) {
            s_x = item.x;
            s_y = item.y;
          }
          if (item.id == b.endId) {
            e_x = item.x;
            e_y = item.y;
          }
        });
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.badLineColor;
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(s_x, s_y);
        this.ctx.lineTo(e_x, e_y);
        this.ctx.stroke();
        this.ctx.closePath();
      });
    },
    //添加小车到坐标中
    addCar() {
      this.car_points.forEach(item => {
        // optionId 坐标点
        // nextId 运行点
        let startId = item.startId;
        let endId = item.endId;
        let c_w = this.car.w; //小车的宽高
        let c_h = this.car.h;
        let rotate = 0; //小车旋转角度
        let start, end; //储存小车的起始和结束数值，进行比较
        this.map_points.forEach(item => {
          if (item.id == startId) {
            start = item;
          }
          if (item.id == endId) {
            end = item;
          }
        });
        if (end.x - start.x > 0) {
          rotate = 90;
        }
        if (end.x - start.x < 0) {
          rotate = -90;
        }
        if (end.y - start.y > 0) {
          rotate = 180;
        }
        if (end.y - start.y < 0) {
          rotate = 0;
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = this.car.color;
        this.ctx.save(); //保存坐原点平移之前的状态
        this.ctx.translate(start.x, start.y);
        this.ctx.rotate((rotate * Math.PI) / 180);
        this.ctx.moveTo(-c_w / 2, c_h / 2);
        this.ctx.lineTo(c_w / 2, c_h / 2);
        this.ctx.lineTo(c_w / 2, -c_h / 2);
        this.ctx.lineTo(0, -c_h / 2 - 6);
        this.ctx.lineTo(-c_w / 2, -c_h / 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore(); //恢复到最初状态
      });
    },
    //小车移动
    moveCar(startId, endId) {},
    //绘制图像
    draw() {}
  }
};
</script>

<style lang="scss" scoped>
.map-box {
  border: 2px solid black;
  position: relative;
  // transform: scale(2);
}
</style>