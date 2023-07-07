import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Spot } from '../types/Spot'
import getSpots from '../api/spots'

export type RootState = {
  spots: Spot[]
}

let defaultSpotsArray = reactive([] as Spot[])

export const useSpotsStore = defineStore('spots', {
  state: () => ({ spots: [] } as RootState),
  getters: {},
  actions: {
    async fetchStore() {
      this.spots = await getSpots()
    }
  }
})
