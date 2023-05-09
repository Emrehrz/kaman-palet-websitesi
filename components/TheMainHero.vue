<template>
  <section class="mx-auto text-my-darkBlue w-full sm:h-auto md:w-full md:h-[74vw] lg:h-fit font-bold ">

    <TheTypewriter class=" w-full  my-auto col-span-12 p-4"></TheTypewriter>

    <div
      class="flex flex-col lg:flex-row gap-[3vw] lg:gap-[10vw] w-full h-fit py-2 lg:py-6 px-6 bg-my-lightGray text-my-black ">
      <p class="w-fit my-5 lg:mb-8 text-base md:text-lg lg:text-xl italic">
        Türkiye'nin her yanına kaliteli, sağlam ve sektörde öncü markaların ürünleri sağlamaktayız.
      </p>
      <div class="inline-flex flex-col mb-2 md:flex-row gap-[5vw] md:gap-[2vw]">
        <NuxtLink to="/catalog"
          class="w-fit lg:w-[15vw] h-fit p-2  my-auto font-medium text-center rounded-lg  hover:bg-my-lightOrange hover:text-white hover:border-my-lightOrange ease-out duration-300 border border-my-gray text-sm md:text-lg">
          Ürünlerimize göz atın.

        </NuxtLink>

        <NuxtLink to="/services"
          class="w-fit lg:w-[15vw] h-fit p-2 my-auto font-medium text-center rounded-lg  hover:bg-my-lightOrange hover:text-white hover:border-my-lightOrange ease-out duration-300 border border-my-gray text-sm md:text-lg">
          Hizmetlerimize göz atın.

        </NuxtLink>
      </div>

    </div>
    <div class="h-fit bg-my-lightOrange py-1 text-my-slate hover:bg-my-white duration-150 ease-linear ">
      <p class="text-center text-sm md:text-lg py-0 md:py-1  lg:px-5 leading-loose">
        &bull; Özel Üretim Ahşap Palet&NonBreakingSpace; &NonBreakingSpace; &bull; Özel Üretim Plastik
        Palet&NonBreakingSpace; &NonBreakingSpace; &bull; Sıfır
        Ahşap
        Palet&NonBreakingSpace; &NonBreakingSpace; &bull; İkinci El Palet&NonBreakingSpace; &NonBreakingSpace; &bull; Euro
        Palet&NonBreakingSpace; &NonBreakingSpace; &bull; Epal Palet&NonBreakingSpace; &NonBreakingSpace; &bull;
        80x120 Palet&NonBreakingSpace; &NonBreakingSpace; &bull;
        100x120 Palet&NonBreakingSpace; &NonBreakingSpace; &bull;
        Taşımacılık Hizmeti&NonBreakingSpace; &NonBreakingSpace; &bull;
        Forklift Kiralama Hizmeti
      </p>
    </div>
  </section>
</template>




<style>
#typewriter {
  overflow: hidden;
  /* Metnin sınırlarını belirlemek için */
  border-right: .15em solid orange;
  /* Yarım piksel genişliğinde bir sağ sınır belirler */
  white-space: nowrap;
  /* Metnin yatayda düzgünce hareket etmesini sağlar */
  margin: 0 auto;
  /* Metni merkezlemek için */
  letter-spacing: .15em;
  /* Harfler arasında boşluk bırakmak için */
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  /* Yazıyı ve imleci animasyonlu hale getirir */
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange
  }
}
</style>