<template>
  <v-carousel
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    cycle
    class="event-carousel"
  >
    <v-carousel-item
      v-for="event in featuredEvents"
      :key="event.id"
      :src="event.imageUrl"
      cover
      @click="goToDetails(event.id)"
      class="carousel-item"
    >
      <div class="d-flex fill-height justify-center align-center overlay">
        <v-card
          class="pa-4 text-center glass-card"
          color="rgba(0,0,0,0.6)"
          elevation="10"
          :max-width="$vuetify.display.smAndDown ? '90%' : '70%'"
          rounded="lg"
        >
          <div class="text-h5 text-sm-h4 font-weight-bold mb-2">
            {{ event.title }}
          </div>
          <div class="text-body-2 text-sm-subtitle-1 mb-4">
            {{ event.description }}
          </div>
          <v-btn
            color="secondary"
            variant="flat"
            :size="$vuetify.display.smAndDown ? 'small' : 'large'"
            >Ver Detalhes</v-btn
          >
        </v-card>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "EventCarousel",
  props: {
    featuredEvents: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToDetails(eventId) {
      this.$router.push({ name: "EventDetails", params: { id: eventId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.event-carousel {
  margin-bottom: 32px;
  border-radius: 8px;
  overflow: hidden;

  .carousel-item {
    cursor: pointer;
    .overlay {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 100%
      );
    }
  }

  .glass-card {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
}
</style>
