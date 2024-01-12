<script>
import "semantic-ui-css/semantic.css";
import "assets/scss/main.scss";
import services from "~/data/services.json";

export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<template>
  <main>
    <Segment
      title="Services"
      subtitle="Empower your business with our software development services."
      description="Our expert team delivers solutions tailored to your needs, on time and on budget."
      image="/services_image.png"
      columnWide="twelve wide"
      customClass="services"
    >
      <div class="ui centered grid">
        <CardSegment
          v-for="service in services"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :cta="service.cta"
          customClass="services__Card"
          columnWide="eight wide computer sixteen wide tablet"
        />
      </div>
    </Segment>
  </main>
</template>
