<script>
export default {
  props: {
    imageSrc: String,
    name: String,
    position: String,
    description: String,
    skills: String,
  },
};
</script>

<template>
  <div class="devCard">
    <NuxtImg :src="imageSrc" alt="Developer profile picture" class="devCard__image"/>
    <h4 class="devCard__name">{{ name }}</h4>
    <span class="devCard__position">{{ position }}</span>
    <p class="devCard__description">{{ description }}</p>
    <cta customClass="cta--type-outlined devCard__cta">Engage</cta>
    <span class="devCard--skills devCard--skills-uppercase">Skills</span>
    <p class="devCard--skills">{{ skills }}</p>
  </div>
</template>
