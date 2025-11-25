<template>
  <v-container fluid class="payment-confirmation-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>Confirmação de Pagamento</v-app-bar-title>
    </v-app-bar>

    <v-main class="main-content">
      <v-card class="payment-card pa-5" elevation="2" rounded="lg">
        <v-card-title class="text-h5 mb-4">Resumo da Compra</v-card-title>
        <v-card-subtitle v-if="event" class="text-h6 mb-4">{{
          event.title
        }}</v-card-subtitle>

        <v-card-text>
          <div v-if="event">
            <p class="text-body-1 mb-2">
              <strong>Evento:</strong> {{ event.title }}
            </p>
            <p class="text-body-1 mb-2">
              <strong>Local:</strong> {{ event.location }}
            </p>
            <p class="text-body-1 mb-2">
              <strong>Data:</strong> {{ formatFullDate(event.date) }}
            </p>
            <p class="text-body-1 mb-4">
              <strong>Contato:</strong> {{ contactInfo }}
            </p>
            <p class="total-price text-h5 font-weight-bold">
              Total a Pagar: R$ {{ event.price.toFixed(2) }}
            </p>
          </div>
          <div
            v-else
            class="loading-state d-flex flex-column align-center justify-center"
          >
            <v-progress-circular
              indeterminate
              color="primary"
              size="48"
            ></v-progress-circular>
            <p class="mt-2 text-subtitle-2 text-grey-darken-1">
              Carregando informações do evento...
            </p>
          </div>

          <v-divider class="my-6"></v-divider>

          <v-card-title class="text-h6 text-center mb-4"
            >Selecione o Método de Pagamento</v-card-title
          >
          <div class="payment-options d-flex flex-column align-center ga-4">
            <v-btn
              color="primary"
              variant="flat"
              size="large"
              block
              prepend-icon="mdi-qrcode-scan"
              @click="processPayment('pix')"
            >
              Pagar com PIX
            </v-btn>
            <v-btn
              color="secondary"
              variant="flat"
              size="large"
              block
              prepend-icon="mdi-credit-card"
              @click="processPayment('card')"
            >
              Cartão de Crédito/Débito
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PaymentConfirmationPage",
  data() {
    return {
      contactInfo: "",
      eventId: "",
    };
  },
  computed: {
    ...mapGetters(["getEventById", "getCurrentEvent"]),
    event() {
      return this.getCurrentEvent || this.getEventById(this.eventId);
    },
  },
  created() {
    this.contactInfo = this.$route.query.contact || "";
    this.eventId = this.$route.query.eventId || "";

    if (!this.getCurrentEvent && this.eventId) {
      this.fetchEventDetails(this.eventId);
    }
  },
  methods: {
    ...mapActions(["processPurchase", "fetchEventDetails"]),
    formatFullDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pt-BR", options);
    },
    async processPayment(method) {
      if (!this.event) {
        console.error(
          "Evento não disponível para processar pagamento. Redirecionando."
        );
        this.$router.replace({ name: "Home" });
        return;
      }

      const purchaseDetails = {
        eventId: this.event.id,
        eventName: this.event.title,
        eventPrice: this.event.price,
        contactInfo: this.contactInfo,
        paymentMethod: method,
        date: this.event.date,
        location: this.event.location,
      };

      const finalPurchase = await this.processPurchase(purchaseDetails);

      this.$router.push({
        name: "QRCodePage",
        query: { purchaseId: finalPurchase.qrCodeValue },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-confirmation-page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px !important;
}

.main-content {
  padding: 20px;
  max-width: 600px;
  margin: 50px auto;
}

.payment-card {
  background-color: white;
  padding: 20px;
  text-align: left;
}

.total-price {
  color: var(--v-theme-primary);
}

.payment-options {
  .v-btn {
    max-width: 350px;
  }
}
.loading-state {
  min-height: 100px;
}
</style>
