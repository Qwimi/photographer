import { defineStore } from 'pinia'
export const useGalleryStore = defineStore('photosets', {
  state: () => ({
    photosets: []
  }),
  actions: {
    async getPhotosets() {
      try {
        // const response = await fetch('@/assets/photosets.json')

        const response = await fetch('http://localhost:5173/photosets.json')
        const data = await response.json()
        this.photosets = data.photosets
      } catch (error) {
        console.error(error)
      }
      // return this.photosets
    }
  }
})
