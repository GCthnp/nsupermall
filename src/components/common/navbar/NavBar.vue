<template>
  <div class="navbar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.navbar {
  height: 44px;
  line-height: 40px;
  display: flex;
}
.left,
.right {
  flex: 1;
}
.center {
  flex: 3;
}
</style>