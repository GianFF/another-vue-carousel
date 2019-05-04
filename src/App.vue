<template>
  <div id="app">
    <div> 
      <h1> Implementing a Carousel in Vue.js</h1>
      <h5> (as if nobody had done it yet ...) </h5>
    </div>
    <br>    
    <Carousel :itemsToShow="3" :itemWidth="200" :itemHeight="200" :itemMarginRight="10" :arrowMargin="0" :arrowWidth="20" :arrowHeight="50">
      <div v-for="item in items" v-bind:key="`item-${item}`" class="item">
        <img alt="Vue logo" src="./assets/logo.png">
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
      items: [1, 2, 3, 4 , 5, 6],
    }
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
    margin-top: 160px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /*
  - NOTAR que los items tienen que tener 
    * un margin-right igual al que se le pasa al carousel por props (itemMargin) 
    * un width y height igual al que se le pasa al carousel por props (itemWidth y itemHeight)
  */ 
  .item {
    margin-right: 10px; 
    width: 200px;
    height: 200px;
  }
</style>
