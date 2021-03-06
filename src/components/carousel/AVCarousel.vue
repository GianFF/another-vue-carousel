<template>
  <div class="av-carousel-container" v-bind:style="carouselContainerStyles">
    <div v-on:click="navLeft" v-bind:style="`${arrowLeftStyles}; ${!navLeftEnabled ? `visibility: hidden` : ``}`">
      <slot name="left-arrow"></slot>
    </div>
    <div class="av-carousel-content" v-bind:style="contentStyles" >
      <slot></slot>
    </div>
    <div v-on:click="navRight" v-bind:style="`${arrowRightStyles}; ${!navRightEnabled ? `visibility: hidden` : ``}`">
      <slot name="right-arrow"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AVCarousel',
    props: ['itemsQuantiy', 'itemsToShow', 'itemWidth', 'itemHeight', 'itemMarginRight', 'arrowMargin', 'arrowWidth', 'arrowHeight', 'itemsToSlide', 'id'],
    data() {
      return {
        // defaults:
        index: 0,
        itemsQuantiyData:   this.itemsQuantiy      || 8,
        itemsToShowData:  this.itemsToShow     || 4,
        itemsToSlideData: this.itemsToSlide    || 3,
        itemWidthData:    this.itemWidth       || 100,
        itemHeightData:   this.itemHeight      || 150,
        itemMarginData:   this.itemMarginRight || 10,
        arrowMarginData:  this.arrowMargin     || 0,
        arrowWidthData:   this.arrowWidth      || 15,
        arrowHeightData:  this.arrowHeight     || 20,
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
        return this.itemsQuantiyData - this.itemsToShowData - this.index
      },
      leftHiddenItems() {
        return this.index // there are too many hidden items in the left as the number of the index
      },
      calculateItemsToSlide(hiddenItems) {
        return Math.min(hiddenItems, this.itemsToSlideData)
      },
      navCallback(offset) {
        const event = `navCallback-${this.id}`
        this.$eventBus.$emit(event, offset)
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
  .av-carousel-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .av-carousel-content {
    display: flex;
    flex-direction: row;

    overflow: hidden;
  }
</style>
