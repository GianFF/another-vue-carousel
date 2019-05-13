<template>
  <div class="av-carousel-item-container" v-bind:style="`transform: translateX(${offset}px)`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AVCarouselItem',
    props: ['id'],
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
      const event = `navCallback-${this.id}`
      this.$eventBus.$on(event, (offset) => {
        this.navCallback(offset)
      });
    }
  }
</script>

<style scoped>
  .av-carousel-item-container {
    transition: transform 0.7s ease 0s; 
  }
</style>
