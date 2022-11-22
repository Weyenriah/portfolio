<script setup lang="ts">
import { RouterView } from "vue-router";
import ContactActions from "@/components/ContactActions.vue";
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <ContactActions />
  </main>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: $main-transition;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
