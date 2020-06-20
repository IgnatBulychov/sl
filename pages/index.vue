<template>
<div class="w-full" >
  <div class="w-full min-h-screen bg-local bg-center bg-cover" style="background-image: url('img/back.jpg')">
    <div class="w-full h-1/3 p-8 text-gray-900 ">      
      <span class="px-5 font-bold text-6xl uppercase tracking-widest bg-white-opacity shadow-2xl">La Cafe</span> <br>
      <span class="px-5 uppercase bg-white-opacity shadow-2xl leading-none">вкус в сочетании с приятной атмосферой</span>  <br> 
    </div> 
    
  </div>

  <div class="w-full bg-white-opacity relative ">
      <offers/>  
  </div>



  <div class="w-full min-h-screen flex justify-center  bg-white-opacity overflow-hidden">
    <div class="w-3/4">
      <ul class="flex my-8">
        <li v-for="(category, key) in categories" :key="key" class="mx-4">
          <button class="text-blue-500 hover:text-blue-800 remove-outline" @click="currentCategory = key" > {{ category.title }} </button>
        </li>
      </ul>

      <transition name="fade" mode="out-in">   
        <div :key="currentCategory" class="w-full flex flex-row">
          <div v-for="item in categories[currentCategory].items"  :key="item.title" class="w-1/4 mx-3 my-3">
            <div  class="rounded shadow-lg overflow-hidden">
              <img class="object-contain vertical-height w-full h-40" :src="item.img" :alt="item.title">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> {{ item.title }} </div>
                <p class="text-gray-700 text-base">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>  
      </transition>
    </div>
  </div>

  <div>
    <carousel :imgs="imgs" />
  </div> 
</div>
</template>

<script>
import offers from '~/components/offers.vue'
import carousel from '~/components/carousel.vue'
export default {
  components: {
    carousel, offers
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  }, 
  created() {
    this.items = this.categories[0].items
  },
  data() {
       return {
         currentCategory: 0,
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
.remove-outline {
  outline: none;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>