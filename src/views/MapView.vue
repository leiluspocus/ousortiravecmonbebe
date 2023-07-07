<script lang="ts">
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import { onMounted, onUpdated, toRefs, defineComponent } from 'vue'
  import { type Spot } from '../types/Spot'

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
      var marker = new L.Marker([spot.lat, spot.lng], {icon: locationIcon}).bindPopup(`${spot.name} - ${spot.address}`);
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
  }
})
</script>


<template>
  <h1>{{ spots?.length }} endroits à découvrir avec Bébé !</h1>
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
