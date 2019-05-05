<template>
  <div id="app">

    <div id="title"> 
      <h1> Implementing a Carousel in Vue.js</h1>
      <h5> (as if nobody had done it yet ...) </h5>
      <h2> In order to work in IE11 </h2>
    </div>

    <div class="separator"> 
      <hr class="first-line">
      <hr class="second-line">
    </div>

    <h3> This Carousel isn't coupled with the items </h3>
    <Carousel :itemsLength="firstCarouselItems.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              id="carousel">
      <CarouselItem v-for="item in firstCarouselItems" v-bind:key="`item-${item}`">
        <img alt="Vue logo" src="./assets/logo.png" class="item">
      </CarouselItem>
    </Carousel>

  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import CarouselItem from './components/CarouselItem.vue'

export default {
  name: 'app',
  components: {
    Carousel,
    CarouselItem,
  },
  data() {
    return {
      firstCarouselItems: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style>
  /* START Carousel related CSS: */
  /*
  - NOTE that the items must have:
    * margin-right equal to itemMargin 
    * width and height equal to itemWidth and itemHeight
  */ 
  .item {
    margin-right: 10px; 
    width: 200px;
    height: 200px;
  }
  /* 
  * IE11 fix: 
  */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .item {
      margin-right: 210px!important /* in order to work in IE10+ we have to add up the item width to the item margin */
    }
  }
  /* FINISH Carousel related CSS: */  
  
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

  h1, h5, h2 {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  h1, h2 {
    color: #35495e
  }
  h5 {
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
</style>
