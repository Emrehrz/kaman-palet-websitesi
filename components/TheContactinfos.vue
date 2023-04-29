<template>
  <div class=" grid justify-center items-center grid-cols-1 md:grid-cols-2 text-center mx-auto w-full md:w-full ">
    <div class="grid justify-center row-span-2  ">
      <iframe class="rounded-xl hidden sm:block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0382283058525!2d28.65400607650726!3d41.06815701573487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b558914cd6d3b9%3A0xe27d4a80c15a9036!2sOrhan%20Gazi%20Mh%2C%201719.%20Sk.%20No%3A11%2C%2034538%20Esenyurt%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1682630104107!5m2!1str!2str"
        width="950" height="469" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      <iframe class="block sm:hidden
      "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0382283058525!2d28.65400607650726!3d41.06815701573487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b558914cd6d3b9%3A0xe27d4a80c15a9036!2sOrhan%20Gazi%20Mh%2C%201719.%20Sk.%20No%3A11%2C%2034538%20Esenyurt%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1682630104107!5m2!1str!2str"
        width="370" height="450" style="border:0;" allowfullscreen frameborder="0" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="bg-my-white p-2">
      <ul
        class="flex flex-col items-center mx-auto mb-4 w-auto h-fit gap-4 text-xs md:text-lg font-semibold md:font-bold ">
        <h3 class="text-3xl underline underline-offset-8">İletişim bilgileri</h3>

        <li class="inline-flex w-auto  hover:skew-x-12 p-2  ease-linear duration-150">

          <a class="inline-flex md:flex-row flex-col" href="tel:05055424188">
            <Icon class="my-auto mx-auto w-5 h-5 md:mr-1 md:w-6 md:h-6 hover:skew-x-0" name="material-symbols:call" />
            <p class="text-2xl">Telefon numaramız: 05055424188</p>
          </a>
        </li>

        <li class="inline-flex w-auto  hover:skew-x-12 p-2  ease-linear duration-150">
          <a class="inline-flex md:flex-row flex-col" target="_blank"
            href="https://wa.me/905065424188?text=Merhaba,%20Bana%20palet%20lazım.">
            <Icon class="my-auto mx-auto w-5 h-5 md:mr-1 md:w-6 md:h-6 hover:skew-x-0" name="logos:whatsapp-icon" />
            <p class="text-2xl">Whatsapp iletişim numaramız: 05055424188</p>
          </a>
        </li>
      </ul>

    </div>
    <div class="flex justify-center bg-my-white ">
      <form class="w-full max-w-xl text-xl my-4" action="https://formsubmit.co/horuzemre007@gmail.com" method="POST">
        <h3 class="text-3xl font-bold mb-4 underline underline-offset-8">Bize yazın</h3>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-my-darkBlue font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Eposta adresiniz
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-my-gray  leading-tight focus:outline-none focus:bg-white "
              required placeholder="eposta@gmail.com" type="text">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-my-darkBlue font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Mesajınız
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-my-gray leading-tight focus:outline-none focus:bg-white text-start "
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
  </div>
</template>
<style></style>