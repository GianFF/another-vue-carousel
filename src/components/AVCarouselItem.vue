<template>
  <div class="carousel-item-container" v-bind:style="`transform: translateX(${offset}px)`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AVCarouselItem',
    props: [],
    data() {
      return {
        offset: 0,
      }
    },
    methods: {
      navCallback(offset) {
        this.offset += offset
      },
    },
    created() {
      this.$eventBus.$on('navCallback', (offset) => {
        this.navCallback(offset)
      });
    }
  }
</script>

<style scoped>
  .carousel-item-container {
    transition: transform 0.7s ease 0s; 
  }
</style>
