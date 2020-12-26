<template>
  <div class="tabbar">
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img slot="icon-active" src="@/assets/img/tabbar/home-active.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/about">
      <img slot="item-icon" src="@/assets/img/tabbar/cotegory.svg"/>
      <img slot="icon-active" src="@/assets/img/tabbar/cotegory_active.svg"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcar">
      <img slot="item-icon" src="@/assets/img/tabbar/shop.svg"/>
       <img slot="icon-active" src="@/assets/img/tabbar/shop_active.svg"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/person">
      <img slot="item-icon" src="@/assets/img/tabbar/me.svg"/>
      <img slot="icon-active" src="@/assets/img/tabbar/me_active.svg"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
};
</script>

<style scoped>
.tabbar{
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>