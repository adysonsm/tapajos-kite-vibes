<template>
  <v-container fluid class="home-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-app-bar-title>Eventos Santarém</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goToEvents()">
        <v-icon>mdi-magnify</v-icon>
        <v-tooltip activator="parent" location="bottom"
          >Ver Todos os Eventos</v-tooltip
        >
      </v-btn>
    </v-app-bar>

    <v-main class="main-content">
      <EventCarousel :featuredEvents="featuredEvents" />

      <v-card class="events-section pa-5" elevation="2" rounded="lg">
        <v-card-title class="text-h5 text-center mb-6"
          >Explore por Categoria</v-card-title
        >

        <div
          v-for="category in categories"
          :key="category.slug"
          class="category-row mb-8"
        >
          <div class="d-flex justify-space-between align-center px-4">
            <div class="text-h6 font-weight-medium">{{ category.name }}</div>
            <v-btn
              color="primary"
              variant="text"
              @click="goToCategory(category.slug)"
              >Ver Mais</v-btn
            >
          </div>
          <div class="event-cards-scroll-wrapper">
            <div class="event-cards-scroll">
              <EventCard
                v-for="event in getEventsForCategoryExplore(
                  category.slug
                ).slice(0, 5)"
                :key="event.id"
                :event="event"
              />
              <v-card
                class="mx-auto my-4 see-more-placeholder"
                max-width="250"
                elevation="1"
                @click="goToCategory(category.slug)"
                link
              >
                <div
                  class="d-flex flex-column align-center justify-center fill-height pa-4"
                >
                  <v-icon size="64" color="primary"
                    >mdi-arrow-right-circle</v-icon
                  >
                  <div class="mt-2 text-subtitle-1 text-primary">
                    Ver Mais de {{ category.name }}
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import EventCarousel from "@/components/EventCarousel.vue";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomePage",
  components: {
    EventCarousel,
    EventCard,
  },
  computed: {
    ...mapGetters([
      "getFeaturedEvents",
      "getCategories",
      "getEventsForCategoryExplore",
    ]), // Usa o novo getter aqui
    featuredEvents() {
      return this.getFeaturedEvents;
    },
    categories() {
      return this.getCategories;
    },
  },
  methods: {
    goToCategory(slug) {
      this.$router.push({ name: "EventList", query: { categoria: slug } });
    },
    goToEvents() {
      this.$router.push({ name: "EventList" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page-container {
  background-color: #f5f5f5;
}

.v-app-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.events-section {
  background-color: white;
  padding: 20px;
  margin-top: 32px;
}

.category-row {
  .event-cards-scroll-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--v-theme-primary) #f1f1f1;
  }
  .event-cards-scroll-wrapper::-webkit-scrollbar {
    height: 8px;
  }
  .event-cards-scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: var(--v-theme-primary);
    border-radius: 10px;
  }
  .event-cards-scroll-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .event-cards-scroll {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 10px;
  }
}

.see-more-placeholder {
  background-color: #f8f8f8;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  min-width: 250px;
  min-height: 380px;
  margin: 10px;

  &:hover {
    border-color: var(--v-theme-primary);
    background-color: #f0f0f0;
  }
}
</style>
