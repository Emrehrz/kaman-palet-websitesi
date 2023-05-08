// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kaman Palet - Ahşap ve Plastik Palet Satışı | Sıfır ve İkinci El Seçenekleri | Forklift Kiralama ve Taşımacılık Hizmetleri',
      meta: [{ name: 'description', content: 'Kaman Palet olarak; İstanbulun heryerine sıfır ve ikinci el palet tedariği, taşımacılık ve forklift kiralama hizmeti sunuyoruz.' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', 'nuxt-simple-robots'],
  robots: {
    siteUrl: 'https://example.com',
  },
  ssr: true,
})
