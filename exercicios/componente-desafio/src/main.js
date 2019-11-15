import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Content from "./content.vue"
import Footer from "@/componentes/footer.vue" //Caminho global a partir de src
import Navigation from "./navigation.vue" //caminho relativo
import Toolbar from "./toolbar.vue"


Vue.config.productionTip = false
Vue.component('app-content', Content)
Vue.component('app-footer', Footer)
Vue.component('app-navigation', Navigation)
Vue.component('Toolbar', Toolbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
