<template>
  <div class="tabitem" @click="itmeClick">
    <slot  v-if="!isActive" name="item-icon" />
    <slot v-else  name="icon-active" />
    <div :class="{a:isActive}"><slot name="item-text" /></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return { 
    };
  },
  computed:{
    isActive(){
      return this.$route.path == this.path
    }
  },
  methods: {
    itmeClick() {
      this.$route.path == this.path? this.active:!this.active;
      if (this.$route.path != this.path) {
        this.$router.push(this.path);  
      }     
    }
  }
};
</script>

<style scoped>
.tabitem {
  flex: 1;
}
.a{
  color:red;
}
</style>