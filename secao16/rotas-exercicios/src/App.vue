<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
		<!-- A diretiva abaixo, indica que naquele lugar serao colocados os componentes
		configurados em router.js -->
		<router-view />   
	</div>
</template>

<script>
import Menu from "./componentes/templates/menu.vue"

export default {
		components: { Menu },
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
