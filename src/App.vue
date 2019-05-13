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

    <AVCarousel :itemsLength="items.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              :id="'first-carousel'">
      <template v-slot:left-arrow>
        <MyArrow :navDirection="'left'" :icon="'chevron-left'"/>
      </template>
              
      <AVCarouselItem v-for="item in items" v-bind:key="`item-${item}`" :id="'first-carousel'">
        <MyItem/>
      </AVCarouselItem>

      <template v-slot:right-arrow>
        <MyArrow :navDirection="'right'" :icon="'chevron-right'"/>
      </template>
    </AVCarousel>
  </div>
</template>

<script>
import AVCarousel from './components/AVCarousel.vue'
import AVCarouselItem from './components/AVCarouselItem.vue'
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
