// src/store/index.js
import { createStore } from "vuex";
import {
  featuredEvents,
  allEvents,
  categories,
  getEventById,
  getEventsForCategoryExplore,
  getEventsByCategory,
} from "@/utils/eventData";

export default createStore({
  state: {
    featuredEvents: featuredEvents,
    allEvents: allEvents,
    categories: categories,
    currentEvent: null,
    lastPurchase: null,
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    getFeaturedEvents: (state) => state.featuredEvents, // Linha 27, se for esse
    // eslint-disable-next-line no-unused-vars
    getAllEvents: (state) => state.allEvents, // Linha 28, se for esse
    // eslint-disable-next-line no-unused-vars
    getCategories: (state) => state.categories, // Linha 29, se for esse (ajustei uma linha pra cima)
    // eslint-disable-next-line no-unused-vars
    getEventById: (state) => (id) => getEventById(id),
    // eslint-disable-next-line no-unused-vars
    getEventsForCategoryExplore: (state) => (categorySlug) =>
      getEventsForCategoryExplore(categorySlug),
    // eslint-disable-next-line no-unused-vars
    getEventsByCategory: (state) => (categorySlug) =>
      getEventsByCategory(categorySlug), // Linha 30, se for esse (ajustei uma linha pra cima)
    // eslint-disable-next-line no-unused-vars
    getCurrentEvent: (state) => state.currentEvent,
    // eslint-disable-next-line no-unused-vars
    getLastPurchase: (state) => state.lastPurchase,
  },
  mutations: {
    SET_CURRENT_EVENT(state, event) {
      state.currentEvent = event;
    },
    SET_LAST_PURCHASE(state, purchaseDetails) {
      state.lastPurchase = purchaseDetails;
    },
  },
  actions: {
    fetchEventDetails({ commit }, eventId) {
      const event = getEventById(eventId);
      commit("SET_CURRENT_EVENT", event);
    },
    processPurchase({ commit }, purchaseDetails) {
      // eslint-disable-next-line no-useless-escape
      const qrCodeValue = `INGRESSO-<span class="math-inline">\{purchaseDetails\.eventId\}\-</span>{Date.now()}`;
      const finalPurchase = {
        ...purchaseDetails,
        qrCodeValue: qrCodeValue,
        purchaseDate: new Date().toISOString(),
      };
      commit("SET_LAST_PURCHASE", finalPurchase);
      return finalPurchase;
    },
  },
  modules: {},
});
