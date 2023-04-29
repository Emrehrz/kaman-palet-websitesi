<template>
  <footer class="relative bg-my-darkBlue text-my-lightGray shadow mt-auto bottom-0 ">
    <div class="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <p class="hover:underline self-end">© {{ currentYear }}
        Kaman Palet. Tüm hakları saklıdır.</p>

      <p class=" mr-4 text-sm md:mr-6 "><span>Diğer iletişim bilgileri</span> </p>

      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 gap-2">

        <li>
          <a class="mr-2 hover:underline md:mr-6 " href="tel:05324125437">
            <span>Tel: 0532 412 54 37</span>
          </a>
        </li>
        <li>
          <a class="mr-2 hover:underline md:mr-6 " target="_blank"
            href="https://wa.me/905324125437?text=Merhaba,%20Bana%20palet%20lazım.">
            <span>Whatsapp: 0532 412 54 37</span>
          </a>
        </li>
        <li>
          <a href="tel:02126723821" class="mr-2 hover:underline md:mr-6 ">Sabit hat: 0212 672 3821</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
var currentDate = new Date()
var currentYear = currentDate.getFullYear()
console.log(currentDate)
console.log(currentYear)
</script>