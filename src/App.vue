<template>
  <div id="app">
    <tab-bar></tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar"
export default {
  name:'App',
  components:{
    TabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
