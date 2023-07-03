<script setup lang="ts">
import MapView from '../views/MapView.vue'
import ListView from '../views/ListView.vue'
import ToggleMapList from '../components/ToggleMapList.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { type Spot } from '../types/Spot'

let showMap = ref(true)

let spots = ref<Array<Spot>>([])

function toggleDisplay(mode: string) {
  showMap.value = mode === 'map'
};

const generateSpots = () => {
  const tab: Array<Spot> = [];
  tab[0] = {
    id: 1,
    name: 'Le Bouquet Wagram',
    address: '145 Av. De Wagram, 75017 Paris',
    opinion: 'Une terrasse chauffée, possibilité de rentrer avec une poussette simplement',
    lat: 48.885050,
    lng: 2.303000
  }
  tab[1] = {
    id: 2,
    name: 'La Felicita',
    address: '5 Parvis Alan Turing, 75013 Paris',
    opinion: 'Des saveurs, de l\'espace en masse!',
    lat: 48.834702,
    lng: 2.370480
  }
  spots.value = tab
  console.log('Spots passed in App.vue', spots);
}

generateSpots();
</script>
<template>
  <div>
    <toggle-map-list @toggleDisplay="toggleDisplay" />
    <map-view :spots="spots" v-if="showMap" />
    <list-view :spots="spots" v-if="!showMap" />
  </div>
  </template>
