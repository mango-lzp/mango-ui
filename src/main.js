import Vue from 'vue'
import App from './App.vue'

import mangoUI from './index'
Vue.use(mangoUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
