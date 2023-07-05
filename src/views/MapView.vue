<script lang="ts">
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import { onMounted, onUpdated, toRefs } from 'vue'
  import { type Spot } from '../types/Spot'

  let map = null

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

    console.log('creating markers ', spots);
    spots.forEach((spot: Spot) => {
      console.log('iterating on: ', spot)
      var marker = new L.Marker([spot.lat, spot.lng], {icon: locationIcon}).bindPopup(`${spot.name} - ${spot.address}`);
      marker.addTo(map);
    });
  }

  export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  props: {
    spots: Array,
  },
  setup(props: Object) {
    onMounted(() => {
      initializeMap()
      initializeMarkers(props.spots)
    });
    onUpdated(() => {
      initializeMarkers(props.spots)
    })
  }
}
</script>


<template>
  <div id="map"></div>
</template>


<style scoped>
		#map {
			height: 600px;
			width: 600px;
			max-width: 100%;
			max-height: 100%;
		}
</style>
