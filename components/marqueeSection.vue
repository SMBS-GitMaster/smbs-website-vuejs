<script>
export default {
  props: {
    customClass: String,
    title: String,
    images: { type: Array, default: [] },
  },
};
</script>

<template>
  <section :class="customClass" class="marqueeSection">
    <div class="ui container">
      <div class="marqueeSection__container">
        <h2 class="marqueeSection__title">{{ title }}</h2>
        <Vue3Marquee clone>
          <NuxtImg
            v-for="image in images"
            :src="image.src"
            :alt="image.alt"
            class="marqueeSection__image"
          />
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>
