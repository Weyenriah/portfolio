<template>
  <div v-if="project" class="project">
    <h2>{{ project.title }}</h2>
  </div>
  <div v-else>
    <h2>Project not found</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../data/projects";

const project = computed(() => {
  const { slug } = useRoute().params;
  return projects.find((project) => project.slug === slug);
});
</script>

<style lang="scss" scoped></style>
