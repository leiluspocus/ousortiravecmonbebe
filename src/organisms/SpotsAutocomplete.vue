<script setup>
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete'
import { ref, defineProps, reactive } from 'vue'

const props = defineProps({
  newProposal: Object
})

const autoloaderInProgress = ref(false)
const suggestions = ref([])

const fetchSuggestions = async (e) => {
  suggestions.value = []
  if (!autoloaderInProgress.value) {
    autoloaderInProgress.value = true
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        e.target.value
      )}&type=amenity&filter=countrycode:fr&limit=5&apiKey=${
        import.meta.env.VITE_AUTOCOMPLETE_KEY
      }`,
      { limit: 5 }
    )
    const data = await response.json()
    const { features } = data
    for (const item of features) {
      suggestions.value = [...suggestions.value, item.properties]
    }
    autoloaderInProgress.value = false
  }
}
</script>
<template>
  <input
    type="text"
    name="street-address"
    id="autocomplete"
    autocomplete="off"
    placeholder="Tapez le nom et/ou l'adresse ..."
    v-model="newProposal.formatted"
    @input="fetchSuggestions"
    class="autocomplete-container block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
  />
  <div v-show="suggestions.length > 0" class="autocomplete-items">
    <div
      :key="index"
      v-for="(item, index) in suggestions"
      :data-lat="item.lat"
      :data-lon="item.lon"
      @click="
        () => {
          suggestions = []
          $emit('valueSelected', item)
        }
      "
    >
      {{ item.formatted }}
    </div>
  </div>
</template>
<style></style>
