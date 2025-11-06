
<script setup lang="ts">
import { ref } from 'vue';
import Hero from '@/components/TheHero.vue';
import ProjectGrid from '@/components/ProjectGrid.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import Contact from '@/components/ContactInfo.vue';
import GlobalOrb from '@/components/GlobalOrb.vue';
import { orbData } from '@/data/orbs';
import { type Project } from '@/data/newProjects';


const selectedProject = ref<Project | null>(null);
const isModalOpen = ref(false);

const handleProjectClick = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const handleCloseModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="app-container">
    <div class="global-orbs-container">
      <GlobalOrb
        v-for="(orb, index) in orbData"
        :key="index"
        :style-props="orb.style"
        :animate-props="orb.animate"
        :transition-props="orb.transition"
      />
    </div>

    <div class="hero-section">
      <Hero />
    </div>

    <section id="projects" class="projects-section">
      <ProjectGrid @project-click="handleProjectClick" />
    </section>

    <div id="contact" class="contact-section">
      <Contact />
    </div>

    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="handleCloseModal"
    />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  background-color: #0a0a0a;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.global-orbs-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.global-orb {
  position: absolute;
  border-radius: 9999px;
}

.hero-section {
  position: relative;
  z-index: 10;
}

.projects-section {
  position: relative;
  padding-bottom: 5rem;
  z-index: 10;
}

.contact-section {
  position: relative;
  z-index: 10;
}
</style>