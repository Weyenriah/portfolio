
<script setup lang="ts">
import { ref } from 'vue';
import Hero from '@/components/TheHero.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import Contact from '@/components/ContactInfo.vue';
import GlobalOrb from '@/components/GlobalOrb.vue';
import { orbData } from '@/data/orbs';
import { projects, type Project } from '@/data/newProjects';


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
      <div class="projects-sticky-header">
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1 }"
          :viewport-once="true"
          :transition="{ duration: 600 }"
          class="projects-header-content"
        >
          <h2 class="projects-header-title">Featured Projects</h2>
        </div>
      </div>

      <div class="projects-layout-wrapper">
        <div class="projects-layout-container">
            <div
                v-for="project in projects"
                :key="project.id"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0 }"
                :transition="{ duration: 500, delay: project.layout?.delay }"
                class="project-card-container"
                :style="project.layout?.style"
            >
                <ProjectCard
                :title="project.title"
                :description="project.description"
                :image="project.image"
                :tags="project.tags"
                @click="handleProjectClick(project)"
                />
            </div>
        </div>
      </div>
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
/*
 * App.vue Styles
 * This contains the top-level layout styles.
 */

.app-container {
  /* These styles came from the global <body> tag in your main.scss,
     but they are good to have here as a fallback. */
  background-color: #0a0a0a;
  color: white;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden; // This clips the global orbs
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
  min-height: 180vh;
  padding-bottom: 5rem; // pb-20
  z-index: 10; // <-- ADD THIS LINE
}

.projects-sticky-header {
    width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 20;
}

.projects-header-content {
  text-align: center;
}

.projects-header-title {
  font-size: 3.75rem; // text-6xl
  line-height: 1.1;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 5rem; // md:text-8xl
  }
}

.projects-header-subtitle {
  font-size: 1.25rem; // text-xl
  color: #9ca3af; // text-gray-400
}

.projects-layout-wrapper {
  position: relative;
  padding: 8rem 2rem 0; // pt-32 px-8

  @media (min-width: 768px) {
    padding-left: 4rem; // md:px-16
    padding-right: 4rem;
  }
  @media (min-width: 1024px) {
    padding-left: 6rem; // lg:px-24
    padding-right: 6rem;
  }
}

.projects-layout-container {
  position: relative;
  min-height: 150vh;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
}

.project-card-container {
  position: absolute;
  z-index: 30;
}

.contact-section {
  position: relative;
  z-index: 10;
}
</style>