<template>
  <div id="app">

    <div id="title"> 
      <h1> Implementing a Carousel in Vue.js</h1>
      <h5> (as if nobody had done it yet ...) </h5>
      <h2> In order to work in IE11 </h2>
    </div>

    <div class="separator"> 
      <hr id="first-line">
      <hr id="second-line">
    </div>

    <h3> This Carousel has 3 items </h3>
    <Carousel :itemsLength="firstCarouselItems.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :navCallback="navCallback"
              id="first-carousel">
      <div v-for="item in firstCarouselItems" v-bind:key="`first-item-${item}`" class="item" v-bind:style="`transform: translateX(${offset}px)`" >
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </Carousel>

    <div class="separator"> 
      <hr id="first-line">
      <hr id="second-line">
    </div>

    <h3> This Carousel has 6 items </h3>
    <Carousel :itemsLength="secondCarouselItems.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :navCallback="navCallback"
              id="second-carousel">
      <div v-for="item in secondCarouselItems" v-bind:key="`second-item-${item}`" class="item" v-bind:style="`transform: translateX(${offset}px)`" >
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </Carousel>

    <div class="separator"> 
      <hr id="first-line">
      <hr id="second-line">
    </div>

    <h3> This Carousel has 8 items </h3>
    <Carousel :itemsLength="thirdCarouselItems.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :navCallback="navCallback"
              id="third-carousel">
      <div v-for="item in thirdCarouselItems" v-bind:key="`third-item-${item}`" class="item" v-bind:style="`transform: translateX(${offset}px)`" >
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
    </Carousel>

    <div class="separator"> 
      <hr id="first-line">
      <hr id="second-line">
    </div>

    <h3> A Carousel with different styles </h3>
    <Carousel :itemsLength="secondCarouselItems.length"
              :itemsToShow="2" 
              :itemWidth="100" 
              :itemHeight="300" 
              :itemMarginRight="5" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :navCallback="navCallback"
              itemsToSlide="1"
              id="third-carousel">
      <div v-for="item in secondCarouselItems" v-bind:key="`fourth-item-${item}`" class="fourth-item" v-bind:style="`transform: translateX(${offset}px)`" >
        <img alt="Vue logo" src="./assets/logo.png" width="100px" height="300px">
      </div>
    </Carousel>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'

export default {
  name: 'app',
  components: {
    Carousel
  },
  data() {
    return {
      firstCarouselItems: [1, 2, 3],
      secondCarouselItems: [1, 2, 3, 4 , 5, 6],
      thirdCarouselItems: [1, 2, 3, 4, 5, 6, 7, 8],
      offset: 0, /* TODO: esta propiedad es necesaria para que se aplique la transición. Habría que extraer un componente que tenga esta propiedad para desacoplar. */
    }
  },
  methods: {
    navCallback(offset) {  /* TODO: este metodo es necesario para que se aplique la transición. Habría que extraer un componente que lo tenga para desacoplar. */
      this.offset += offset
    },
  }
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

  #first-line {
    background-color: #35495e;
    border: 1px solid #35495e;
  }
  #second-line {
    background-color: #40B783;
    border: 1px solid #40B783;
  }
  
  /*
  - NOTAR que los items tienen que tener 
    * un margin-right igual al que se le pasa al carousel por props (itemMargin) 
    * un width y height igual al que se le pasa al carousel por props (itemWidth y itemHeight)
  */ 
  .item {
    transition: transform 0.7s ease 0s; /* TODO: esta propiedad es necesaria para que se aplique la transición. Habría que extraer un componente que tenga esta propiedad para desacoplar. */

    margin-right: 10px; 
    width: 200px;
    height: 200px;
  }

  .fourth-item {
    transition: transform 0.7s ease 0s; /* TODO: esta propiedad es necesaria para que se aplique la transición. Habría que extraer un componente que tenga esta propiedad para desacoplar. */

    margin-right: 5px; 
    width: 100px;
    height: 300px;
  }

  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    /* IE10+ specific styles go here */
    .item {
      margin-right: 210px!important /* in order to work in IE10+ we have to add up the item width to the item margin */
    }

    .fourth-item {
      margin-right: 105px!important /* in order to work in IE10+ we have to add up the item width to the item margin */
    }
  }
</style>
