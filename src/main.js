import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const scale = width/(1920-190)>height/(1440-190)?height/(1440-190):width/(1920-190);
document.getElementsByTagName('body')[0].style.zoom = scale;  
