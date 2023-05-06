<template>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center  text-center mx-auto w-full md:w-full ">

    <div class="bg-my-white p-2 w-full h-full">
      <h3 class=" font-bold text-3xl underline mb-4 underline-offset-8">Bizimle İletişime Geçin</h3>
      <ul
        class="grid grid-cols-1 md:grid-cols-2  items-start justify-start mx-auto mb-4 w-full h-fit gap-4 text-xs sm:text-base md:text-lg font-bold md:font-bold  p-2 md:p-4 ">

        <li lass="inline-flex w-fit hover:skew-x-12 p-2  ease-linear duration-150">
          <a class="mx-auto inline-flex flex-row  " href="tel: 05078732740">
            <Icon class="my-auto mx-auto w-5 h-5 mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:call" />
            <p class="text-base md:text-2xl">Telefon : 0507 873 27 40</p>
          </a>
        </li>

        <li class="inline-flex w-full  hover:skew-x-12 p-2  ease-linear duration-150">
          <a class="mx-auto inline-flex flex-row " target="_blank"
            href="https://wa.me/905078732740?text=Merhaba,%20Bana%20palet%20lazım.">
            <Icon class="my-auto mx-auto w-5 h-5 mr-1 md:w-6 md:h-6 hover:skew-x-0" name="logos:whatsapp-icon" />
            <p class="text-base md:text-2xl">Whatsapp : 0507 873 27 40</p>
          </a>
        </li>

        <li class="inline-flex w-full  hover:skew-x-12 p-2  ease-linear duration-150">

          <a class="mx-auto inline-flex flex-row " href="tel: 05324125437">
            <Icon class="my-auto mx-auto w-5 h-5 mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:call" />
            <p class="text-base md:text-2xl">Telefon : 0532 412 54 37</p>
          </a>
        </li>

        <li class="inline-flex w-full  hover:skew-x-12 p-2  ease-linear duration-150">
          <a class="mx-auto inline-flex flex-row " target="_blank"
            href="https://wa.me/905324125437?text=Merhaba,%20Bana%20palet%20lazım.">
            <Icon class="my-auto mx-auto w-5 h-5 mr-1 md:w-6 md:h-6 hover:skew-x-0" name="logos:whatsapp-icon" />
            <p class="text-base md:text-2xl">Whatsapp : 0532 412 54 37</p>
          </a>
        </li>

        <li class=" md:col-span-2 inline-flex w-full  hover:skew-x-12 p-2  ease-linear duration-150">
          <a class="mx-auto inline-flex flex-row " href="tel:02126723821">
            <Icon class="my-auto mx-auto w-5 h-5 mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:call" />
            <p class="text-base md:text-2xl">Sabit hat: 0532 412 54 37</p>
          </a>

        </li>

      </ul>

    </div>

    <div class="flex  justify-center bg-my-white w-full h-full border-t-4 md:border-t-0 border-my-darkBlue  ">

      <form class="w-full max-w-xl text-xl my-4" action="https://formsubmit.co/horuzemre007@gmail.com" method="POST">
        <h3 class="text-3xl font-bold mb-4 underline underline-offset-8">Bize yazın</h3>
        <div class="flex gap-2 flex-col items-center mb-6">

          <div class="flex flex-col gap-4">
            <label class="w-full text-start  text-my-darkBlue font-bold " for="inline-full-name">
              Eposta adresiniz
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit mx-auto py-2 px-4 text-my-gray leading-tight focus:outline-none focus:bg-white "
              required placeholder="eposta@gmail.com" type="text">
          </div>


          <div class="flex flex-col  gap-4">
            <label class=" text-my-darkBlue text-start font-bold " for="inline-password">
              Mesajınız
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-fit mx-auto py-2 px-4 text-my-gray leading-tight focus:outline-none focus:bg-white text-start "
              id="inline-password" placeholder="Sizinle çalışmak istiyorum." required>
          </div>

        </div>

        <div class="md:flex items-end">
          <div class="md:w-1/3"></div>
          <div class="md:w-1/3 ml-auto">
            <button
              class="shadow bg-my-gray hover:bg-my-lightGray focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit">
              Gönder
            </button>
          </div>
        </div>
      </form>

    </div>

    <div class="map-responsive md:col-span-2 border-t-4 border-my-darkBlue ">
      <iframe class="w-full h-[120vw]  md:h-[25vw] "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0382283058525!2d28.65400607650726!3d41.06815701573487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b558914cd6d3b9%3A0xe27d4a80c15a9036!2sOrhan%20Gazi%20Mh%2C%201719.%20Sk.%20No%3A11%2C%2034538%20Esenyurt%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1683363990986!5m2!1str!2str"
        width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style></style>