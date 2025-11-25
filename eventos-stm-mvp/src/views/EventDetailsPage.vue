<template>
  <v-container fluid class="event-details-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>Detalhes do Evento</v-app-bar-title>
    </v-app-bar>

    <v-main class="main-content">
      <v-card v-if="event" class="details-card pa-5" elevation="2" rounded="lg">
        <v-img :src="event.imageUrl" height="300px" cover></v-img>

        <v-card-title class="text-h5 text-sm-h4 font-weight-bold pt-4 pb-2">{{
          event.title
        }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 text-sm-h6 mb-4">{{
          event.category
        }}</v-card-subtitle>

        <v-card-text class="text-left">
          <p class="text-body-2 text-sm-body-1 mb-2">
            <strong>Data:</strong> {{ formatFullDate(event.date) }}
          </p>
          <p class="text-body-2 text-sm-body-1 mb-2">
            <strong>Local:</strong> {{ event.location }}
          </p>
          <p class="event-full-description text-body-2 text-sm-body-1 mt-4">
            {{ event.fullDescription || event.description }}
          </p>
          <p class="price text-h6 text-sm-h5 font-weight-bold mt-6">
            Preço: R$ {{ event.price.toFixed(2) }}
          </p>
        </v-card-text>

        <v-card-actions class="px-4 pb-4 flex-column flex-sm-row">
          <v-btn
            color="primary"
            variant="flat"
            :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
            :block="$vuetify.display.smAndDown"
            class="flex-grow-1 mr-sm-2 mb-2 mb-sm-0"
            @click="confirmPurchase"
          >
            Comprar Ingresso
          </v-btn>
          <v-btn
            icon
            color="secondary"
            :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
            @click="shareEvent"
          >
            <v-icon>mdi-share-variant</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >Compartilhar</v-tooltip
            >
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        v-else
        class="loading-state d-flex flex-column align-center justify-center pa-5"
        elevation="0"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="mt-4 text-subtitle-1 text-grey-darken-1">
          Carregando detalhes do evento...
        </p>
      </v-card>
    </v-main>

    <v-snackbar
      v-model="showSnackbar"
      :timeout="3000"
      color="success"
      location="bottom right"
    >
      {{ snackbarMessage }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="showSnackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "EventDetailsPage",
  data() {
    return {
      showSnackbar: false,
      snackbarMessage: "",
    };
  },
  computed: {
    ...mapGetters(["getEventById", "getCurrentEvent"]),
    event() {
      return this.getCurrentEvent || this.getEventById(this.$route.params.id);
    },
  },
  created() {
    if (!this.event) {
      this.fetchEventDetails(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(["fetchEventDetails"]),
    ...mapMutations(["SET_CURRENT_EVENT"]),

    formatFullDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pt-BR", options);
    },
    confirmPurchase() {
      if (this.event) {
        this.SET_CURRENT_EVENT(this.event);
        this.$router.push({ name: "CheckoutPage" });
      }
    },
    async shareEvent() {
      try {
        const shareData = {
          title: this.event.title,
          text: `Confira este evento incrível em Santarém: ${this.event.title} - ${this.event.description}`,
          url: window.location.href,
        };

        if (navigator.share && navigator.canShare(shareData)) {
          await navigator.share(shareData);
          this.snackbarMessage = "Evento compartilhado com sucesso!";
        } else {
          await navigator.clipboard.writeText(shareData.url);
          this.snackbarMessage =
            "Link do evento copiado para a área de transferência!";
        }
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
        this.snackbarMessage = "Erro ao compartilhar o evento.";
      } finally {
        this.showSnackbar = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.event-details-page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px !important;
}

.main-content {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
}

.details-card {
  background-color: white;
  text-align: left;

  .v-img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .event-full-description {
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.8);
  }

  .price {
    color: var(--v-theme-primary);
  }
}

.loading-state {
  min-height: 60vh;
}
</style>
