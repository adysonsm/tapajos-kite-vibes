<template>
  <v-app>
    <router-view />
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue"; // Importe o componente

export default {
  name: "App",
  components: {
    AppFooter, // Registre o componente
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: "Roboto", sans-serif !important;
}

.v-application {
  font-family: "Roboto", sans-serif !important;
}
</style>
