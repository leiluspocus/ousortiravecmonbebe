<script setup>
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { ref, onMounted } from 'vue';

let newProposal = ref({})
let suggestions = ref([])
const friendlyStaff = ref(false)
const diaperFacilities = ref(false)
const pmrAccess = ref(false)
const feedback = ref('')

const fetchSuggestions = async (e) => {
  suggestions.value = [];
  const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(e.target.value)}&apiKey=${import.meta.env.VITE_AUTOCOMPLETE_KEY}`, {limit: 5})
  const data = await response.json()
  const { features } = data
  for ( const item of features ) {
    suggestions.value.push(item.properties)
  }
}

const selectSuggestion = (item) => {
  newProposal.value = item
  suggestions.value = []
}

const submitForm = (e) => {
  event.preventDefault()
  console.log('i will submit form with this infos')
  console.log(newProposal.value, diaperFacilities, friendlyStaff, pmrAccess, feedback)
}
</script>
<template>
  <form class="px-4 pb-4 content content-with-text">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h1 class="text-base font-semibold leading-7 text-gray-900 mt-3">Proposer un endroit "bébé-friendly"</h1>
        <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Nom et adresse du lieu que vous recommandez ?</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="autocomplete"
  placeholder="Tapez le nom et/ou l'adresse ..." v-model="newProposal.formatted" @input="fetchSuggestions" class="autocomplete-container block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
              <div v-show="suggestions.length > 0" class="autocomplete-items ">
                <div :key="index" v-for="(item, index) in suggestions" :data-lat="item.lat" :data-lon="item.lon" @click="selectSuggestion(item)">
                  {{ item.formatted }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Les plus "Bébé Friendly"</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" v-model="diaperFacilities" />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Table à langer</label>
                  <p class="text-gray-500">Y a-t-il de quoi changer les p'tits bouts ?</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" v-model="pmrAccess" />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900">Accès pousettes</label>
                  <p class="text-gray-500">Est-ce facile de se déplacer en poussette dans l'établissement ? </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" v-model="friendlyStaff" />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900">Staff bienveillant</label>
                  <p class="text-gray-500">Qu'ils braillent ou qu'ils fassent risette, est-ce que l'équipe est agréable avec les tous petits ?</p>
                </div>
              </div>
            </div>

            <div class="mt-8 col-span-full">
              <label for="feedback" class="block text-sm font-medium leading-6 text-gray-900">Votre opinion</label>
              <div class="mt-2">
                <textarea id="feedback" name="feedback" v-model="feedback" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Pourquoi recommandez vous ce lieu en quelques mots.</p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" @click="submitForm">Envoyer</button>
    </div>
  </form>
</template>

<style>
.addview {
  width: 600px;
  height: 600px;
}

.autocomplete-container {
    position: relative;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-top: none;
  background-color: #fff;

  z-index: 99;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
