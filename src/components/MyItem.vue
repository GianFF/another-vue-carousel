<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" v-bind:class="`item ${number % 2 === 1 ? '' : 'item-inverted'}`">
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['number'],
}
</script>

<style>
  /*
  - NOTE that the items must have:
    * margin-right equal to itemMargin in the Carousel
    * width and height equal to itemWidth and itemHeight in the Carousel
  */ 
  .item {
    margin-right: 10px; 
    width: 200px;
    height: 200px;
  }

  .item-inverted {
    -webkit-filter: invert(1);
    filter: invert(100%);
  }
  /* 
  * IE11 fix, you will need this when the component is inlined in the Carousel  
  
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .item {
      margin-right: 210px!important // in order to work in IE10+ we have to add up the item width to the item margin
    }
  }
  */
</style>
