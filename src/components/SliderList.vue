<template>
    <section>
        <div class="wrapper">
            <h2 class="title">Фотосеты</h2>
            <!-- {{ data }} -->

            <div v-for="photoset, index  in data" :key="photoset.id">
                <SliderItem :data="photoset" />
                <div class="divider" v-if="index != (data.length - 1)"></div>
            </div>
            <div class="divider"></div>


        </div>

    </section>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import SliderItem from "./SliderItem.vue";
import type { IPhotoset } from "@/stores/types";
const props = defineProps({
    data: {
        type: Array as PropType<IPhotoset[]>,
        required: true,
    },
});

// console.log(data[0]);
</script>

<style scoped>
.title {
    margin-bottom: 1rem;
}

.divider {
    width: 100%;
    margin: 6em 0;
    height: 1em;
    position: relative;
}

.divider:after {
    content: "";
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 140%;
    max-width: 95vw;
    background-image: url("@/assets/bg.svg");
    background-repeat: space;
}
</style>