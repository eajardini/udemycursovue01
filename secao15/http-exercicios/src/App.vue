<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:" label-size="sm" label-cols-sd="4">
				<b-form-input type="text" 
					size="sm"					
					v-model="usuario.nome"
					placeholder="Informe seu nome">
				</b-form-input>
			</b-form-group>

			<b-form-group label="e-mail:" label-size="sm" label-cols-sd="4">
				<b-form-input type="email" 
					size="sm"					
					v-model="usuario.email"
					placeholder="Informe seu e-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" 			
				variant="primary">Salvar</b-button>
			<b-button @click="carregarUsuarios"
				variant="success"
				class="ml-2"> Carregar Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key=id>
						<strong size="sm">Nome: </strong> {{usuario.nome}} <br>
						<strong>E-mail: </strong> {{usuario.email}} <br> 
						<strong>Id: </strong> {{id}} <br>
				</b-list-group-item>	
		</b-list-group>

	</div>
</template>

<script>
export default {
	data () {
		return {
			usuarios:[],
			usuario: {
				nome:"",
				email:""
			}
		}
	},
	methods: {
		salvar(){
			if (this.usuario.nome != "" && this.usuario.email != "") {
					this.$http.post("usuarios.json", this.usuario)
							.then (resp => {
								alert("Usuário salvo com sucesso!", resp)
								// this.usuario.nome = ""
								// this.usuario.email = ""
								this.usuario = ""
							})
			} else {
				alert ("Prenchar o nome e email do usuário");
			}
		},
		carregarUsuarios() {
			 		this.$http.get("usuarios.json")
			 				.then (resp => {
								 this.usuarios = resp.data								 
							 })

		}		
	}


	// created (){
	// 	this.$http.post("usuarios.json", {
	// 		usuario:"Maria",
	// 		email: "maria@gmail.com"
	// 	}).then(resp => console.log(resp));
	// 	this.$borodin.post("usuarios.json", {
	// 		usuario:"Borodin",
	// 		email: "Borozao@gmail.com"
	// 	}).then(resp => console.log(resp))
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
