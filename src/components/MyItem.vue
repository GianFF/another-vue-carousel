<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" class="item">
  </div>
</template>

<script>
export default {
  name: 'MyItem',
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
  /* 
  * IE11 fix: 
  */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    .item {
      margin-right: 210px!important /* in order to work in IE10+ we have to add up the item width to the item margin */
    }
  }
</style>
