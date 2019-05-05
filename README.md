### How to use it:

```
    <!-- Carousel configuration: -->
    <Carousel :itemsLength="items.length"
              :itemsToShow="3" 
              :itemWidth="200" 
              :itemHeight="200" 
              :itemMarginRight="10" 
              :arrowMargin="0" 
              :arrowWidth="20" 
              :arrowHeight="50" 
              id="carousel">

      <template v-slot:left-arrow>
        <MyArrow :navDirection="'left'" :icon="'chevron-left'"/>
      </template>
              
      <CarouselItem v-for="item in items" v-bind:key="`item-${item}`">
        <MyItem/>
      </CarouselItem>

      <template v-slot:right-arrow>
        <MyArrow :navDirection="'right'" :icon="'chevron-right'"/>
      </template>
    </Carousel>

 /*
  MyArrow styles:

  - NOTE that the arrows must have:
    * width equal to arrowWidth in the Carousel
    * height equal to arrowHeight in the Carousel

  MyComponent styles:
  
  - NOTE that the items must have:
    * margin-right equal to itemMargin in the Carousel
    * width and height equal to itemWidth and itemHeight in the Carousel
  */ 
```