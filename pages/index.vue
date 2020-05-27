<template>
<div class="w-full bg-local bg-center bg-cover" style="background-image: url('img/back.jpg')">

  <div class="w-full flex min-h-screen">
    <div class="w-1/2 h-1/3 p-8 text-gray-900 ">      
      <span class="px-5 font-bold text-6xl uppercase tracking-widest bg-white-opacity shadow-2xl">La Cafe</span> <br>
      <span class="px-5 uppercase bg-white-opacity shadow-2xl leading-none">вкус в сочетании с приятной атмосферой</span>  <br> 
    
    
    
    </div>
    
    <div class="flex flex-col w-1/2 text-center  p-8 rounded bg-white-opacity">      

      <div class="flex flex-col justify-center ">
          <div v-for="(offer, key) in offers" :key="key" class="py-2 px-2 h-full flex flex-col justify-center">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-1/3 bg-cover" :style="`background-image: url('${offer.img}')`">
              </div> 
              <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-xl">{{ offer.title }}</h1>
                <p class="mt-2 text-gray-600 text-sm">{{ offer.description }}</p>
                
                <div class="flex item-center justify-between mt-3">
                  <h1 class="text-gray-700 font-bold text-xl">{{ offer.price }}</h1>
                </div>
              </div>
            </div>
          </div>
       </div>
      
    </div>
    
  </div>

  <div class="w-full  bg-gray-500">
    2
  </div>

  <div>
    <carousel :imgs="imgs" />
  </div> 
</div>
</template>

<script>
import carousel from '~/components/carousel.vue'
export default {
  components: {
    carousel
  },
  computed: {
    offers() {
      return this.$store.state.offers;
    },
  }, 
  data() {
       return {
          imgs: [
              {
                id: 0,
                src: 'img/1.jpg'
              },
              {
                id: 1,
                src: 'img/2.jpg'
              },
              {
                id: 2,
                src: 'img/3.jpg'
              },
               {
                id: 3,
                src: 'img/4.jpg'
              },
               {
                id: 4,
                src: 'img/5.jpg'
              },
               {
                id: 5,
                src: 'img/6.jpg'
              }
            ]
       }
    },

  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: 'this.landingData.settings.title',      
    }
  },

}
</script>

<style scoped>

</style>