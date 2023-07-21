<script setup lang="ts">
import MapView from '../views/MapView.vue'
import ListView from '../views/ListView.vue'
import ToggleMapList from '../components/ToggleMapList.vue'
import { ref, onBeforeMount } from 'vue'
import { useSpotsStore } from '../stores/spots'
import { type Spot } from '../types/Spot'
import { storeToRefs } from 'pinia'

const store = useSpotsStore()

const {spots} = storeToRefs(store)

let showMap = ref(true)

function toggleDisplay(mode: string) {
  showMap.value = mode === 'map'
};

onBeforeMount(() => {
  store.fetchStore()
});
</script>
<template>
  <div class="content">
    <toggle-map-list @toggleDisplay="toggleDisplay" />
    <map-view :spots="spots" v-if="showMap" />
    <list-view :spots="spots" v-if="!showMap" />
  </div>
  </template>
