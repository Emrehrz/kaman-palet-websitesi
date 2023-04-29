<template>
  <section class="mx-auto bg-my-lightOrange  text-my-darkBlue w-full h-[100vw] sm:h-auto md:w-full md:h-[25vw] ">

    <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

      <div class="flex flex-col mr-auto place-self-center lg:col-span-7 text-my-black">

        <TheTypewriter></TheTypewriter>

        <p class="max-w-2xl  mx-2 text- font-semibold my-8 lg:mb-8 text-lg md:text-lg lg:text-xl ">
          İstanbulun
          her yanına
          kaliteli,
          sağlam ve sektörde öncü markaların ürünleri sağlamaktayız.</p>
        <NuxtLink to="/catalog"
          class="inline-flex items-center w-fit justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-white ease-out duration-200  ">
          Ürünlerimize göz atın.
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
        <!-- <a href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-200 border border-gray-300 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-white  ">
          Speak to Sales
        </a> -->
      </div>
      <div class="hidden w-auto h-auto lg:mt-0 lg:col-span-5 lg:flex">
        <img class="rounded-md" src="img/mainPal2.jpg" alt="mockup">
      </div>
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