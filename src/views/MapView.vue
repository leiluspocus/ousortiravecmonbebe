<script lang="ts">
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css';

  export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    },
    initializeMap() {
      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    this.initializeMap();
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
