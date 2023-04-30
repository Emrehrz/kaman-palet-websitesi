<template>
  <div class="h-fit ">
    <div class="overflow-hidden ">
      <swiper class="mySwiper h-fit" :spaceBetween="10" :autoplay="{
          delay: 800,
          disableOnInteraction: false,
        }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules">
        <swiper-slide class="h-fit  " v-for="(product, index) in  products " :key="index"><img class="rounded-md"
            :src="`/img/${product.img}`" alt="" v-if="product.img != 'woodenPals/110x130hammadde.jpg'"></swiper-slide>
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
  height: 280px;
  justify-content: center;
  overflow: visible;
}

.my-swiper {
  width: 150%;
  height: 150px;
  overflow-x: hidden;
}

.swiper-slide img {
  width: auto;
  height: auto;
  margin: auto;
}
</style>