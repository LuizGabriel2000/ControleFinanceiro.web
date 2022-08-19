import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('formatDate', function (date) {
  if (!date) return null
  const [ano, mes, dia] = date.split('T')[0].split('-')
  return `${dia}/${mes}/${ano}`
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
