<script setup lang="ts">
import type { PropType } from "vue";
import type { Project } from "@/types/project";
import { RouterLink } from "vue-router";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="'/projects/' + project.slug">
    <article class="project">
      <img class="project__image" :src="project.img" alt="" />

      <div class="project__bullets">
        <div
          v-for="(bullet, j) in project.bullets"
          :key="'bullet' + j"
          class="project__bullet"
          :class="'project__bullet--' + bullet"
        >
          <p>{{ bullet }}</p>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<style lang="scss" scoped>
.project {
  box-shadow: 0 0.125rem 0.625rem rgba(17, 35, 45, 0.25);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &:hover {
    .project {
      &__bullets {
        opacity: 0;
      }

      &__image {
        filter: grayscale(0);
      }
    }
  }

  &__bullets {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    gap: 0.5rem;
    transition: $main-transition;
  }

  &__bullet {
    box-shadow: 0 0.125rem 0.625rem rgba(17, 35, 45, 0.25);
    font-size: 12px;
    color: $white;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

    &--design {
      background-color: $blue;
    }

    &--development {
      background-color: $purple;
    }

    p {
      margin: 0;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: $main-transition;
  }
}
</style>
