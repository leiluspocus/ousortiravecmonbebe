import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Spot } from '../types/Spot'
import { getSpots } from '../api/spots'
import { type GeolocationCoordinates } from '../types/GeolocationCoordinates'

export type RootState = {
  spots: Spot[]
}

const defaultSpotsArray = reactive([] as Spot[])

export const useSpotsStore = defineStore('spots', {
  state: () => ({ spots: [], currentLocation: {} } as RootState),
  getters: {},
  actions: {
    async fetchStore() {
      this.spots = await getSpots()
    },
    storeLocation(position: GeolocationCoordinates) {
      this.currentLocation = position
    }
  }
})
