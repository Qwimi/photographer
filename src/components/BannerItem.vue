<template>
  <div class="banner">
    <!-- <img src="@/assets/banner.jpg" alt="" class="banner-img"> -->
    <h1 class="title">
      BRABURIS
    </h1>
    <h2 class="subtitle">
      AUTOMOTIVE PHOTOGRAPHER
    </h2>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner {
  position: relative;
  min-height: 95vh;
  background: url(@/assets/banner.jpg);
  background-size: cover;
  background-position: center center;
  text-align: center;
}


h1.title {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(24px, 6vw, 96px);
}

h2.subtitle {
  position: absolute;
  bottom: 7.5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(18px, 4vw, 36px);
  font-weight: 700;
}
</style>
