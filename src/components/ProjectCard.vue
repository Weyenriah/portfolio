
<script setup lang="ts">
    interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    }
    const props = defineProps<ProjectCardProps>();

    const emit = defineEmits<{
    (e: 'click'): void
    }>();
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :viewport-once="true"
    :transition="{ duration: 500 }"
    :hovered="{ y: -8 }"
    class="project-card"
    @click="emit('click')"
  >
    <div class="project-card__content-wrapper">
      <div class="project-card__image-container">
        <div
          v-motion
          class="project-card__image-scaler"
          :hovered="{ scale: 1.05 }"
          :transition="{ duration: 400 }"
        >
          <img
            :src="props.image"
            :alt="props.title"
            class="project-card__image"
          />
        </div>
        <div class="project-card__image-gradient" />

        <div class="project-card__hover-icon-wrapper">
          <div class="project-card__hover-icon-bg">
            <i class="fa-solid fa-arrow-up-right project-card__hover-icon" />
          </div>
        </div>
      </div>

      <div class="project-card__text-content">
        <h3 class="project-card__title">
          {{ props.title }}
        </h3>
        <p class="project-card__description">{{ props.description }}</p>

        <div class="project-card__tags-container">
          <span
            v-for="(tag, index) in props.tags"
            :key="index"
            class="project-card__tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  cursor: pointer;
  position: relative;

  &:hover {
    .project-card__glow-bg {
      opacity: 0.6;
    }
    .project-card__hover-icon-wrapper {
      opacity: 1;
    }
  }
}

.project-card__glow-bg {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  opacity: 0.4;
  transition: opacity 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1rem;

  }
}

.project-card__content-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
}

.project-card__image-container {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project-card__image-scaler {
  position: absolute;
  inset: 0;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
}

.project-card__hover-icon-wrapper {
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card__hover-icon-bg {
  padding: 0.5rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card__hover-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--accent-purple);
  display: block;
}

.project-card__text-content {
  padding: 1.5rem;
}

.project-card__title {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: white;
}

.project-card__description {
  color: #9ca3af;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
    line-clamp: 2;
  overflow: hidden;
}

.project-card__tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-card__tag {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--accent-purple);
}
</style>