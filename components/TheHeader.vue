<template>
  <div>
    <div
      class="flex flex-row items-center justify-center md:flex-row md:justify-center md:items-center text-center md:text-left gap-8 sm:gap-12 md:gap-16  font-semibold mx-auto text-xs lg:text-base leading-4 bg-my-white tracking-tighter px-4">

      <div class="inline-flex flex-col md:flex-row ">
        <p class="inline-flex md:flex-row flex-col first-letter:my-auto font-bold">
          <span class="my-auto">Bize ulaşın:</span>
        </p>
      </div>

      <div
        class="inline-flex flex-col md:flex-row  w-auto  hover:skew-x-12 p-2 ease-linear duration-150 items-center overflow-hidden ">
        <a class="inline-flex md:flex-row flex-col items-center hover:text-my-darkOrange" target="_blank"
          href="https://goo.gl/maps/PQbaCJMcNUSgsfkr6">
          <Icon class="md:block mr-1 w-6 h-6 hover:skew-x-0" name="material-symbols:location-on" />
          <span class="hidden sm:hidden lg:block lg:text-base "> Orhangazi Mahallesi 1719 Sokak No:11 Esenyurt / İstanbul
            ( Mimsan Sanayi Sitesi)</span>
        </a>
      </div>
      <div
        class="inline-flex flex-col md:flex-row w-auto  hover:skew-x-12 p-2  ease-linear duration-150 items-center overflow-hidden ">
        <a class="inline-flex md:flex-row flex-col items-center hover:text-my-darkOrange" href="tel:05078732740">
          <Icon class=" w-5 h-5 md:mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:call" />
          <span class="hidden sm:block"> 0507 873 27 40</span>
        </a>
      </div>
      <div
        class="inline-flex flex-col md:flex-row  w-auto  hover:skew-x-12 p-2  ease-linear duration-150 items-center overflow-hidden ">
        <a class="inline-flex md:flex-row flex-col items-center hover:text-my-darkOrange" target="_blank"
          href="https://wa.me/905078732740?text=Merhaba,%20Bana%20palet%20lazım.">
          <Icon class=" w-5 h-5 md:mr-1 md:w-6 md:h-6 hover:skew-x-0" name="logos:whatsapp-icon" />
          <span class="hidden sm:block"> 0507 873 27 40</span>
        </a>
      </div>
      <div
        class="inline-flex flex-col md:flex-row  w-auto  hover:skew-x-12 p-2  ease-linear duration-150 items-center overflow-hidden ">
        <a class="flex-nowrap inline-flex md:flex-row flex-col items-center hover:text-my-darkOrange" target="_blank"
          href="mailto:  kamanpalet@gmail.com">
          <Icon class=" w-5 h-5 md:mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:mail-rounded" />
          <span class="hidden sm:block md:hidden xl:block"> kamanpalet@gmail.com</span>
        </a>
      </div>
    </div>

    <nav
      class="font-bold font-sans w-full lg:w-[90%] h-20 mx-auto flex justify-between p-4 items-center bg-my-darkOrange text-my-white truncate">

      <NuxtLink class=" cursor-pointer bg-white md:p-0 lg:p-2 rounded-md" to="/" exact><img
          class="ml-auto w-fit h-[50px] " src="/img/navLogo2.webp" width="250" height="50" alt="">
      </NuxtLink>


      <div
        class="nav-links bg-my-white md:bg-orange-600 rounded duration-500 absolute md:static min-h-[60vh] md:min-h-fit left-0 top-[-100%] md:bg-transparent w-full md:w-auto text-xl sm:text-sm md:text-xs lg:text-2xl flex items-center px-5 z-20">
        <ul class="flex md:flex-row flex-col items-start md:items-center md:gap-[2vw] gap-6">
          <li>
            <NuxtLink @click="onToggleMenu()"
              class="my-link flex transition ease-in-out delay-100 p-2 md:text-my-white text-my-darkOrange hover:text-my-darkBlue  duration-300  cursor-pointer "
              to="/" exact>
              <Icon class="my-auto w-6 h-6 mr-3 md:w-4 md:h-4 lg:w-6 lg:h-6 " name="ph:house-fill" /> Anasayfa
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="onToggleMenu()"
              class="my-link flex transition ease-in-out delay-100 p-2 md:text-my-white text-my-darkOrange hover:text-my-darkBlue  duration-300  cursor-pointer "
              to="/Catalog" exact>
              <Icon class="my-auto w-6 h-6 mr-3 md:w-4 md:h-4 lg:w-6 lg:h-6 " name="carbon:catalog" /> Katalog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="onToggleMenu()"
              class="my-link flex transition ease-in-out delay-100 p-2 md:text-my-white text-my-darkOrange hover:text-my-darkBlue  duration-300  cursor-pointer "
              to="/Services">
              <Icon class="my-auto w-6 h-6 mr-3 md:w-4 md:h-4 lg:w-6 lg:h-6 " name="fluent:service-bell-24-filled" />
              Hizmetlerimiz
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="onToggleMenu()"
              class="my-link flex transition ease-in-out delay-100 p-2 md:text-my-white text-my-darkOrange hover:text-my-darkBlue  duration-300  cursor-pointer "
              to="/Aboutus" exact>
              <Icon class="my-auto w-6 h-6 mr-3 md:w-4 md:h-4 lg:w-6 lg:h-6 " name="fluent:book-information-24-filled" />
              Hakkımızda
            </NuxtLink>
          </li>

        </ul>
      </div>

      <div class="flex items-end gap-6">

        <button @click="onToggleMenu()" class="text-4xl cursor-pointer w-fit h-fit my-auto ml-auto p-1 md:hidden">
          <Icon class="" name="ci:hamburger-lg" />
        </button>
      </div>
    </nav>
  </div>
</template>
  
<script>
export default {

  methods: {
    onToggleMenu(e) {
      const navLinks = document.querySelector('.nav-links')
      navLinks.classList.toggle('top-[15%]')
      navLinks.classList.toggle('sm:top-[21%]')
      navLinks.classList.toggle('md:top-[10%]')
    },

  }
}

</script>

<style>
.backdrop-filter {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.blur-backdrop-filter {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

}

.my-link.router-link-active {
  @apply text-my-darkBlue font-bold bg-my-white rounded-md;
}
</style>