<template>
  <div class="swiper-container mb-2">
    <div class="bg-transparent overflow-hidden ">
      <swiper class="mySwiper " :spaceBetween="10" :autoplay="{
          delay: 800,
          disableOnInteraction: false,
        }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules">
        <swiper-slide><img class="rounded-md" src="/img/palet1.png" alt=""></swiper-slide>
        <swiper-slide><img class="rounded-md" src="/img/palet2.png" alt=""></swiper-slide>
        <swiper-slide><img class="my-auto rounded-md " src="/img/woodenPals/100x120ince.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="rounded-md" src="/img/woodenPals/100x120Euro2.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="rounded-md" src="/img/woodenPals/110x110ikitarafıacik.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="rounded-md" src="/img/mainPal1.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="rounded-md" src="/img/mainPal2.jpg" alt=""></swiper-slide>

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


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
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
  height: 320px;
  overflow: visible;

}

.my-swiper {
  width: 150%;
  height: 400px;
  overflow-x: hidden;
}

.swiper-slide img {
  width: auto;
}
</style>