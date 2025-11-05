<script setup lang="ts">
defineProps<{
  styleProps: object;
  animateProps: object;
  transitionProps: object;
}>();
</script>

<template>
  <div
    v-motion
    class="global-orb"
    :style="styleProps"
    :animate="animateProps"
    :transition="transitionProps"
  />
</template>

<style lang="scss" scoped>
.global-orb {
  position: absolute;
  border-radius: 9999px;
}
</style>