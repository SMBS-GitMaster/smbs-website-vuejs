<script>
import "semantic-ui-css/semantic.css";
import "assets/scss/main.scss";
import services from "~/data/services.json";
import ourStackImages from "~/data/ourStack.json";

export default {
  data() {
    return {
      ourStackImages,
      services,
    };
  },
};
</script>

<template>
  <main>
    <hero
      columnWide="ten wide computer sixteen wide mobile"
      title="Boost your Software team with LATAM talent. "
      subtitle="Staff augmentation made easy."
      description="Whether you need one developer or an entire team, we have the expertise to find the right fit for your project. Plus, with our flexible engagement models, you can choose the level of support that works best for your needs."
      cta="Get in Touch"
      imageSrc="/clutch-batch.png"
    >
      <div class="six wide column computer only">
        <devCard
          imageSrc="/card-logo.png"
          name="John Doe"
          position="Front end developer"
          description="Software Engineer with over 6 years of experience in Web development. I enjoy practicing photography."
          skills="JavaScript, ReactJs, HTML, CSS"
        />
      </div>
    </hero>
    <marqueeSection title="our stack" :images="ourStackImages" />
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
