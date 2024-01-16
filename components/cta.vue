<script>
import { NuxtLink } from "#components";

export default {
  props: {
    to: String,
    customClass: String,
    type: String
  },
  components: { NuxtLink },
};
</script>

<template>
  <NuxtLink :to="to" class="cta" :class="customClass">
    <slot />
  </NuxtLink>
</template>
