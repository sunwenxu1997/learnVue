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
    {
      path:'/DigitalLoad',
      name:'DigitalLoad',
      component: resolve => require(['../components/page/DigitalLoad'], resolve),
      meta: {title: '数字加载'}
    },
    {
      path:'/DatePicker',
      name:'DatePicker',
      component: resolve => require(['../components/page/DatePicker'], resolve),
      meta: {title: '日期选择器范围'}
    },
    {
      path:'/copy',
      name:'copy',
      component: resolve => require(['../components/page/copy'], resolve),
      meta: {title: '一键复制'}
    },{
      path:'/InfiniteScroll',
      name:'InfiniteScroll',
      component: resolve => require(['../components/page/InfiniteScroll'], resolve),
      meta: {title: 'Element-ui 无限滚动'}
    },
    {
      path:'/clickButton',
      name:'clickButton',
      component: resolve => require(['../components/page/clickButton'], resolve),
      meta: {title: '按键点击效果'}
    },
    {
      path:'/swiper',
      name:'swiper',
      component: resolve => require(['../components/page/swiper'], resolve),
      meta: {title: 'swiper应用'}
    },
    {
      path:'/mock',
      name:'mock',
      component: resolve => require(['../components/page/mock'], resolve),
      meta: {title: 'mock.js的使用'}
    },
  ]
})
