<script setup lang="ts">
import Navigation from './components/header/Navigation.vue'
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
      <Navigation />
  </header>


  <RouterView />
  <div id="footer" class="p-0.5 pl-1.5">
    <a href="/about#mentions-legales">Mentions légales</a>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
