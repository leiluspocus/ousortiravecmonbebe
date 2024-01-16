import { useSpotsStore } from '../stores/spots'

function getCurrentLocation(): boolean {
  console.log('hehe')
  if ('geolocation' in navigator) {
    const store = useSpotsStore()
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude, accuracy } = position.coords
      console.log(position)
      console.log('storing this result: ', { longitude, latitude, accuracy })
      store.storeLocation({ longitude, latitude, accuracy })
    })
    return true
  } else {
    return false
  }
}

export { getCurrentLocation }
