<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view />
    <button sucesso @click="irParaOInicio">Voltar</button>
  </div>
</template>

<script>

export default {

  methods: {
    irParaOInicio(){
      this.$router.push("/")
    }
  }

}
</script>

<style>

</style>