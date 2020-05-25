<template>
  <div class="overflow-hidden relative flex flex-col  items-end vertical-height bg-gray-900">
    <transition-group name="carousel" tag="div" class="bg-gray-900 absolute w-full h-full carousel">
      <div v-for="image in images" :key="image.id" class="w-1/3 carousel-item h-full" >
        <img class="object-contain vertical-height w-full" :src="image.src">
      </div>
    </transition-group>
    <div class="w-full h-full flex justify-between relative center-blocks">
      <div class="text-gray-200 text-center w-12 sides">
        <button @click="back()" class=" block w-full h-full remove-outline">
          <font-awesome-icon :icon="['fas', 'chevron-left']"/>
        </button>
      </div>      
      <div class="text-gray-200 text-center w-12 sides">
        <button @click="next()"  class=" block w-full h-full remove-outline">
          <font-awesome-icon :icon="['fas', 'chevron-right']"/>
        </button>
      </div>
    </div>
    <div class="w-full text-center relative py-2 board">
      <button v-for="(image, key) in imgs" :key="key" @click="to(key)" v-bind:class="[mark(key) ? 'bg-gray-400' : 'bg-gray-700']" class="hover:bg-gray-400 inline-block mx-2 rounded-full h-5 w-5 remove-outline">
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'carousel',
    props: ['imgs'],
    data() {
       return {
            images: [],            
            nextImg: 2
       }
    },
    created() {
        this.images = [this.imgs[this.imgs.length - 1], this.imgs[0],this.imgs[1]]
    },
    methods: {
        next() {          
          this.fast = false
          this.images.shift()
          if (this.nextImg == this.imgs.length) {
            this.images.push(this.imgs[0])
            this.nextImg = 1
          } else {
            this.images.push(this.imgs[this.nextImg])
            this.nextImg++
          }   
          console.log(this.nextImg)        
        },
        back() {     
          this.fast = false                 
          if (this.nextImg == 1) {
            this.nextImg = this.imgs.length
          } else {
            this.nextImg = this.images[2].id
          }
          if (this.images[0].id-1 < 0) {
            this.images.unshift(this.imgs[this.imgs.length - 1])
          } else {              
            this.images.unshift(this.imgs[this.images[0].id-1])
          }
          this.images.pop()
          console.log(this.nextImg)   
        },
        to(i) {
          this.images.splice(0,3)
          if (i == 0) {
             console.log('first') 
            this.images.push(this.imgs[this.imgs.length - 1],this.imgs[i],this.imgs[i+1])
            this.nextImg = 2
          } else if (i == this.imgs.length - 1) {
             console.log('end') 
            this.images.push(this.imgs[i-1],this.imgs[i],this.imgs[0])
            this.nextImg = 0
          } else {
             console.log('middle') 
            this.images.push(this.imgs[i-1],this.imgs[i],this.imgs[i+1])
            this.nextImg = i + 2
          }            
        },
        mark(key) {
          if (this.nextImg-2 == key) {
            return true
          } else if ((this.imgs.length-1 == key) && (this.nextImg == 1)) {
            return true
          } else {
            return false
          } 
        }
    }
}
</script>

<style scoped>
.carousel-item {
  display: inline-block;
  transition: all 1s;
}
.carousel-enter, .carousel-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.carousel-leave-active {
  position: absolute;
}
.carousel {
  left: -100%;
  width: 300%
}
.vertical-height {
  height: 65vh;
}
.board {
  background-color: hsla(0, 0%, 0%, 0.5);
}
.center-blocks {
  background-color:#ffffff00;
}
.remove-outline {
  outline: none;
}
.sides {
  background-color:#00000040;
  box-shadow: 0 0 40px rgba(0,0,0,0.5);
}
</style>