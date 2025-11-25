<template>
  <v-container fluid class="event-list-page-container pa-0">
    <v-app-bar app color="primary" flat>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>Eventos</v-app-bar-title>
    </v-app-bar>

    <v-main class="main-content">
      <v-card class="filter-card pa-5 mb-8" elevation="2" rounded="lg">
        <v-card-title class="text-h6 mb-4">Filtrar Eventos</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="searchQuery"
            label="Buscar por nome, local ou descrição"
            variant="outlined"
            clearable
            density="compact"
            hide-details
            class="mb-4"
            @update:model-value="filterEvents"
          ></v-text-field>

          <v-select
            v-model="selectedCategorySlug"
            :items="categoryItems"
            item-title="name"
            item-value="slug"
            label="Categoria"
            variant="outlined"
            density="compact"
            hide-details
            @update:model-value="filterEvents"
          ></v-select>
        </v-card-text>
      </v-card>

      <v-row class="event-grid justify-center">
        <v-col
          v-for="event in filteredEvents"
          :key="event.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="d-flex justify-center"
        >
          <EventCard :event="event" />
        </v-col>
        <v-col
          v-if="!filteredEvents || filteredEvents.length === 0"
          cols="12"
          class="text-center mt-10"
        >
          <v-alert
            type="info"
            variant="tonal"
            icon="mdi-information-outline"
            class="mx-auto"
            max-width="400"
          >
            Nenhum evento encontrado com os filtros aplicados.
          </v-alert>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventListPage",
  components: {
    EventCard,
  },
  data() {
    return {
      searchQuery: "",
      selectedCategorySlug: "todos",
    };
  },
  computed: {
    ...mapGetters([
      "getAllEvents",
      "getCategories",
      "getEventsByCategory",
      "getEventsForCategoryExplore",
    ]),
    categoryItems() {
      return [
        { name: "Todas as Categorias", slug: "todos" },
        ...this.getCategories,
      ];
    },
    filteredEvents() {
      let events =
        this.selectedCategorySlug === "todos"
          ? this.getAllEvents
          : this.getEventsByCategory(this.selectedCategorySlug);

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        events = events.filter(
          (event) =>
            event.title.toLowerCase().includes(query) ||
            event.location.toLowerCase().includes(query) ||
            (event.description &&
              event.description.toLowerCase().includes(query)) ||
            (event.fullDescription &&
              event.fullDescription.toLowerCase().includes(query))
        );
      }
      // Garante que sempre retorne um array, mesmo que vazio
      return events || [];
    },
  },
  watch: {
    "$route.query.categoria": {
      immediate: true,
      handler(newCategory) {
        if (newCategory) {
          this.selectedCategorySlug = newCategory;
        } else {
          this.selectedCategorySlug = "todos";
        }
        if (this.$route.query.q) {
          this.searchQuery = this.$route.query.q;
        }
      },
    },
    "$route.query.q": {
      immediate: true,
      handler(newQuery) {
        if (newQuery) {
          this.searchQuery = newQuery;
        }
      },
    },
  },
  methods: {
    filterEvents() {
      const query = {};
      if (this.selectedCategorySlug !== "todos") {
        query.categoria = this.selectedCategorySlug;
      }
      if (this.searchQuery) {
        query.q = this.searchQuery;
      }
      this.$router.replace({ query }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.event-list-page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px !important;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.filter-card {
  background-color: white;
  padding: 20px;
}

.event-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
