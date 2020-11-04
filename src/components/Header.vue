<template>
  <div class="home">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title class="mr-4"
        >Programação de Operações EcoTec</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <router-link to="/" active-class="active" exact>
        <v-btn text>Cadastros de Operação</v-btn>
      </router-link>
      <router-link to="/operacoes" active-class="active">
        <v-btn text>Operações</v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script></script>

<style></style>
