<template>
  <div class="h-fit bg-my-lightOrange py-1 text-white hover:bg-my-darkBlue duration-150 ease-linear ">
    <div class="bg-transparent overflow-hidden text-center ">
      <swiper class="mySwiper w-fit  sm:w-[40vw] md:w-[10vw] " :spaceBetween="0" :autoplay="{
          delay: 270,
          disableOnInteraction: false,
        }" :pagination="{
      clickable: false,
    }" :navigation="false" :modules="modules">
        <swiper-slide> Özel Üretim Ahşap Palet,&NonBreakingSpace; </swiper-slide>
        <swiper-slide> Özel Üretim Plastik Palet, </swiper-slide>
        <swiper-slide> Sıfır Ahşap Palet, </swiper-slide>
        <swiper-slide> İkinci El Palet, </swiper-slide>
        <swiper-slide> Euro Palet, </swiper-slide>
        <swiper-slide> Epal Palet, </swiper-slide>
        <swiper-slide> 80x120 Palet, </swiper-slide>
        <swiper-slide> 100x120 Palet, </swiper-slide>
        <swiper-slide> Taşımacılık Hizmeti, </swiper-slide>
        <swiper-slide> Forklift Kiralama Hizmeti </swiper-slide>
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
  justify-content: center;
  overflow: visible;
}

.my-swiper {
  width: 150%;
  height: 400px;
  overflow-x: hidden;
}
</style>