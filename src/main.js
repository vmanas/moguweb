import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import '../src/assets/css/animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


