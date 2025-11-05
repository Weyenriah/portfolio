<script setup lang="ts">
// 1. Define the Project interface
interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

// 2. Define the component's props
const props = defineProps<{
  project: Project | null;
  isOpen: boolean;
}>();

// 3. Define the 'close' event
const emit = defineEmits<{
  (e: 'close'): void
}>();

// 4. Create a handler to emit the close event
const handleClose = () => {
  emit('close');
};
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="props.isOpen"
      class="modal-overlay"
      @click="handleClose"
    >
      <div
        class="modal-panel"
        :style="{
          background: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(40px)',
        }"
        @click.stop
      >
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 300 }"
          class="modal-content-inner"
        >
          <button
            @click="handleClose"
            class="modal-close-button"
            :style="{ background: 'rgba(255, 255, 255, 0.05)' }"
          >
            <i class="fa-solid fa-times" />
          </button>

          <div class="modal-header">
            <img
              v-if="project"
              :src="project.image"
              :alt="project.title"
              class="modal-header-image"
            />
            <div
              class="modal-header-gradient"
              :style="{
                background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.9) 100%)',
              }"
            />
          </div>

          <div class="modal-body" v-if="project">
            <h2 class="modal-title">{{ project.title }}</h2>

            <div class="modal-tags-container">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                v-motion
                class="modal-tag"
                :initial="{ opacity: 0, scale: 0.8 }"
                :enter="{ opacity: 1, scale: 1 }"
                :transition="{ delay: index * 50 }"
                :style="{
                  background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(96, 165, 250, 0.15) 100%)',
                  color: 'var(--accent-purple)',
                }"
              >
                {{ tag }}
              </span>
            </div>

            <div class="modal-details-grid">
              <div>
                <h3 class="modal-section-title">Overview</h3>
                <p class="modal-text modal-text--light">
                  {{ project.description }}
                </p>
              </div>

              <div>
                <h3 class="modal-section-title">Details</h3>
                <p class="modal-text">
                  {{ project.longDescription }}
                </p>
              </div>

              <div>
                <h3 class="modal-section-title">Key Features</h3>
                <ul class="modal-features-list">
                  <li>
                    <span :style="{ color: 'var(--accent-purple)' }">•</span>
                    <span>Responsive design optimized for all devices</span>
                  </li>
                  <li>
                    <span :style="{ color: 'var(--accent-blue)' }">•</span>
                    <span>Modern tech stack with focus on performance</span>
                  </li>
                  <li>
                    <span :style="{ color: 'var(--accent-purple)' }">•</span>
                    <span>Intuitive user interface with seamless navigation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="project.link || project.github" class="modal-links-container">
              <a
                v-if="project.link"
                v-motion
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-link"
                :style="{
                  background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                }"
                :hovered="{ scale: 1.05, borderColor: 'var(--accent-purple)' }"
                :tapped="{ scale: 0.98 }"
              >
                <div
                  class="modal-link-hover-bg"
                  :style="{
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(96, 165, 250, 0.3) 100%)',
                  }"
                />
                <i class="fa-solid fa-external-link modal-link-icon" :style="{ color: 'var(--accent-purple)' }" />
                <span class="modal-link-text">View Live Project</span>
              </a>
              
              <a
                v-if="project.github"
                v-motion
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-link"
                :style="{ background: 'rgba(96, 165, 250, 0.1)' }"
                :hovered="{ scale: 1.05, borderColor: 'var(--accent-blue)' }"
                :tapped="{ scale: 0.98 }"
              >
                <div
                  class="modal-link-hover-bg"
                  :style="{ background: 'rgba(96, 165, 250, 0.2)' }"
                />
                <i class="fa-brands fa-github modal-link-icon" :style="{ color: 'var(--accent-blue)' }" />
                <span class="modal-link-text">View Source Code</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/*
 * 1. Vue Transition Styles
 * These control the fade-in/out of the *entire* modal + overlay.
 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/*
 * 2. Modal Structure Styles
 */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-panel {
  max-width: 95vw;
  width: 1200px;
  max-height: 90vh;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 1rem;
  position: relative; // For v-motion
  
  // This makes the *panel* scrollable, not the overlay
  overflow-y: auto; 

  /* A custom scrollbar (WebKit browsers) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

.modal-content-inner {
  position: relative;
}

/*
 * 3. Modal Content Styles
 * (These are all the styles from the previous file, renamed)
 */
.modal-close-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  padding: 0.75rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  i {
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    font-size: 1.25rem;
    line-height: 1;
  }
}

.modal-header {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.modal-header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-header-gradient {
  position: absolute;
  inset: 0;
}

.modal-body {
  padding: 2.5rem 3rem; // px-12 py-10
}

.modal-title {
  font-size: 3rem; // text-5xl
  color: white;
  margin-bottom: 1rem; // mb-4
}

.modal-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; // gap-2
  margin-bottom: 2rem; // mb-8
}

.modal-tag {
  padding: 0.5rem 1rem; // px-4 py-2
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; // space-y-6
  margin-bottom: 2.5rem; // mb-10
}

.modal-section-title {
  font-size: 1.25rem; // text-xl
  color: white;
  margin-bottom: 0.75rem; // mb-3
}

.modal-text {
  font-size: 1rem; // text-base
  color: #9ca3af; // text-gray-400
  line-height: 1.6; // leading-relaxed

  &--light {
    font-size: 1.125rem; // text-lg
    color: #d1d5db; // text-gray-300
  }
}

.modal-features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem; // space-y-2
  color: #9ca3af;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem; // gap-3
  }

  span:first-child {
    margin-top: 0.25rem; // mt-1
    line-height: 1;
  }
}

.modal-links-container {
  display: flex;
  gap: 1rem; // gap-4
  padding-top: 1.5rem; // pt-6
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem; // px-6 py-3
  border-radius: 0.5rem; // rounded-lg
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    .modal-link-hover-bg {
      opacity: 1;
    }
    .modal-link-icon, .modal-link-text {
      color: white;
    }
  }
}

.modal-link-hover-bg {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-link-icon {
  width: 1.25rem;
  height: 1.25rem;
  font-size: 1.25rem;
  line-height: 1;
  position: relative;
  z-index: 10;
  transition: color 0.3s ease;
}

.modal-link-text {
  color: white;
  position: relative;
  z-index: 10;
  transition: color 0.3s ease;
}
</style>