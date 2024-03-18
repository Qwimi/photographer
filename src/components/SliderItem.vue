<template>


    <div class="carousel slide" :id="String(data.id)" data-bs-ride="carousel" data-interval="false">

        <div class="carousel-inner">
            <div v-for="elem, index in   data.photos  " :key="data.id" class="carousel-item"
                :class="{ active: index == 0 }">
                <img loading="lazy" :src="elem" class="w-100">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" :data-bs-target=data.id_target data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" :data-bs-target=data.id_target data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>

    </div>

    <div ref="scrollContainer" class="carousel-indicators" @mousedown="handleMouseDown" @mouseup="handleMouseUp"
        @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">

        <!-- <div class="thumbContainer"> -->
        <button v-for="elem, index in  data.thumbs" :key="data.id" :data-bs-target=data.id_target
            :data-bs-slide-to="index">
            <img loading="lazy" :src="elem" class="w-100">
        </button>
        <!-- </div> -->

    </div>

    <h2 class="title outline text-center">{{ data.name }}</h2>
</template>


<script lang="ts" setup>

import type { IPhotoset } from "@/stores/types";
import { defineProps, ref, type PropType } from "vue";
const props = defineProps({
    data: {
        type: Object as PropType<IPhotoset>,
        required: true,
    },
});

const scrollContainer = ref<HTMLElement | null>(null);
let startX = 0;
let scrollLeft = 0;
let isDragging = false

const handleMouseDown = (e: MouseEvent) => {
    if (scrollContainer.value) {
        e.preventDefault();
        startX = e.pageX - scrollContainer.value.offsetLeft;
        scrollLeft = scrollContainer.value.scrollLeft;
        isDragging = true

    }
};

const handleMouseMove = (e: MouseEvent) => {
    if (scrollContainer.value && isDragging) {
        e.preventDefault();
        const x = e.pageX - scrollContainer.value.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.value.scrollLeft = scrollLeft - walk;

    }
};

const handleMouseUp = () => {
    isDragging = false
};

const handleMouseLeave = (e: MouseEvent) => {
    isDragging = false
}


</script>

<style>
.carousel {
    width: 100%;
    margin-bottom: 1em;
}

.carousel-indicators img {
    display: block;
}

.carousel-indicators button {
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    height: max-content !important;
    opacity: 1 !important;
    cursor: grab;
}



@media screen and (max-width: 768px) {
    .carousel-indicators button {
        width: 100px;
        min-width: 100px;
        max-width: 100px;
    }
}

@media screen and (max-width: 425px) {
    .carousel-indicators button {
        width: 75px;
        min-width: 75px;
        max-width: 75px;
    }
}

.carousel-item img {
    aspect-ratio: 16/9;
}

.carousel-indicators {
    position: unset;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    overflow-x: hidden;
    cursor: grab;
    user-select: none;
    margin-bottom: 1em;
    width: 100%;
    justify-content: start;
    gap: 1.5rem;

}

.carousel-control-prev {
    left: -15%;
}

.carousel-control-prev-icon {
    background-image: url("@/assets/left.svg");
}

.carousel-control-next {
    right: -15%;
}

.carousel-control-next-icon {
    background-image: url("@/assets/right.svg");

}
</style>