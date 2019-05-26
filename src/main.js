// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/index.scss'
import '@/assets/css/colour.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css';
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离     
}
Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
