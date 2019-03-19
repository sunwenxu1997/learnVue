import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/drag',
      name:'drag',
      component: resolve => require(['../components/page/drag'], resolve),
      meta: {title: '拖拽'}
    },
    {
      path:'/drag+',
      name:'drag+',
      component: resolve => require(['../components/page/drag+'], resolve),
      meta: {title: '拖拽+'}
    },
    {
      path:'/zoom',
      name:'zoom',
      component: resolve => require(['../components/page/zoom'], resolve),
      meta: {title: '图片滚轮缩放'}
    },
    {
      path:'/slot',
      name:'slot',
      component: resolve => require(['../components/page/slot'], resolve),
      meta: {title: 'vue插槽'}
    }
  ]
})
