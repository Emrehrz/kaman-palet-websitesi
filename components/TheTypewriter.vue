<template>
  <div style="background-image: url('/img/mainPhoto.jpg');"
    class="typewriter bg-cover bg-blend-overlay bg-fixed p-24 bg-white bg-opacity-50  h-[50vw] md:h-[15vw] inline-flex flex-wrap flex-row  text-my-darkBlue md:mt-0  font-extrabold tracking-b leading-none text-4xl md:text-5xl xl:text-6xl ">
    <h1 class="m-auto bg-white/60 p-4 rounded-md ">İstanbulun en <br class="block sm:hidden"> <span
        class="text-my-lightOrange">{{ text
        }}</span> <br class="block  sm:hidden"> paletleri.
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adjectives: [
        'kullanışlı',
        'kaliteli',
        'sağlam',
        'ekonomik',
      ],
      currentIndex: 0,
      text: '',
    };
  },
  mounted() {
    this.typeOutNextAdjective();
  },
  methods: {
    typeOutNextAdjective() {
      const adjective = this.adjectives[this.currentIndex];
      let i = 0;
      const intervalId = setInterval(() => {
        this.text += adjective[i];
        i++;
        if (i >= adjective.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            this.deleteText(() => {
              this.currentIndex = (this.currentIndex + 1) % this.adjectives.length;
              this.typeOutNextAdjective();
            });
          }, 2000);
        }
      }, 100);
    },
    deleteText(callback) {
      const intervalId = setInterval(() => {
        this.text = this.text.slice(0, -1);
        if (this.text.length === 0) {
          clearInterval(intervalId);
          callback();
        }
      }, 50);
    },
  },
};
</script>

<style scoped>
.typewriter {
  text-align: center;
}
</style>

<style scoped>
.typewriter {
  text-align: center;
}
</style>
