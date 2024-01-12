<script>
import { NuxtImg } from "#components";

export default {
  props: {
    image: {
      type: Object,
      default: () => ({
        src: "",
        alt: "",
      }),
    },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    cta: { type: String, default: "" },
    customClass: { type: String, default: "" },
    columnWide: { type: String, default: "" },
  },
  components: { NuxtImg },
};
</script>

<template>
  <div :class="columnWide" class="column">
    <div class="segment-card" :class="customClass">
      <NuxtImg :src="image.src" :alt="image.alt" class="segment-card__image" />
      <h4 class="segment-card__title">{{ title }}</h4>
      <p class="segment-card__description">{{ description }}</p>
      <cta class="cta--type-secondary">{{ cta }}</cta>
    </div>
  </div>
</template>
