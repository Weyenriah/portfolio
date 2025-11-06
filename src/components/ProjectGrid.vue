<script setup lang="ts">
import { projects, type Project } from '@/data/newProjects';
import ProjectCard from '@/components/ProjectCard.vue';

// Define the event we'll send up to the parent
const emit = defineEmits<{
  (e: 'project-click', project: Project): void
}>();

// Simple handler to pass the click event up
const onCardClick = (project: Project) => {
  emit('project-click', project);
};
</script>

<template>
  <div class="project-grid-container">
    <div class="projects-header">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }"
        :transition="{ duration: 600 }"
        class="projects-header-content"
      >
        <h2 class="projects-header-title">Featured Projects</h2>
      </div>
    </div>

    <div class="project-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 500, delay: index * 100 }"
        class="project-item-wrapper" 
      >
        <ProjectCard
          class="project-card-instance"
          :title="project.title"
          :description="project.description"
          :header-image="project.headerImage"
          :tags="project.tags"
          @click="onCardClick(project)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss'; // Import your media query mixins

.project-grid-container {
  position: relative;
  padding: 4rem 2rem 0;

  @include tablet-up {
    padding: 8rem 4rem 0;
  }

  @include desktop-up {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

.projects-header {
  width: 100%;
  z-index: 20;
  pointer-events: none;
  position: relative; 
  height: auto;
  text-align: center;
  margin-bottom: 4rem;

  @include tablet-up {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 0;
    margin-bottom: 0;
    z-index: 10;
  }
}

.projects-header-content {
  text-align: center;
}

.projects-header-title {
  font-size: 3.75rem;
  line-height: 1.1;
  color: white;
  margin-bottom: 1rem;

  @include tablet-up {
    font-size: 5rem;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1800px;
  margin: 0 auto;
  z-index: 11;

  @include tablet-up {
    display: block;
    position: relative;
    min-height: 150vh;

    .project-item-wrapper {
      position: absolute;

      &:nth-child(1) {
        top: 0%;
        left: 2%;
        width: 350px;
      }
      &:nth-child(2) {
        top: 11%;
        right: 3%;
        width: 380px;
      }
      &:nth-child(3) {
        top: 58%;
        left: 8%;
        width: 360px;
      }
      &:nth-child(4) {
        top: 72%;
        right: 12%;
        width: 370px;
      }
      // &:nth-child(5) { top: X; left: Y; width: Z; }
    }
  }
}
</style>