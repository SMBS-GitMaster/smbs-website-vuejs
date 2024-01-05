<template>
  <header class="Header">
    <div class="ui container Header__container">
      <NuxtLink to="/about-us" class="Header__logo">
        <img
          src="~/assets/images/smbs-logo.png"
          alt="SMBS Logo"
          class="Header__image"
        />
      </NuxtLink>
      <nav>
        <ul class="Header__list">
          <li class="Header__item">
            <NuxtLink to="/about-us" class="Header__link">About us</NuxtLink>
          </li>
          <li class="Header__item">
            <NuxtLink to="/services" class="Header__link">Services</NuxtLink>
          </li>
          <li class="Header__item">
            <NuxtLink to="/blog" class="Header__link">Blog</NuxtLink>
          </li>
          <li class="Header__item">
            <NuxtLink to="/careers" class="Header__link">Careers</NuxtLink>
          </li>
          <li class="Header__item">
            <NuxtLink to="/" class="Header__button">Texto</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
