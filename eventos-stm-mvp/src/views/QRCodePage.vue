<template>
  <v-container fluid class="qr-code-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-app-bar-title>Ingresso Confirmado!</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push({ name: 'Home' })">
        <v-icon>mdi-home</v-icon>
        <v-tooltip activator="parent" location="bottom"
          >Voltar para Home</v-tooltip
        >
      </v-btn>
    </v-app-bar>

    <v-main class="main-content">
      <v-card class="qr-card pa-5" elevation="2" rounded="lg">
        <v-card-title class="text-h5 mb-4">Seu Ingresso Digital</v-card-title>
        <v-card-subtitle class="text-h6 mb-4"
          >Compra realizada com sucesso!</v-card-subtitle
        >

        <v-card-text>
          <div
            class="qr-code-container d-flex justify-center align-center mb-6"
          >
            <qrcode-vue
              :value="qrCodeData"
              :size="$vuetify.display.smAndDown ? 180 : 250"
              level="H"
            />
          </div>
          <p class="qr-info text-h6 font-weight-bold text-primary mb-4">
            Apresente este código na entrada do evento.
          </p>

          <v-list density="compact" class="text-left mb-6">
            <v-list-item v-if="lastPurchase.eventName">
              <v-list-item-title
                ><strong>Evento:</strong>
                {{ lastPurchase.eventName }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="lastPurchase.location">
              <v-list-item-title
                ><strong>Local:</strong>
                {{ lastPurchase.location }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="lastPurchase.date">
              <v-list-item-title
                ><strong>Data:</strong>
                {{ formatFullDate(lastPurchase.date) }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="lastPurchase.contactInfo">
              <v-list-item-title
                ><strong>Enviado para:</strong>
                {{ lastPurchase.contactInfo }}</v-list-item-title
              >
            </v-list-item>
          </v-list>

          <v-divider class="my-6"></v-divider>

          <v-card-title class="text-h6 text-center mb-4"
            >Opções de Compartilhamento</v-card-title
          >
          <div class="share-options d-flex flex-column align-center ga-4">
            <v-btn
              color="info"
              variant="flat"
              size="large"
              block
              prepend-icon="mdi-email"
              @click="shareQRCode('email')"
            >
              Enviar por E-mail
            </v-btn>
            <v-btn
              color="success"
              variant="flat"
              size="large"
              block
              prepend-icon="mdi-whatsapp"
              @click="shareQRCode('whatsapp')"
            >
              Enviar por WhatsApp
            </v-btn>
            <v-btn
              color="grey-lighten-1"
              variant="flat"
              size="large"
              block
              prepend-icon="mdi-download"
              @click="downloadQRCode"
            >
              Baixar QR Code
            </v-btn>
          </div>
        </v-card-text>
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
import { mapGetters } from "vuex";
import QrcodeVue from "qrcode.vue"; // Importe o componente qrcode.vue

export default {
  name: "QRCodePage",
  components: {
    QrcodeVue, // Registre o componente para uso no template
  },
  data() {
    return {
      qrCodeData: "",
      showSnackbar: false,
      snackbarMessage: "",
    };
  },
  computed: {
    ...mapGetters(["getLastPurchase"]),
    lastPurchase() {
      return this.getLastPurchase;
    },
  },
  created() {
    this.qrCodeData =
      this.$route.query.purchaseId || "ERRO: QR CODE INDISPONÍVEL";

    if (!this.lastPurchase || !this.qrCodeData) {
      this.$router.replace({ name: "Home" });
    }
  },
  methods: {
    formatFullDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pt-BR", options);
    },
    shareQRCode(method) {
      const eventName = this.lastPurchase.eventName || "seu ingresso";
      const contact = this.lastPurchase.contactInfo;
      // eslint-disable-next-line no-useless-escape
      const qrLink = `<span class="math-inline">\{window\.location\.origin\}/ingresso?purchaseId\=</span>{this.qrCodeData}`;

      let message = `Seu ingresso para o evento '${eventName}' está pronto! Apresente o QR Code na entrada. Link: ${qrLink}`;

      if (method === "email") {
        this.snackbarMessage = `E-mail com ingresso enviado para ${contact}! (Simulado)`;
        this.showSnackbar = true;
      } else if (method === "whatsapp") {
        const phoneNumber = contact.replace(/\D/g, "");
        const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
        this.snackbarMessage = "Abrindo WhatsApp para enviar o ingresso...";
        this.showSnackbar = true;
      }
    },
    downloadQRCode() {
      const canvas = document.querySelector(".qr-code-container canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.download = `ingresso_${(
          this.lastPurchase.eventName || "evento"
        ).replace(/\s/g, "_")}_${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        this.snackbarMessage = "QR Code baixado com sucesso!";
        this.showSnackbar = true;
      } else {
        this.snackbarMessage = "Erro ao baixar QR Code. Tente novamente.";
        this.showSnackbar = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.qr-code-page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px !important;
}

.main-content {
  padding: 20px;
  max-width: 600px;
  margin: 50px auto;
}

.qr-card {
  background-color: white;
  padding: 20px;
  text-align: center;
}

.qr-code-container {
  margin: 0 auto 30px;
  width: 250px;
  height: 250px;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
}

.qr-info {
  color: var(--v-theme-primary);
}

.v-list {
  background-color: transparent !important;
  .v-list-item {
    min-height: unset !important;
    padding-inline: 0 !important;
  }
}

.share-options {
  .v-btn {
    max-width: 350px;
  }
}
</style>
