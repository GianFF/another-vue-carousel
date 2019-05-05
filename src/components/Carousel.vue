<template>
  <div class="carousel-container" v-bind:style="carouselContainerStyles">
    <div v-on:click="navLeft" class="nav nav-left" v-bind:style="`${arrowLeftStyles}; ${!navLeftEnabled ? `visibility: hidden` : ``}`">
      <div class="chevron-wrapper">
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
      </div>
    </div>
    <div class="carousel-content" v-bind:style="contentStyles" >
      <slot></slot>
    </div>
    <div v-on:click="navRight" class="nav nav-right" v-bind:style="`${arrowRightStyles}; ${!navRightEnabled ? `visibility: hidden` : ``}`">
      <div class="chevron-wrapper">
        <font-awesome-icon icon="chevron-right"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: ['itemsLength', 'itemsToShow', 'itemWidth', 'itemHeight', 'itemMarginRight', 'arrowMargin', 'arrowWidth', 'arrowHeight', 'navCallback', 'itemsToSlide',],
    data() {
      return {
        // defaults:
        itemsLengthData:  this.itemsLength     || 6,
        itemsToShowData:  this.itemsToShow     || 3, 
        itemWidthData:    this.itemWidth       || 100, 
        itemHeightData:   this.itemHeight      || 150, 
        itemMarginData:   this.itemMarginRight || 10, 
        arrowMarginData:  this.arrowMargin     || 0, 
        arrowWidthData:   this.arrowWidth      || 15,
        arrowHeightData:  this.arrowHeight     || 20,
        itemsToSlideData: this.itemsToSlide    || 2,
        index: 0,
      }
    },
    computed: {
      navRightEnabled() {
        return this.canNavRight()
      },
      navLeftEnabled() {
        return this.canNavLeft()
      },
      contentWidth() {
        const itemsWidth = this.itemsToShowData * this.itemWidthData
        const itemsMargin = (this.itemsToShowData - 1) * this.itemMarginData
        const arrowsMargin = this.arrowMarginData * 2

        return itemsWidth + itemsMargin + arrowsMargin
      },
      contentStyles() {
        return `width: ${this.contentWidth}px; height: ${this.itemHeightData}px`
      },
      carouselContainerStyles() {
        const width = this.contentWidth + this.arrowWidthData * 2
        return `width: ${width}px; height: ${this.itemHeightData}px`
      },
      arrowLeftStyles() {
        return `width: ${this.arrowWidthData}px; height: ${this.arrowHeightData}px`
      },
      arrowRightStyles() {
        return `width: ${this.arrowWidthData}px; height: ${this.arrowHeightData}px`
      },
    },
    methods: {
      rightHiddenItems() {
        return this.itemsLengthData - this.itemsToShowData - this.index
      },
      leftHiddenItems() {
        return this.index // there are too many hidden items in the left as the number of the index 
      },
      calculateItemsToSlide(hiddenItems) {
        return Math.min(hiddenItems, this.itemsToSlideData)
      },
      navLeft() {
        const itemsToSlide = this.calculateItemsToSlide(this.leftHiddenItems()) // caouse of this calculation using he hidden items we don't need to double check if it can navLeft
        const offset = itemsToSlide * (this.itemWidthData + this.itemMarginData)
        
        this.index = Math.max(this.index - this.itemsToSlideData, 0) // this prevent index to be negative
        this.navCallback(offset)
      },
      navRight() {
        const itemsToSlide = this.calculateItemsToSlide(this.rightHiddenItems()) // caouse of this calculation using he hidden items we don't need to double check if it can navRigth
        const offset = itemsToSlide * (this.itemWidthData + this.itemMarginData)
      
        this.index += itemsToSlide 
        this.navCallback(-offset)
      },
      canNavRight() {
        return this.rightHiddenItems() > 0
      },
      canNavLeft() {
        return this.index > 0 
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
  
  /* TODO: estos estilos deberian estar en el componente Arrow que deberia pasarsele al carousel */ 
  .nav {    
    background-color: #cac4c4;
    z-index: 1000;
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
