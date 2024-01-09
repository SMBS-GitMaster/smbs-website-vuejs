<script>
import "semantic-ui-css/semantic.css";
import "assets/scss/main.scss";
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
  </main>
</template>
