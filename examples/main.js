import Vue from 'vue'
import App from './App.vue'
import Gecko from '../packages/index'

Vue.config.productionTip = false

Vue.use(Gecko)

new Vue({
  render: h => h(App),
}).$mount('#app')
