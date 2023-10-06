<script lang="ts">
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import { onMounted, onUpdated, toRefs, defineComponent } from 'vue'
  import { type Spot } from '../types/Spot'
  import { getCurrentLocation } from '../components/filter'

  let map: L.Map;

  const initializeMap = () => {
    map = L.map('map').setView([48.856613, 2.352222], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  };

  const initializeMarkers = (spots: Array<Spot>) => {
    const LeafIcon = L.Icon.extend({
      options: {
        iconUrl: '/location.svg',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });

	  const locationIcon = new LeafIcon();

    spots.forEach((spot: Spot) => {
      var marker = new L.Marker([spot.lat, spot.lng], {icon: locationIcon})
      .bindPopup(`<strong>${spot.name}</strong> <br /> ${spot.address} <br /> <a href="https://maps.google.com/?q=${spot.name}, ${spot.address}, ${spot.postal_code} ${spot.city}" target="_blank" rel="noopener">Y aller ?</a>`);
      marker.addTo(map);
    });
  }

  export default defineComponent({
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  props: {
    spots: Array<Spot>,
  },
  setup(props) {
    onMounted(() => {
      initializeMap()
      if (props.spots !== undefined) {
        initializeMarkers(props.spots)
      }
    });
    onUpdated(() => {
      if (props.spots !== undefined) {
        initializeMarkers(props.spots)
      }
    })
  },
  methods: {
    fetchLoc() {
      getCurrentLocation()
    }
  }
})
</script>


<template>
  <button @click="fetchLoc()">Get current position</button>
  <div id="map"></div>
</template>


<style scoped>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
