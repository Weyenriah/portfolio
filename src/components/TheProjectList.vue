<script setup lang="ts">
import { projects } from "@/data/projects";
import TheProjectListProject from "@/components/TheProjectListProject.vue";
</script>

<template>
  <div class="projects" id="projects">
    <section class="projects__inner">
      <TheProjectListProject
        v-for="(project, i) in projects"
        :key="i"
        :project="project"
        :placement="i % 2 === 0 ? 'left' : 'right'"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  margin: 0 7px 0 57px;
  padding: 30px 0;
  z-index: 3;
  position: relative;

  &__inner {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    gap: 30px;
  }

  @include tablet-up {
    margin: 0 70px;
    padding: 60px 0;
  }

  @include laptop-up {
    &__inner {
      width: 90%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 60px;
    }
  }
}
</style>
