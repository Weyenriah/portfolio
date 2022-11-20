<script setup lang="ts">
import { RouterView } from "vue-router";
import ContactActions from "@/components/ContactActions.vue";
</script>

<template>
  <main>
    <RouterView />
    <ContactActions />
  </main>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
