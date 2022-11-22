<script setup lang="ts">
import type { PropType } from "vue";
import type { Project } from "@/types/project";
import { RouterLink } from "vue-router";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
  placement: {
    type: String as PropType<"left" | "right">,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="'/projects/' + project.slug"
    :class="placement"
    :aria-label="'Case: ' + project.title"
  >
    <article class="project" :id="project.slug">
      <img class="project__image" :src="project.img" alt=" " loading="lazy" />

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
.left {
  overflow: hidden;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.right {
  overflow: hidden;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
}

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
    font-size: 10px;
    color: $white;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

    &--designer {
      background-color: $blue;
    }

    &--developer {
      background-color: $purple;
    }

    p {
      margin: 0;
    }

    @include tablet-up {
      font-size: 12px;
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
