<script>
export default {
  props: {
    title: String,
    subtitle: String,
    description: String,
    cta: String,
    columnWide: String,
    imageSrc: String,
  },
};
</script>

<template>
  <section class="hero">
    <div class="ui container">
      <div class="hero__wrapper">
        <div class="stackable ui grid">
          <div :class="columnWide" class="column hero__info">
            <h2 class="hero__title">{{ title }}</h2>
            <h3 v-if="subtitle" class="hero__subtitle">{{ subtitle }}</h3>
            <p v-if="description" class="hero__description">
              {{ description }}
            </p>
            <div class="hero__footer">
              <cta v-if="cta" to="/">{{ cta }}</cta>
              <NuxtImg v-if="imageSrc" :src="imageSrc" />
            </div>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
