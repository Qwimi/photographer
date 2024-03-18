<script setup lang="ts">
import BannerItem from '@/components/BannerItem.vue';
import AboutMe from '@/components/AboutMe.vue';

import { useGalleryStore } from '@/stores/store';
import { onMounted, ref, watch } from 'vue';
import SliderList from '@/components/SliderList.vue';

const photosets = ref([])
const state = useGalleryStore()

onMounted(() => state.getPhotosets())

watch(
  () => state.photosets,
  () => photosets.value = state.photosets
);

</script>

<template>
  <header>
    <BannerItem />
  </header>
  <main>
    <AboutMe />
    <SliderList :data="photosets" />
  </main>
</template>


<style>
.img-wrapper {
  columns: 4;
  column-gap: 20px;
}

figure {
  width: 100%;
  border-radius: .25rem;
  overflow: hidden;
}

figure img {
  width: 100px;
}
</style>
