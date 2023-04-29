<template>
  <div
    class="typewriter text-my-darkBlue max-w-2xl h-32 mb-4 mt-8 md:mt-0 text-5xl font-extrabold tracking-b leading-none md:text-5xl xl:text-6xl ">
    <h1>İstanbulun en <br><span class="text-my-white">{{ text }}</span> <br class="md:hidden"> paletleri.</h1>
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
