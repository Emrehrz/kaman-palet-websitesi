<template>
  <div class="flex flex-col mx-auto my-0 h-min-[100vw] w-[90%] rounded-md text-my-darkBlue p-4 ">

    <ul
      class="bg-white w-full inline-flex flex-wrap mb-6 mx-auto md:mx-0 md:mr-auto justify-start md:p-2  gap-2 md:gap-12 text-base md:text-2xl font-bold rounded ">
      <TransitionGroup name="list">
        <li v-if="allCategories" @click="getAllCategories" class=" hover:text-my-white hover:bg-my-darkBlue px-3 rounded 
        ease-linear duration-300 cursor-pointer" :key="key1">
          Tüm
          ürünler
        </li>
        <li @click="toggle('plastic')" class="hover:text-my-white hover:bg-my-darkBlue px-3 rounded 
      ease-linear duration-300 cursor-pointer" :key="key2">
          Plastik</li>
        <li @click="toggle('wooden')" class="hover:text-my-white hover:bg-my-darkBlue px-3 rounded 
      ease-linear duration-300 cursor-pointer" :key="key3">
          Ahşap</li>
      </TransitionGroup>
    </ul>


    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense w-[90%] h-fit mx-auto items-baseline gap-x-2 md:gap-y-4">
      <TransitionGroup name="list">
        <div v-if="visibility.wooden" class="w-auto lg:w-[25vw] h-fit text-gray-900 mt-0 mb-2 "
          v-for="(product, index) in   woodPals  " :key="index">
          <div class="flex flex-col place-self-center mb-4 sm:mb-2 lg:mb-0 " v-if="product.visible">
            <img :src="`/img/${product.img}`" alt=" random imgee" class="  rounded-lg shadow-lg ">

            <div class=" px-4 -mt-4 text-center">
              <div class="bg-white text-center p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline flex-wrap">

                </div>

                <h4 class="flex mt-2 text-xl lg:text-base xl:text-xl font-semibold leading-tight  flex-wrap">
                  {{
                    product.title }}
                </h4>

                <div class="mt-2 flex">
                  <span class="text-gray-600 text-sm text-start "> Kaman Palet / İstanbul / 2023</span> <br>
                  <!-- <span class="text-gray-600 text-sm "> Daha fazla bilgi almak için bizimle iletişime geçin</span> -->
                </div>

                <!-- <button class="bg-my-lightOrange mt-2 p-2  text-my-white font-bold rounded-md">Detaylar</button> -->
              </div>
              <p class=" mt-0 text-my-black text-xs lg:text-sm  text-end p-2">Daha fazla bilgi için bizimle
                iletişime
                geçin
              </p>
            </div>

          </div>
        </div>
      </TransitionGroup>
    </div>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense w-[90%] h-fit mx-auto items-baseline gap-x-2 md:gap-y-4">
      <TransitionGroup name="list">
        <div v-if="visibility.plastic" class="w-auto lg:w-[25vw]  h-fit text-gray-900 mt-0 "
          v-for="product in plasticPals " :key="product.id">
          <div class="flex flex-col place-self-center mb-4 sm:mb-2 lg:mb-0 ">
            <img :src="`/img/${product.img}`" alt=" random imgee" class="  rounded-lg shadow-lg ">

            <div class=" px-4 -mt-4 ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline flex-wrap">

                </div>

                <h4 class="flex mt-2 text-xl lg:text-base xl:text-xl font-semibold leading-tight  flex-wrap">{{
                  product.title }}
                </h4>

                <div class="mt-2">
                  <span class="text-gray-600 text-sm "> Kaman Palet / İstanbul / 2023</span>
                </div>
                <!-- <button class="bg-my-lightOrange mt-2 p-2  text-my-white font-bold rounded-md">Detaylar</button> -->
              </div>
            </div>

          </div>
          <p class=" mt-0 text-my-black text-xs lg:text-sm  text-end p-2">Daha fazla bilgi için bizimle
            iletişime
            geçin
          </p>
        </div>
      </TransitionGroup>
    </div>



  </div>
</template>

<script>
import woodPals from '/src/data/allPalettes.json'
import plsticPals from '/src/data/plasticPals.json'

export default {
  data() {
    return {
      key1: 1,
      key2: 2,
      key3: 3,
      woodPals: woodPals,
      plasticPals: plsticPals,
      visibility: { wooden: true, plastic: true },
      whichCategory: "all",
      show: false,
      allCategories: false,
      products: [
        { name: 'Product 1', description: 'Description 1', visible: true },
        { name: 'Product 2', description: 'Description 2', visible: true },
        { name: 'Product 3', description: 'Description 3', visible: true }
      ]
    }
  },
  created() {

  },
  methods: {
    toggle(category) {
      if (category == "wooden") {
        this.visibility.plastic = false
        this.visibility.wooden = true
      }
      else {
        this.visibility.wooden = false
        this.visibility.plastic = true

      }

      this.allCategories = true
    },
    getAllCategories() {
      this.visibility.wooden = true
      this.visibility.plastic = true
      this.allCategories = false

    }
  }
}
</script>

<style>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}


.my-link.router-link-active {
  @apply text-my-darkBlue font-bold bg-my-white rounded-md;
}

img {
  margin: auto;
  width: auto;
  height: auto;
}
</style>