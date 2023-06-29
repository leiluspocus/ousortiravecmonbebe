<script lang="ts">
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css';
  import { onMounted, toRefs } from 'vue';

  const initializeMap = (spots) => {
    const map = L.map('map').setView([48.856613, 2.352222], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    spots.forEach(spot => {
      var marker = new L.Marker([spot.lat, spot.lng]);
      marker.addTo(map);
    });
  }

  export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  props: {
    spots: Array
  },
  setup(props) {
    onMounted(() => {
      const p = toRefs(props)
      initializeMap(p.spots.value)
    });
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
