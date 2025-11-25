<template>
  <v-card
    class="event-card"
    :max-width="$vuetify.display.smAndDown ? '100%' : '300'"
    elevation="3"
    @click="goToDetails"
    link
  >
    <v-img :src="event.imageUrl" height="180px" cover></v-img>

    <v-card-title class="text-h6 pb-1">{{ event.title }}</v-card-title>

    <v-card-subtitle class="pb-1">
      {{ event.location }} - {{ formatDate(event.date) }}
    </v-card-subtitle>

    <v-card-text>
      <div class="description-text">{{ event.description }}</div>
    </v-card-text>

    <v-card-actions>
      <div class="price text-h6 font-weight-bold">
        R$ {{ event.price.toFixed(2) }}
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="flat" @click.stop="goToDetails">
        Ver Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
    formatDate(dateString) {
      const options = { month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString("pt-BR", options);
    },
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25) !important;
  }

  .v-card-title {
    white-space: normal;
    word-break: break-word;
    line-height: 1.2;
    min-height: 58px;
  }

  .v-card-subtitle {
    white-space: normal;
    word-break: break-word;
    line-height: 1.2;
    min-height: 38px;
  }

  .description-text {
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    min-height: 60px;
  }

  .price {
    color: var(--v-theme-primary);
  }
}
</style>
