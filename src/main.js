import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  autoFix()
  console.log('load')
}
window.onresize = function () {
  autoFix()
  console.log('resize')
}

function autoFix() {
  const cw = document.documentElement.clientWidth
  // const ch = document.documentElement.clientHeight
  document.documentElement.style.fontSize = cw / 7.5 + 'px';
  
}