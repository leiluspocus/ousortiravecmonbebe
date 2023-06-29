<script setup lang="ts">
import MapView from './views/MapView.vue'
import ListView from './views/ListView.vue'
import ToggleMapList from './components/ToggleMapList.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let showMap = ref(true);

function toggleDisplay(mode) {
  showMap.value = mode === 'map'
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/add">Proposer un lieu</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
      </nav>
    </div>
  </header>


  <div>
    <toggle-map-list @toggleDisplay="toggleDisplay" />
    <map-view v-if="showMap" />
    <list-view v-if="!showMap" />
  </div>


</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
