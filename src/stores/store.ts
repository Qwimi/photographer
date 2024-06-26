import { defineStore } from 'pinia'
import type { IPhotoset } from './types'
export const useGalleryStore = defineStore('photosets', {
  state: () => ({
    photosets: [] as IPhotoset[]
  }),
  actions: {
    async getPhotosets() {
      try {
        // const response = await fetch('http://localhost:5173/photosets.json')
        const response = await fetch('https://braburis.ru/photosets.json')

        // const response = await fetch('https://qwimi.github.io/photographer/photosets.json')

        const data = await response.json()
        this.photosets = data.photosets
      } catch (error) {
        console.error(error)
      }
    }
  }
})
