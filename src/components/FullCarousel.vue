<template>
  <div class="carousel-container">
    <div class="left-arrow" v-on:click="navLeft"> 
      <slot name="leftArrow"></slot>
    </div>
    <div class="carousel-content" :style="contentStyles()">
      <slot></slot>
    </div>
    <div class="right-arrow" v-on:click="navRight"> 
      <slot name="rightArrow"></slot>
    </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: ['items'],
    data() {
      return {
      }
    },
    methods: {
      navLeft: () => {
        console.log("navLeft")
      },
      navRight: () => {
        console.log("navRight")
      },
      contentStyles: () => {
        return 'with:'
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import '../styles/carousel'
</style>
