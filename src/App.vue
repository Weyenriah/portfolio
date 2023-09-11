<script setup lang="ts">
  import { RouterView } from "vue-router";
  import TheNavigation from "@/components/TheNavigation.vue";
  import TheContactWays from "@/components/TheContactWays.vue";
</script>

<template>
  <div class="grey-part"></div>

  <TheNavigation />

  <RouterView />

  <TheContactWays />
</template>

<style lang="scss">
.grey-part {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70%;
  background-color: $primary;
  z-index: -1;
}
</style>
