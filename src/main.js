import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
- NOTE that the you need to include the 
 event bus to you main.js in order to have 
 a correct integration between the carousel 
 and its items 
*/ 
Vue.prototype.$eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
