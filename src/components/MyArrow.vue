<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" v-bind:class="`arrow ${navDirection}`">
  </div>
</template>

<script>
export default {
  name: 'MyArrow',
  props: ['navDirection'],
}
</script>

<style>
  /*
  - NOTE that the arrows must have:
    * width equal to arrowWidth in the Carousel
    * height equal to arrowHeight in the Carousel
  */ 
  .arrow {
    width: 20px; 
    height: 50px; 
        
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow:hover {
    cursor: pointer;
  }
  .left {
    transform: rotate(90deg);
  }
  .right {
    transform: rotate(270deg);
  }
</style>
