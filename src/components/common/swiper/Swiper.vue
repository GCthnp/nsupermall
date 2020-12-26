<template>
    <swiper v-if="play" class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-item" v-for="(item,index) in list" :key="index">
        <img :src="item.image" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
//import "@/assets/css/swiper.min.css";
import "swiper/dist/css/swiper.css";

export default {
  name: "SwiperItem",
  props: {
    list: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 1000,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        autoplayDisableOnInteraction: false
      },
      play: true
    };
  },
  activated() {
    this.play = true;
  },
  deactivated() {
    this.play = false;
  }
};
</script>

<style scoped>
.swiper,
.swiper-item img {
  width: 100%;
}
</style>