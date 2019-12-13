import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {title: ''}
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
    {
      path:'/SearchHistory',
      name:'SearchHistory',
      component: resolve => require(['../components/page/SearchHistory'], resolve),
      meta: {title: '历史搜索功能'}
    },
    {
      path:'/DateSchedule',
      name:'DateSchedule',
      component: resolve => require(['../components/page/DateSchedule'], resolve),
      meta: {title: '日期进度条'}
    },
    {
      path:'/SlidingBlock',
      name:'SlidingBlock',
      component: resolve => require(['../components/page/SlidingBlock'], resolve),
      meta: {title: '滑块拖动'}
    },
    {
      path:'/ChannerBanner',
      name:'ChannerBanner',
      component: resolve => require(['../components/page/ChannerBanner'], resolve),
      meta: {title: '轮播图切换效果'}
    },
    {
      path:'/wxScan',
      name:'wxScan',
      component: resolve => require(['../components/page/wxScan'], resolve),
      meta: {title: '微信扫一扫'}
    },
    {
      path:'/PackagingComponents',
      name:'PackagingComponents',
      component: resolve => require(['../components/page/PackagingComponents'], resolve),
      meta: {title: '封装组件'}
    },
    {
      path:'/Roll',
      name:'Roll',
      component: resolve => require(['../components/page/Roll'], resolve),
      meta: {title: '滚动效果'}
    },
    {
      path:'/DepthCards',
      name:'DepthCards',
      component: resolve => require(['../components/page/DepthCards'], resolve),
      meta: {title: '深度卡片'}
    },
    {
      path:'/RuptureText',
      name:'RuptureText',
      component: resolve => require(['../components/page/RuptureText'], resolve),
      meta: {title: '破裂文本'}
    },
    {
      path:'/StickyBall',
      name:'StickyBall',
      component: resolve => require(['../components/page/StickyBall'], resolve),
      meta: {title: '黏黏的球'}
    },
    {
      path:'/Wave',
      name:'Wave',
      component: resolve => require(['../components/page/Wave'], resolve),
      meta: {title: 'canvas波浪效果'}
    },
    {
      path:'/circularRing',
      name:'circularRing',
      component: resolve => require(['../components/page/circularRing'], resolve),
      meta: {title: '圆环进度条效果'}
    },
    {
      path:'/ParticleButton',
      name:'ParticleButton',
      component: resolve => require(['../components/page/ParticleButton'], resolve),
      meta: {title: '粒子按键效果'}
    },
    {
      path:'/NavigationBar',
      name:'NavigationBar',
      component: resolve => require(['../components/page/NavigationBar'], resolve),
      meta: {title: '滑动导航栏'}
    },
    {
      path:'/vuex',
      name:'vuex',
      component: resolve => require(['../components/page/vuex'], resolve),
      meta: {title: 'vuex的使用'}
    },
    {
      path:'/waterfallFlow',
      name:'waterfallFlow',
      component: resolve => require(['../components/page/waterfallFlow'], resolve),
      meta: {title: '瀑布流加载'}
    },
    {
      path:'/blockLoading',
      name:'blockLoading',
      component: resolve => require(['../components/page/blockLoading'], resolve),
      meta: {title: '网页模块加载'}
    },
    {
      path:'/assignBlock',
      name:'assignBlock',
      component: resolve => require(['../components/page/assignBlock'], resolve),
      meta: {title: '滑动到指定模块'}
    },
    {
      path:'/ArticleSteps',
      name:'ArticleSteps',
      component: resolve => require(['../components/page/ArticleSteps'], resolve),
      meta: {title: '自定义步骤条'}
    },
    {
      path:'/FoldMenu',
      name:'FoldMenu',
      component: resolve => require(['../components/page/FoldMenu'], resolve),
      meta: {title: '自定义折叠菜单栏'}
    },
    {
      path:'/searchlight',
      name:'searchlight',
      component: resolve => require(['../components/page/searchlight'], resolve),
      meta: {title: '文字探照灯效果'}
    },
    {
      path:'/HighlightBtn',
      name:'HighlightBtn',
      component: resolve => require(['../components/page/HighlightBtn'], resolve),
      meta: {title: '按钮边框跟随高亮效果'}
    },
    {
      path:'/WaterBck',
      name:'WaterBck',
      component: resolve => require(['../components/page/WaterBck'], resolve),
      meta: {title: '水纹背景效果'}
    },
    {
      path:'/usePDF',
      name:'usePDF',
      component: resolve => require(['../components/page/usePDF'], resolve),
      meta: {title: '使用PDF'}
    },
    {
      path:'/RegionSelect',
      name:'RegionSelect',
      component: resolve => require(['../components/page/RegionSelect'], resolve),
      meta: {title: 'vue地区选择'}
    },
    {
      path:'/customMouse',
      name:'customMouse',
      component: resolve => require(['../components/page/customMouse'], resolve),
      meta: {title: '自定义鼠标样式效果'}
    },
    {
      path:'/CircleNav',
      name:'CircleNav',
      component: resolve => require(['../components/page/CircleNav'], resolve),
      meta: {title: '圆形旋转菜单栏'}
    },
    {
      path:'/VueWebsocket',
      name:'VueWebsocket',
      component: resolve => require(['../components/page/VueWebsocket'], resolve),
      meta: {title: 'Vue+Websocket使用方法'}
    },
    {
      path:'/3dNav',
      name:'3dNav',
      component: resolve => require(['../components/page/3dNav'], resolve),
      meta: {title: '3D导航栏效果'}
    },
    {
      path:'/other',
      name:'other',
      component: resolve => require(['../components/page/other'], resolve),
      meta: {title: '其他'}
    },
  ]
})
