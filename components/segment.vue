<script>
export default {
  props: {
    customClass: { type: String, default: "" },
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
};
</script>

<template>
  <section :class="customClass" class="segment">
    <div class="ui container">
      <div class="segment-container">
        <div v-if="image" class="segment-header">
          <div class="segment-header__content">
            <h2 class="segment-header__title">{{ title }}</h2>
            <h3 v-if="subtitle" class="segment-header__subtitle">
              {{ subtitle }}
            </h3>
            <p v-if="description" class="segment-header__description">
              {{ description }}
            </p>
          </div>
          <NuxtImg v-if="image" :src="image" class="segment-header__image" />
        </div>

        <div v-else class="segment-header__content">
          <h2 class="segment-header__title">{{ title }}</h2>
          <h3 v-if="subtitle" class="segment-header__subtitle">
            {{ subtitle }}
          </h3>
          <p v-if="description" class="segment-header__description">
            {{ description }}
          </p>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>
