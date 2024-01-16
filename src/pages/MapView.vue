<script lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, onUpdated, toRefs, defineComponent, onUnmounted, ref } from 'vue'
import { type Spot } from '../types/Spot'
import { useSpotsStore } from '../stores/spots'
import { getCurrentLocation } from '../organisms/filter'

let map: L.Map

const store = useSpotsStore()

let unsubscribe = null

const initializeMap = () => {
  map = L.map('map').setView([48.856613, 2.352222], 12)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)
}

const initializeMarkers = (spots: Array<Spot>) => {
  const LeafIcon = L.Icon.extend({
    options: {
      iconUrl: '/location.svg',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    }
  })

  const locationIcon = new LeafIcon()

  spots.forEach((spot: Spot) => {
    var marker = new L.Marker([spot.lat, spot.lng], { icon: locationIcon }).bindPopup(
      `<strong>${spot.name}</strong> <br /> ${spot.address} <br /> <a href="https://maps.google.com/?q=${spot.name}, ${spot.address}, ${spot.postal_code} ${spot.city}" target="_blank" rel="noopener">Y aller ?</a>`
    )
    marker.addTo(map)
  })
}

export default defineComponent({
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  components: { MapPinIcon },
  props: {
    spots: Array<Spot>
  },
  setup(props) {
    const isLoadingGetCurrentPosition = ref(false)
    const toggleCurrentPosition = (value) => {
      isLoadingGetCurrentPosition.value = value
    }
    onMounted(() => {
      initializeMap()
      if (props.spots !== undefined) {
        initializeMarkers(props.spots)
      }
      unsubscribe = store.$onAction(
        ({
          name, // name of the action
          store, // store instance, same as `someStore`
          args, // array of parameters passed to the action
          after, // hook after the action returns or resolves
          onError // hook if the action throws or rejects
        }) => {
          if (name === 'storeLocation') {
            after(() => {
              map.flyTo(
                new L.LatLng(store.currentLocation.latitude, store.currentLocation.longitude),
                14
              )
              isLoadingGetCurrentPosition.value = false
            })

            // this will trigger if the action throws or returns a promise that rejects
            onError((error) => {
              console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
            })
          }
          // a shared variable for this specific action call
          const startTime = Date.now()
          // this will trigger before an action on `store` is executed
          console.log(`Start "${name}" with params [${args.join(', ')}].`)

          // this will trigger if the action succeeds and after it has fully run.
          // it waits for any returned promised
        }
      )
    })
    onUpdated(() => {
      if (props.spots !== undefined) {
        initializeMarkers(props.spots)
      }
    })
    onUnmounted(() => {
      // Clean up existing subscribers 🧹
      if (unsubscribe !== null) {
        unsubscribe()
      }
    })
    return { isLoadingGetCurrentPosition, toggleCurrentPosition }
  },
  methods: {
    fetchLoc() {
      getCurrentLocation()
    }
  }
})
</script>

<template>
  <div id="map"></div>
  <div id="localisation">
    <button
      v-if="!isLoadingGetCurrentPosition"
      class="block rounded-full bg-green-800 hover:text-white focus:outline-none"
      @click="
        () => {
          toggleCurrentPosition(true)
          fetchLoc()
        }
      "
    >
      <MapPinIcon class="h-8 w-8 text-white block" aria-hidden="true" />
    </button>
    <span v-if="isLoadingGetCurrentPosition">En chargement ...</span>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}

#localisation {
  position: absolute;
  top: 110px;
  z-index: 1000;
  left: 13px;
}

#localisation span {
  background: #eee;
  padding: 2px;
}
</style>
