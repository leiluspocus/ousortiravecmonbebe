<script setup lang="ts">
import MapView from './views/MapView.vue'
import ListView from './views/ListView.vue'
import ToggleMapList from './components/ToggleMapList.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let showMap = ref(true)

let spots = ref([])

function toggleDisplay(mode) {
  showMap.value = mode === 'map'
};

const generateSpots = () => {
  spots.value[0] = {
    id: 1,
    name: 'Le Bouquet Wagram',
    address: '145 Av. De Wagram, 75017 Paris',
    opinion: 'Une terrasse chauffée, possibilité de rentrer avec une poussette simplement',
    lat: 48.885050,
    lng: 2.303000
  }
  spots.value[1] = {
    id: 2,
    name: 'La Felicita',
    address: '5 Parvis Alan Turing, 75013 Paris',
    opinion: 'Des saveurs, de l\'espace en masse!',
    lat: 48.834702,
    lng: 2.370480
  }
  console.log('Spots passed in App.vue', spots);
}

generateSpots();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Où sortir avec mon bébé ? </RouterLink>
        <RouterLink to="/add">Proposer un lieu</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView />
  <div>
    <toggle-map-list @toggleDisplay="toggleDisplay" />
    <map-view :spots="spots" v-if="showMap" />
    <list-view :spots="spots" v-if="!showMap" />
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
