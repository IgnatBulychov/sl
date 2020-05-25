<template>
<div class="w-full bg-local bg-center bg-cover" style="background-image: url('img/back.jpg')">

  <div class="w-full flex min-h-screen">
    <div class="w-1/2 h-1/3 p-8 text-gray-900 ">      
      <span class="px-5 font-bold text-6xl uppercase tracking-widest bg-white-opacity shadow-2xl">La Cafe</span> <br>
      <span class="px-5 uppercase bg-white-opacity shadow-2xl leading-none">вкус в сочетании с приятной атмосферой</span>  <br> 
    
    
    
    </div>
    
    <div class="flex flex-col w-1/2 text-center  p-8 rounded bg-white-opacity">      

      <div class="flex flex-col justify-center ">
          <div class="py-2 px-2 h-full flex flex-col justify-center">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-1/3 bg-cover" style="background-image: url('img/coffee.jpg')">
              </div> 
              <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-xl">Кофе из Колумбии</h1>
                <p class="mt-2 text-gray-600 text-sm">30 мая скидка на великолепный кофе</p>
                
                <div class="flex item-center justify-between mt-3">
                  <h1 class="text-gray-700 font-bold text-xl">$ 0.5</h1>
                </div>
              </div>
            </div>
          </div>

          <div class="py-2 px-2 h-full flex flex-col justify-center">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-1/3 bg-cover" style="background-image: url('img/lunch.jpg')">
              </div> 
              <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-xl">Бизнес ланч</h1>
                <p class="mt-2 text-gray-600 text-sm">Попробуйте новый питательный...</p>              
                <div class="flex justify-between text-center">
                  <h1 class="text-gray-700 font-bold text-xl">$ 10</h1>
                     </div>
               
              </div>
            </div>
          </div>

          <div class="py-2 px-2  h-full flex flex-col justify-center">
            <div class="flex  max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-1/3 bg-cover" style="background-image: url('img/pizza.jpg')">
              </div> 
              <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-xl">Пицца</h1>
                <p class="mt-2 text-gray-600 text-sm">Пицца с сицилийским колоритом</p>              
                <div class="flex item-center justify-between mt-3">
                  <h1 class="text-gray-700 font-bold text-xl">$ 7</h1>
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
      title: 'this.landingData.settings.title',      
    }
  },

}
</script>

<style scoped>

</style>