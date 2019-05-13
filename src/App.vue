<template>
  <div id="app">

    <div id="title"> 
      <h1> Implementing a Carousel in Vue.js</h1>
      <h2> In order to work in IE11 </h2>
    </div>

    <div class="separator"> 
      <hr class="first-line"><hr class="second-line">
    </div>
    
    <AVCarousel :itemsCount="items.length"
              :itemsToShow="3" 
              :itemsToSlide="2"

              :itemWidth="202"  
              :itemHeight="202"  
              :itemMarginRight="10" 

              :arrowMargin="0" 
              :arrowWidth="21" 
              :arrowHeight="50" 

              :id="'first-carousel'">

      <template v-slot:left-arrow>
        <div class="bordered-div-arrow">0</div>
      </template>
              
      <AVCarouselItem v-for="item in items" 
                      v-bind:key="`item-${item}`" 
                      :id="'first-carousel'">
        <div class="bordered-div-item">{{item}}</div>
      </AVCarouselItem>

      <template v-slot:right-arrow>
        <div class="bordered-div-arrow">0</div>
      </template>
    </AVCarousel>

     <div class="separator"> 
       <hr class="first-line"><hr class="second-line">
      </div>

    <AVCarousel :itemsCount="items.length"
              :itemsToShow="4" 
              :itemsToSlide="1"
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :id="'second-carousel'">
      <template v-slot:left-arrow>
        <MyArrow :navDirection="'left'"/>
      </template>
              
      <AVCarouselItem v-for="item in items" 
                      v-bind:key="`item-${item}`" 
                      :id="'second-carousel'">
        <MyItem :number="item"/>
      </AVCarouselItem>

      <template v-slot:right-arrow>
        <MyArrow :navDirection="'right'"/>
      </template>
    </AVCarousel>

    <div class="separator"> 
      <hr class="first-line"><hr class="second-line">
    </div>

    <h1> Find and resolve the issue: </h1>

    <AVCarousel :itemsCount="items.length"
              :itemsToShow="3" 
              :itemsToSlide="2"
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :id="'third-carousel'">
      <template v-slot:left-arrow class="bordered-div-arrow">
        <div class="bordered-div-arrow">0</div>
      </template>
              
      <AVCarouselItem v-for="item in items" 
                      v-bind:key="`item-${item}`" 
                      :id="'third-carousel'">
        <div class="bordered-div-item">{{item}}</div>
      </AVCarouselItem>

      <template v-slot:right-arrow>
        <div class="bordered-div-arrow">0</div>
      </template>
    </AVCarousel>

    <div class="separator"> 
      <hr class="first-line"><hr class="second-line">
    </div>
  </div>
</template>

<script>
import AVCarousel from './components/carousel/AVCarousel.vue'
import AVCarouselItem from './components/carousel/AVCarouselItem.vue'
import MyItem from './components/MyItem.vue'
import MyArrow from './components/MyArrow.vue'

export default {
  name: 'app',
  components: {
    AVCarousel,
    AVCarouselItem,
    MyItem,
    MyArrow,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style>
  #app {
    font-family : 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1, h2 {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  h1 {
    color: #35495e
  }
  h2 {
    color: #40B783;
  }

  .separator {
    margin-top: 60px;
    margin-bottom: 60px;

    width: 80%;
    height: 10px;
  }
  hr {
    margin-bottom: 0px;
    margin-top: 0px;

    width: 100%;
    height: 100%;
  }

  .first-line {
    background-color: #35495e;
    border: 1px solid #35495e;
  }
  .second-line {
    background-color: #40B783;
    border: 1px solid #40B783;
  }


 .bordered-div-item {
    margin-right: 10px; 
    width: 200px;
    height: 200px;

    border: 1px solid #40B783;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bordered-div-arrow {
    width: 20px;
    height: 50px;

    border: 1px solid #35495e;

    display: flex;
    justify-content: center;
    align-items: center;
  }.bordered-div-arrow:hover {
    cursor: pointer;
  }

  /*
   * I have added a border of 1px to   
   * to my carousel items and arrows.
   *
   * How many pixels of "width" does 
   * my items and arrows have now?
  */
</style>
