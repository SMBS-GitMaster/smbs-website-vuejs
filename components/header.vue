<template>
  <header class="header">
    <div class="ui container">
      <div class="header__container">
        <NuxtLink to="/about-us" class="header__logo">
          <img
            src="~/assets/images/smbs-logo.png"
            alt="SMBS Logo"
            class="header__image"
          />
        </NuxtLink>
        <nav class="header__menu">
          <ul class="header__menu--list">
            <li class="header__menu--item">
              <NuxtLink to="/about-us" class="header__menu--link">About us</NuxtLink>
            </li>
            <li class="header__menu--item">
              <NuxtLink to="/services" class="header__menu--link">Services</NuxtLink>
            </li>
            <li class="header__menu--item">
              <NuxtLink to="/blog" class="header__menu--link">Blog</NuxtLink>
            </li>
            <li class="header__menu--item">
              <NuxtLink to="/careers" class="header__menu--link">Careers</NuxtLink>
            </li>
            <li class="header__menu--item">
              <NuxtLink to="/" class="header__menu--button">Texto</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
