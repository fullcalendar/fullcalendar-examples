import Vue from 'vue'
import DemoApp from './DemoApp.vue'
import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(DemoApp)
}).$mount(
  document.body.appendChild(document.createElement('div'))
)
