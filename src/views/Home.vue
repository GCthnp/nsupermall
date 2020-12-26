<template>
  <div class="home">
    <!-- 头部 -->
    <nav-bar class="navhome">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播 -->
    <swiper-item v-if="swiperList.length>1" :list="swiperList"></swiper-item>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import service from "@/network/home.js";

import SwiperItem from "@/components/common/swiper/Swiper"

export default {
  name: "Home",
  components: {
    NavBar,
    SwiperItem
  },
  data() {
    return {
      swiperList: [],
    };
  },
 
  created() {
    this.getSwiperInfo();
  },
  mounted() {},
  methods: {
    getSwiperInfo() {
      service.get("/home/multidata").then(res => {
        this.swiperList = res.data.data.banner.list;
        console.log(this.swiperList);
      });
    }
  }
};
</script>
<style scoped>
.navhome {
  background-color: var(--color-tint);
  color: white;
  text-align: center;
}
</style>
