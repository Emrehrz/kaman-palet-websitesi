<template>
  <div class="h-fit lg:h-[15vw] grid items-end lg:mt-8">
    <div class="overflow-hidden my-auto h-fit">
      <swiper class="mySwiper my-auto h-fit" :spaceBetween="10" :autoplay="{
          delay: 1200,
          disableOnInteraction: false,
        }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules">
        <swiper-slide class="h-fit  " v-for="(product, index) in  products " :key="index"><img class="rounded-md"
            :src="`/img/${product.img}`" alt="Paletler"
            v-if="product.img != 'woodenPals/110x130hammadde.jpg'"></swiper-slide>
        ...
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay'

import woodPals from '/src/data/allPalettes.json'



export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const products = woodPals
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      products,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 320px;
  height: fit-content;
  justify-content: center;
  overflow: visible;
}

.my-swiper {
  width: 150%;
  height: fit-content;
  overflow-x: hidden;
}

.swiper-slide img {
  margin: auto;
  padding: 20px;
  top: 50%;
}
</style>