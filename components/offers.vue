<template>
<div class="w-full" :style="`height: ${height + 100}px`">  
  <div ref="block" class="w-full bg-white-opacity text-center my absolute">
    <h1 class="text-gray-900 font-bold text-3xl">Попробуйте на этой неделе</h1>
    <div class="flex flex-row">    
    <div v-for="(offer, key) in offers" :key="key" class="w-1/3 py-3 px-3">
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
</template>

<script>
export default {
  name: 'offers',
  data() {
    return {
      isMounted: false
    }
  },
  updated(){
    this.isMounted = true;
  },
  computed: {
    offers() {
      return this.$store.state.offers;
    },
    height() {
      if(!this.isMounted)
        return;
      return this.$refs.block.scrollHeight      
    }
  }
}
</script>

<style scoped>
.my {
  top: -100px;
}
</style>