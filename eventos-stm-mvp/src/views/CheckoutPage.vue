<template>
  <v-container fluid class="checkout-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>Finalizar Compra</v-app-bar-title>
    </v-app-bar>

    <v-main class="main-content">
      <v-card class="checkout-card pa-5" elevation="2" rounded="lg">
        <v-card-title class="text-h5 mb-4"
          >Confirmar Dados para Compra</v-card-title
        >
        <v-card-subtitle v-if="event" class="text-h6 mb-4">{{
          event.title
        }}</v-card-subtitle>

        <v-card-text>
          <p class="text-body-1 mb-5">
            Para sua segurança e envio do ingresso, precisamos de seu **e-mail
            ou telefone**.
          </p>
          <v-text-field
            v-model="v$.contactInfo.$model"
            label="E-mail ou Telefone"
            variant="outlined"
            clearable
            :error-messages="v$.contactInfo.$errors.map((e) => e.$message)"
            required
            @blur="v$.contactInfo.$touch()"
          ></v-text-field>
        </v-card-text>

        <v-card-actions class="justify-end px-4 pb-4">
          <v-btn
            color="primary"
            variant="flat"
            :size="$vuetify.display.smAndDown ? 'large' : 'x-large'"
            :block="$vuetify.display.smAndDown"
            @click="proceedToPayment"
            :disabled="v$.contactInfo.$invalid || !event"
          >
            Continuar para o Pagamento
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, email, or } from "@vuelidate/validators";

export default {
  name: "CheckoutPage",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      contactInfo: "",
    };
  },
  validations() {
    return {
      contactInfo: {
        required,
        orValidation: or(email, (value) => {
          if (!value) return true;
          const cleanedValue = value.replace(/\D/g, "");
          const phoneRegex = /^\d{10,11}$/;
          return phoneRegex.test(cleanedValue);
        }),
      },
    };
  },
  computed: {
    ...mapGetters(["getCurrentEvent"]),
    event() {
      return this.getCurrentEvent;
    },
  },
  methods: {
    proceedToPayment() {
      this.v$.contactInfo.$touch();
      if (this.v$.contactInfo.$invalid || !this.event) {
        return;
      }

      this.$router.push({
        name: "PaymentConfirmation",
        query: {
          contact: this.contactInfo,
          eventId: this.event.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px !important;
}

.main-content {
  padding: 20px;
  max-width: 600px;
  margin: 50px auto;
}

.checkout-card {
  background-color: white;
  padding: 20px;
  text-align: left;
}
</style>
