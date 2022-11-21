<script setup lang="ts">
import { RouterView } from "vue-router";
import ContactActions from "@/components/ContactActions.vue";
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <ContactActions />
  </main>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
