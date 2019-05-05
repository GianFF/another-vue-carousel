<template>
  <div v-bind:class="`nav ${navDirection === 'left' ? 'nav-left' : 'nav-right'}`">
    <div class="chevron-wrapper">
      <font-awesome-icon :icon="icon"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyArrow',
  props: ['navDirection', 'icon'],
}
</script>

<style>
  /*
  - NOTE that the arrows must have:
    * width equal to arrowWidth in the Carousel
    * height equal to arrowHeight in the Carousel
  */ 
  .nav {    
    width: 20px; 
    height: 50px; 
    
    background-color: #cac4c4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav:hover {
    cursor: pointer;
  }
  .nav-left {
    border-radius: 3px 0 0 3px;
  }
  .nav-right {
    border-radius: 0 3px 3px 0;
  }
</style>
