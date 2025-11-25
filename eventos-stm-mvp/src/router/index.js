// src/router/index.js
import { createRouter, createWebHistory } from "vue-router"; // Para Vue 3
// Importe as páginas que iremos criar
import HomePage from "../views/HomePage.vue";
import EventListPage from "../views/EventListPage.vue";
import EventDetailsPage from "../views/EventDetailsPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import PaymentConfirmationPage from "../views/PaymentConfirmationPage.vue";
import QRCodePage from "../views/QRCodePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/eventos",
    name: "EventList",
    component: EventListPage,
  },
  {
    path: "/eventos/:id",
    name: "EventDetails",
    component: EventDetailsPage,
    props: true, // Permite que o ID do evento seja passado como prop para o componente
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/pagamento",
    name: "PaymentConfirmation",
    component: PaymentConfirmationPage,
  },
  {
    path: "/ingresso",
    name: "QRCodePage",
    component: QRCodePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usa o modo de histórico para URLs limpas
  routes,
});

export default router;
