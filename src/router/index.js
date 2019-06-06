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
    },
    {
      path:'/transition',
      name:'transition',
      component: resolve => require(['../components/page/transition'], resolve),
      meta: {title: 'vue动画过渡'}
    },
    {
      path:'/qrcode',
      name:'qrcode',
      component: resolve => require(['../components/page/qrcode'], resolve),
      meta: {title: 'vue生成二维码'}
    },
    {
      path:'/touch',
      name:'touch',
      component: resolve => require(['../components/page/touch'], resolve),
      meta: {title: 'vue-touch拖拽'}
    },
    {
      path:'/scaleplate',
      name:'scaleplate',
      component: resolve => require(['../components/page/scaleplate'], resolve),
      meta: {title: '标尺'}
    },
    {
      path:'/cropper',
      name:'cropper',
      component: resolve => require(['../components/page/Cropper'], resolve),
      meta: {title: '图片剪切'}
    },
    {
      path:'/share',
      name:'share',
      component: resolve => require(['../components/page/share'], resolve),
      meta: {title: '分享'}
    },
    
  ]
})
