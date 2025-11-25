<template>
  <v-footer class="d-flex flex-column pa-0" app>
    <v-card
      flat
      tile
      width="100%"
      class="text-center"
      color="primary"
      rounded="0"
    >
      <v-card-text class="py-2 px-1">
        <v-row class="justify-center">
          <v-col cols="12" sm="8" md="6">
            <h3 class="text-subtitle-1 text-white mb-1">Conecte-se conosco!</h3>
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              class="mx-1"
              :icon="icon.icon"
              variant="plain"
              color="white"
              size="small"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ></v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white-text py-2 px-1">
        <v-row>
          <v-col cols="12" md="6" class="text-left text-sm-center text-md-left">
            <p class="text-caption mb-0">
              <v-icon size="x-small" class="mr-1">mdi-map-marker</v-icon> Av.
              Tapajós, 1234 - Centro, Santarém - PA
            </p>
            <p class="text-caption mb-0">
              <v-icon size="x-small" class="mr-1">mdi-phone</v-icon> (93)
              99999-9999
            </p>
            <p class="text-caption mb-0">
              <v-icon size="x-small" class="mr-1">mdi-email</v-icon>
              contato@eventossantarem.com
            </p>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="text-right text-sm-center text-md-right"
          >
            <p class="text-caption mb-0">
              &copy; {{ new Date().getFullYear() }} Eventos Santarém. Todos os
              direitos reservados.
            </p>
            <p class="text-caption mt-0">
              Desenvolvido com
              <v-icon size="x-small" color="red">mdi-heart</v-icon> em Santarém.
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    socialIcons: [
      {
        name: "Facebook",
        icon: "mdi-facebook",
        link: "https://facebook.com/eventossantarem",
      },
      {
        name: "Instagram",
        icon: "mdi-instagram",
        link: "https://instagram.com/eventossantarem",
      },
      {
        name: "Twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/eventossantarem",
      },
      {
        name: "LinkedIn",
        icon: "mdi-linkedin",
        link: "https://linkedin.com/company/eventossantarem",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: #f5f5f5;
}

.v-card {
  // A cor 'primary' vem do seu tema Vuetify.
  // Se quiser outra cor, altere em src/plugins/vuetify.js ou use um hex code aqui.
}

.white-text {
  color: rgba(255, 255, 255, 0.7);
}

// Estilos responsivos para telas pequenas
@media (max-width: 600px) {
  .v-card-text .text-caption {
    font-size: 0.65rem !important; // Fonte ainda menor em telas muito pequenas
  }
  .v-btn.v-btn--icon {
    font-size: 1rem !important; // Ícones menores em telas pequenas
  }
}
</style>
