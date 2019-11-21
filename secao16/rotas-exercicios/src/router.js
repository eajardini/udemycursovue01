import Vue from "vue"
import Router from "vue-router"
import Inicio from "./componentes/inicio"
import Usuario from "./componentes/usuario/usuario.vue"
import UsuarioLista from "./componentes/usuario/usuariolista"
import UsuarioDetalhe from "./componentes/usuario/usuariodetalhe"
import UsuarioEditar from "./componentes/usuario/usuarioeditar"

Vue.use(Router)

export default new Router({
  mode: "history", //Tenho de configurar no servidor nginx ou apache umas variaveis
                   // consultar https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  routes: [{
    path: "/",
    component: Inicio
  }, {
    path: "/usuario",
    component: Usuario,
    props: true,
      children: [
        { path: "", component: UsuarioLista, props: true },
        { path: ":id", component: UsuarioDetalhe, props: true },
        { path: ":id/editar", component: UsuarioEditar, props: true, name:"editarUsuario"}
    ]
  }
  ]
});