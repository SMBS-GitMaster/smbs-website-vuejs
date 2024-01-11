<script>
import "semantic-ui-css/semantic.css";
import "assets/scss/main.scss";
import ourStackImages from "~/data/ourStack.json";

export default {
  data() {
    return {
      ourStackImages,
    };
  },
};

</script>
<template>
  <main>
    <marqueeSection title="our stack" :images="ourStackImages" />
  </main>
</template>
