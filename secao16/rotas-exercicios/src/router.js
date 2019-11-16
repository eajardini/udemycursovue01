import Vue from "vue"
import Router from "vue-router"
import Inicio from "./componentes/inicio"
import Usuario from "./componentes/usuario/usuario.vue"

Vue.use(Router)

export default new Router({
  mode: "history", //Tenho de configurar no servidor nginx ou apache umas variaveis
                   // consultar https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  routes: [{
    path: "/",
    component: Inicio
  }, {
    path: "/usuario",
    component: Usuario
  }
  ]
});