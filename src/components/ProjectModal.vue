<script setup lang="ts">
import { type Project } from '@/data/newProjects';

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

// Markdown-like to HTML converter
function markdownToHtml(text: string): string {
  if (!text) return '';
  // Convert **bold**
  let html = text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  // Convert *italic*
  html = html.replace(/\*(?!\*)([^*]+)\*/g, '<i>$1</i>');
  // Convert line breaks
  html = html.replace(/\n/g, '<br>');
  return html;
}
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
            <font-awesome-icon icon="xmark" />
          </button>

          <div class="modal-header">
            <img
              v-if="project"
              :src="project.headerImage"
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
              >
                {{ tag }}
              </span>
            </div>

            <div class="modal-details-grid">
              <div>
                <h3 class="modal-section-title">Overview</h3>
                <p class="modal-text modal-text--light" v-html="markdownToHtml(project.description)"></p>
              </div>

              <div>
                <h3 class="modal-section-title">Details</h3>
                <p class="modal-text" v-html="markdownToHtml(project.longDescription)"></p>
              </div>

              <img v-if="project.showcaseImages[0]" :src="project.showcaseImages[0]" :alt="`${project.title} Features Image`" style="width: 100%; border-radius: 0.5rem; margin-top: 1rem;" />

              <div>
                <h3 class="modal-section-title">Challenge</h3>
                <p class="modal-text" v-html="markdownToHtml(project.challengeText)"></p>
              </div>

              <div>
                <h3 class="modal-section-title">Process</h3>
                <p class="modal-text" v-html="markdownToHtml(project.processText)"></p>
              </div>

              <img v-if="project.showcaseImages[1]" :src="project.showcaseImages[1]" :alt="`${project.title} Solutions Image`" style="width: 100%; border-radius: 0.5rem; margin-top: 1rem;" />

              <div>
                <h3 class="modal-section-title">Solution</h3>
                <p class="modal-text" v-html="markdownToHtml(project.solutionText)"></p>
              </div>

              <div class="image-group">
                <img v-if="project.showcaseImages[2]" :src="project.showcaseImages[2]" :alt="`${project.title} Additional Image`" style="width: 100%; border-radius: 0.5rem; margin-top: 1rem;" />
                <img v-if="project.showcaseImages[3]" :src="project.showcaseImages[3]" :alt="`${project.title} Additional Image`" style="width: 100%; border-radius: 0.5rem; margin-top: 1rem;" />
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

.modal-close-button {
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 50;
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
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(96, 165, 250, 0.15) 100%);
  color: var(--accent-purple);
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

.image-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  img {
    flex: 1 1 0;
    max-width: 40%; // For two images, adjust as needed
    width: auto;
  }
}
</style>