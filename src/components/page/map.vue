<template>
  <div>
    <span class="toolbar">
      <div class="tool" title="撤销" @click="toUndo()">
        <!-- <i class="el-icon-refresh-left"></i> -->
        撤销
      </div>
      <div class="tool" title="重做" @click="toRedo()">
        <!-- <i class="el-icon-refresh-right"></i> -->
        重做
      </div>
      <div class="tool" title="创建节点" @click="createNodes('rect')">
        <!-- <div class="rect"></div> -->
        创建节点
      </div>
      <div class="tool" @click="mapZoom('+')" title="放大视图">
        <!-- <i class="el-icon-zoom-in"></i> -->
        放大
      </div>
      <div class="tool" @click="mapZoom('-')" title="缩小视图">
        <!-- <i class="el-icon-zoom-out"></i> -->
        缩小
      </div>
      <div class="tool" @click="mapZoom()" title="重置视图">
        <!-- <i class="el-icon-full-screen"></i> -->
        重置视图
      </div>
      <div class="tool" @click="save()" title="保存">
        <!-- <i class="el-icon-cpu"></i> -->
        保存
      </div>
    </span>
    <div class="nodeMsg">
      <span>x:{{node.x}}</span>
      <span>y:{{node.y}}</span>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
import '../../assets/css/x6.css'
export default {
  data() {
    return {
      node: {
        x: 0,
        y: 0
      },
      graph_zoom: 0, //地图缩放比例
      graph: null,
      //   data: {
      // 节点
      // nodes: [
      //   {
      //     id: 'node1', // String，可选，节点的唯一标识
      //     x: 40, // Number，必选，节点位置的 x 值
      //     y: 40, // Number，必选，节点位置的 y 值
      //     width: 60, // Number，可选，节点大小的 width 值
      //     height: 60, // Number，可选，节点大小的 height 值
      //     label: 'node1', // String，节点标签
      //     tools: ['button-remove']
      //   },
      //   {
      //     id: 'node2', // String，节点的唯一标识
      //     x: 160, // Number，必选，节点位置的 x 值
      //     y: 180, // Number，必选，节点位置的 y 值
      //     width: 60, // Number，可选，节点大小的 width 值
      //     height: 60, // Number，可选，节点大小的 height 值
      //     label: 'node2' // String，节点标签
      //   },
      //   {
      //     id: 'node3', // String，节点的唯一标识
      //     x: 40, // Number，必选，节点位置的 x 值
      //     y: 180, // Number，必选，节点位置的 y 值
      //     width: 60, // Number，可选，节点大小的 width 值
      //     height: 60, // Number，可选，节点大小的 height 值
      //     label: 'node3' // String，节点标签
      //   }
      // ],
      // 边
      // edges: [
      //   {
      //     source: 'node1', // String，必须，起始节点 id
      //     target: 'node2' // String，必须，目标节点 id
      //   }
      // ],
      //   }
      data: [
        {
          position: {
            x: -220,
            y: -300
          },
          size: {
            width: 60,
            height: 60
          },
          attrs: {
            body: {
              fill: '#fff',
              stroke: '#000'
            },
            label: {
              text: 'Node',
              fill: '#333',
              fontSize: 13
            }
          },
          shape: 'rect',
          id: '5f811f23-ad92-443b-83fd-11a440ae6ec7',
          tools: {
            items: [
              {
                name: 'button-remove',
                args: {
                  x: 5,
                  y: 5
                }
              }
            ]
          },
          ports: {
            groups: {
              group1: {
                position: 'absolute',
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              }
            },
            items: [
              {
                id: 'port1-1',
                group: 'group1',
                args: {
                  x: 0,
                  y: 23
                }
              },
              {
                id: 'port1-2',
                group: 'group1',
                args: {
                  x: 0,
                  y: 38
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 0
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 0
                }
              },
              {
                id: 'port3-1',
                group: 'group1',
                args: {
                  x: 60,
                  y: 23
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port3-2',
                group: 'group1',
                args: {
                  x: 60,
                  y: 38
                }
              },
              {
                id: 'port4-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 60
                }
              },
              {
                id: 'port4-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 60
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              }
            ]
          },
          zIndex: 1
        },
        {
          position: {
            x: 30,
            y: -300
          },
          size: {
            width: 60,
            height: 60
          },
          attrs: {
            body: {
              fill: '#fff',
              stroke: 'orange'
            },
            label: {
              text: 'Node',
              fill: '#333',
              fontSize: 13
            }
          },
          shape: 'rect',
          id: 'a406640c-78a1-4584-9f7f-7b76d0c53ecc',
          tools: {
            items: [
              {
                name: 'button-remove',
                args: {
                  x: 5,
                  y: 5
                }
              }
            ]
          },
          ports: {
            groups: {
              group1: {
                position: 'absolute',
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              }
            },
            items: [
              {
                id: 'port1-1',
                group: 'group1',
                args: {
                  x: 0,
                  y: 23
                }
              },
              {
                id: 'port1-2',
                group: 'group1',
                args: {
                  x: 0,
                  y: 38
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 0
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 0
                }
              },
              {
                id: 'port3-1',
                group: 'group1',
                args: {
                  x: 60,
                  y: 23
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port3-2',
                group: 'group1',
                args: {
                  x: 60,
                  y: 38
                }
              },
              {
                id: 'port4-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 60
                }
              },
              {
                id: 'port4-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 60
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              }
            ]
          },
          zIndex: 2
        },
        {
          shape: 'edge',
          attrs: {
            line: {
              stroke: '#1890ff',
              strokeDasharray: 5,
              style: {
                animation: 'ant-line 30s infinite linear'
              }
            }
          },
          id: '35f2ac09-edbd-4ee4-b883-94ca1e25fc15',
          source: {
            cell: 'a406640c-78a1-4584-9f7f-7b76d0c53ecc',
            port: 'port1-1'
          },
          target: {
            cell: '5f811f23-ad92-443b-83fd-11a440ae6ec7',
            port: 'port3-1'
          },
          zIndex: 3
        },
        {
          shape: 'edge',
          attrs: {
            line: {
              stroke: '#1890ff',
              strokeDasharray: 5,
              style: {
                animation: 'ant-line 30s infinite linear'
              }
            }
          },
          id: 'ad4825df-7338-4511-8a32-6496a2f46000',
          source: {
            cell: '5f811f23-ad92-443b-83fd-11a440ae6ec7',
            port: 'port3-2'
          },
          target: {
            cell: 'a406640c-78a1-4584-9f7f-7b76d0c53ecc',
            port: 'port1-2'
          },
          zIndex: 4
        },
        {
          position: {
            x: -220,
            y: -150
          },
          size: {
            width: 60,
            height: 60
          },
          attrs: {
            body: {
              fill: '#fff',
              stroke: '#000'
            },
            label: {
              text: 'Node',
              fill: '#333',
              fontSize: 13
            }
          },
          shape: 'rect',
          id: '95dede0b-b0c7-41f9-8fe5-629c81080a7a',
          tools: {
            items: [
              {
                name: 'button-remove',
                args: {
                  x: 5,
                  y: 5
                }
              }
            ]
          },
          ports: {
            groups: {
              group1: {
                position: 'absolute',
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              }
            },
            items: [
              {
                id: 'port1-1',
                group: 'group1',
                args: {
                  x: 0,
                  y: 23
                }
              },
              {
                id: 'port1-2',
                group: 'group1',
                args: {
                  x: 0,
                  y: 38
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 0
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 0
                }
              },
              {
                id: 'port3-1',
                group: 'group1',
                args: {
                  x: 60,
                  y: 23
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port3-2',
                group: 'group1',
                args: {
                  x: 60,
                  y: 38
                }
              },
              {
                id: 'port4-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 60
                }
              },
              {
                id: 'port4-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 60
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              }
            ]
          },
          zIndex: 5
        },
        {
          shape: 'edge',
          attrs: {
            line: {
              stroke: '#1890ff',
              strokeDasharray: 5,
              style: {
                animation: 'ant-line 30s infinite linear'
              }
            }
          },
          id: '7376f261-d07b-48c3-852b-6e8e745d3d0b',
          source: {
            cell: '5f811f23-ad92-443b-83fd-11a440ae6ec7',
            port: 'port4-1'
          },
          target: {
            cell: '95dede0b-b0c7-41f9-8fe5-629c81080a7a',
            port: 'port2-1'
          },
          zIndex: 6
        },
        {
          shape: 'edge',
          attrs: {
            line: {
              stroke: '#1890ff',
              strokeDasharray: 5,
              style: {
                animation: 'ant-line 30s infinite linear'
              }
            }
          },
          id: '4b6afefa-4efe-4f1c-9515-ed7884279649',
          source: {
            cell: '95dede0b-b0c7-41f9-8fe5-629c81080a7a',
            port: 'port2-2'
          },
          target: {
            cell: '5f811f23-ad92-443b-83fd-11a440ae6ec7',
            port: 'port4-2'
          },
          zIndex: 7
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    //初始化地图
    init() {
      //创建地图
      this.graph = new Graph({
        snapline: true, //对齐线
        history: {
          enabled: true, //历史记录
          ignoreChange: true //ignoreChange 是否忽略属性变化
        },
        panning: true, //支持平移拖拽
        container: document.getElementById('container'),
        width: window.innerWidth,
        height: window.innerHeight,
        background: {
          color: '#fffbe6' // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true // 渲染网格背景
        },
        connecting: {
          allowPort: true, //是否允许边链接到链接桩
          allowEdge: false, //是否允许边链接到另一个边
          allowNode: false, //是否允许边链接到节点（非节点上的链接桩)
          allowLoop: false, //是否允许创建循环连线，即边的起始节点和终止节点为同一节点
          allowMulti: false, //是否允许在相同的起始节点和终止之间创建多条边
          allowBlank: false, //是否允许连接到画布空白位置的点
          // 自动吸附
          snap: {
            radius: 20
          },
          createEdge() {
            //创建动画虚线边
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#1890ff',
                  strokeDasharray: 5,
                  targetMarker: 'classic',
                  style: {
                    animation: 'ant-line 30s infinite linear'
                  }
                }
              }
            })
          }
        }
      })
      //加载地图数据
      this.graph.fromJSON(this.data)
      this.graph.centerContent() //画布居中
      //节点点击事件
      this.graph.on('node:click', ({ e, x, y, node, view }) => {
        // console.log(node)
        this.selectReset()
        node.attr('body/stroke', 'orange')
      })
      //边点击事件
      this.graph.on('edge:click', ({ e, x, y, edge, view }) => {
        // console.log(edge)
        this.selectReset()
        edge.attr('line/stroke', 'orange')
        edge.prop('labels/0', {
          attrs: {
            body: {
              stroke: 'orange'
            }
          }
        })
      }),
        //节点双击事件
        this.graph.on('node:dblclick', ({ e, x, y, node, view }) => {
          alert('节点ID:' + node.id)
          console.log(node)
        })
      //边双击事件
      this.graph.on('edge:dblclick', ({ e, x, y, edge, view }) => {
        console.log(edge)
        alert(
          `边ID:${edge.id}, 起始节点: ${edge.source.cell},目标节点: ${edge.target.cell}`
        )
      })
      this.graph.on('node:mousemove', ({ e, x, y, node, view }) => {
        this.node = {
          x: x,
          y: y
        }
      })
    },
    //保存，获取节点等数据
    save() {
      //序列化/反序列化 数据格式
      // https://antv-x6.gitee.io/zh/docs/tutorial/intermediate/serialization
      // graph.toJSON() 方法来导出图中的节点和边
      console.log(this.graph.toJSON())
    },
    //撤销操作
    toUndo() {
      this.graph.undo()
    },
    //重做
    toRedo() {
      this.graph.redo()
      //   if (this.graph.isHistoryEnabled()) {
      //     this.graph.disableHistory()
      //   } else {
      //     this.graph.enableHistory()
      //   }
    },
    //地图放大缩小
    mapZoom(type) {
      if (type == '+') {
        this.graph.zoom(0.1)
        this.graph_zoom += 0.1
      } else if (type == '-') {
        this.graph.zoom(-0.1)
        this.graph_zoom -= 0.1
      } else {
        this.graph.zoom(
          this.graph_zoom <= 0 ? Math.abs(this.graph_zoom) : -this.graph_zoom
        )
        this.graph.centerContent() //画布居中
        this.graph_zoom = 0
      }
    },
    //创建节点
    createNodes(type) {
      if (type == 'rect') {
        const rect = this.graph.addNode({
          shape: 'rect', // 指定使用何种图形，默认值为 'rect'
          x: 0,
          y: 0,
          width: 60,
          height: 60,
          angle: 0,
          attrs: {
            body: {
              fill: '#fff', // 背景颜色
              stroke: '#000' // 边框颜色
            },
            label: {
              text: 'Node', // 文本
              fill: '#333', // 文字颜色
              fontSize: 13 // 文字大小
            }
          },
          tools: [
            {
              name: 'button-remove', // 工具名称
              args: { x: 5, y: 5 } // 工具对应的参数
            }
          ],
          //连接桩
          //   ports: [
          // {
          //   id: 'port1',
          //   attrs: {
          //     circle: {
          //       r: 6,
          //       //    magnet: true 这个特殊属性，使链接桩在连线交互时可以被连接上
          //       magnet: true,
          //       stroke: '#31d0c6',
          //       strokeWidth: 2,
          //       fill: '#fff'
          //     }
          //   }
          // },
          // {
          //   id: 'port2',
          //   attrs: {
          //     circle: {
          //       r: 6,
          //       magnet: true,
          //       stroke: '#31d0c6',
          //       strokeWidth: 2,
          //       fill: '#fff'
          //     }
          //   }
          // }
          //   ]
          ports: {
            groups: {
              // 输入链接桩群组定义
              group1: {
                position: 'absolute',
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    fill: '#fff'
                  }
                }
              }
            },
            items: [
              {
                id: 'port1-1',
                group: 'group1',
                // 通过 args 指定绝对位置
                args: {
                  x: 0,
                  y: 23
                }
              },
              {
                id: 'port1-2',
                group: 'group1',
                // 通过 args 指定绝对位置
                args: {
                  x: 0,
                  y: 38
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 0
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port2-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 0
                }
              },
              {
                id: 'port3-1',
                group: 'group1',
                args: {
                  x: 60,
                  y: 23
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              },
              {
                id: 'port3-2',
                group: 'group1',
                args: {
                  x: 60,
                  y: 38
                }
              },
              {
                id: 'port4-1',
                group: 'group1',
                args: {
                  x: 23,
                  y: 60
                }
              },
              {
                id: 'port4-2',
                group: 'group1',
                args: {
                  x: 38,
                  y: 60
                },
                attrs: {
                  circle: {
                    stroke: '#e9352f'
                  }
                }
              }
            ]
          }
        })
      }
      //   console.log(this.graph)
    },
    //创建边
    createEdges(type) {
      const rect = this.graph.addEdge({
        shape: 'edge', // 指定使用何种图形，默认值为 'edge'
        source: 'node1',
        target: 'node3'
      })
    },
    //选择节点，边时重置颜色
    selectReset() {
      //   this.graph.drawBackground({ color: '#fff' })
      const nodes = this.graph.getNodes()
      const edges = this.graph.getEdges()

      nodes.forEach(node => {
        node.attr('body/stroke', '#000')
      })

      edges.forEach(edge => {
        edge.attr('line/stroke', '#1890ff')
        edge.prop('labels/0', {
          attrs: {
            body: {
              stroke: '#1890ff'
            }
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  //   padding: 0 20px;
  box-sizing: border-box;
  height: 40px;
  background: white;
  box-shadow: 0 2px 6px #e1e1e1;
  position: fixed;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  overflow: hidden;
  .tool {
    font-size: 13px;
    cursor: pointer;
    // width: 40px;
    padding: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #f1f1f1;
    }
  }
}
.rect {
  width: 10px;
  height: 10px;
  border: 1px solid #5a5a5a;
  //   color: #e9352f;
}
.nodeMsg {
  padding: 5px 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  font-size: 13px;
  background: white;
  box-shadow: 0 2px 6px #e1e1e1;
  span {
    margin-right: 10px;
  }
}
</style>

