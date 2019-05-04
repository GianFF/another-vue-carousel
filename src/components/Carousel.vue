<template>
  <div class="carousel-container" v-bind:style="carouselContainerStyles">
    <div v-on:click="navLeft" class="nav nav-left" v-bind:style="arrowLeftStyles">
      <div class="chevron-wrapper">
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
      </div>
    </div>
    <div class="carousel-content" v-bind:style="contentStyles">
      <slot></slot>
    </div>
    <div v-on:click="navRight" class="nav nav-right" v-bind:style="arrowRightStyles">
      <div class="chevron-wrapper">
        <font-awesome-icon icon="chevron-right"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: ['itemsToShow', 'itemWidth', 'itemHeight', 'itemMarginRight', 'arrowMargin', 'arrowWidth', 'arrowHeight',],
    data() {
      return {
        // se definen algunas propiedades por default:
        itemsToShowData: this.itemsToShow      || 3, 
        itemWidthData:   this.itemWidth        || 100, 
        itemHeightData:  this.itemHeight       || 150, 
        itemMarginData:  this.itemMarginRight  || 10, 
        arrowMarginData: this.arrowMargin      || 0, 
        arrowWidthData:  this.arrowWidth       || 15,
        arrowHeightData: this.arrowHeight      || 20,
      }
    },
    computed: {
      contentWidth() {
        const itemsWidth = this.itemsToShowData * this.itemWidthData
        const itemsMargin = (this.itemsToShowData - 1) * this.itemMarginData
        const arrowsMargin = this.arrowMarginData * 2

        return itemsWidth + itemsMargin + arrowsMargin
      },
      contentStyles() {
        return `width: ${this.contentWidth}px; height: ${this.itemHeightData}px;`
      },
      carouselContainerStyles() {
        const width = this.contentWidth + this.arrowWidthData * 2
        return `width: ${width}px; height: ${this.itemHeightData}px;`
      },
      // arrowRightXPosition() {
      //   return this.contentWidth
      // },
      // arrowYPosition() {
      //   return (this.itemHeightData / 2) + (this.arrowHeightData / 2) 
      // },
      // arrowLeftXPosition() {
      //   return -this.arrowWidthData
      // },
      arrowLeftStyles() {
        return `width: ${this.arrowWidthData}px; height: ${this.arrowHeightData}px;` //top: ${this.arrowYPosition}px; left: ${this.arrowLeftXPosition}px;
      },
      arrowRightStyles() {
        return `width: ${this.arrowWidthData}px; height: ${this.arrowHeightData}px;` //top: ${this.arrowYPosition}px; left: ${this.arrowRightXPosition}px;
      }
    },
    methods: {
      navLeft() {
        console.log("navLeft")
      },
      navRight() {
        console.log("navRight")
      },
    },
  }
</script>

<style scoped>
  .carousel-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .carousel-content {
    display: flex;
    flex-direction: row;

    overflow: hidden;
  }

  .nav {    
    /* TODO: estos estilos deberian estar en el componente Arrow que deberia pasarsele al carousel */ 
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
