<template>
  <div v-if="project" class="project">
    <header class="header">
      <TheNavigation />

      <TheDecor />

      <section class="header__content">
        <div class="header__content-inner">
          <h1 class="header__main-title">
            {{ project.title }}
          </h1>

          <!-- Bullets -->
          <div class="header__bullets">
            <div
              class="header__bullet"
              v-for="bullet in project.bullets"
              :key="bullet"
              :class="'header__bullet--' + bullet"
            >
              {{ bullet }}
            </div>
          </div>

          <p class="header__description">
            {{ project.description }}
          </p>

          <a
            class="btn btn--outline-purple"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the site live!
          </a>
        </div>
      </section>
    </header>
  </div>
  <div v-else>
    <h2>Project not found</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../data/projects";
import TheDecor from "@/components/TheDecor.vue";
import TheNavigation from "@/components/TheNavigation.vue";

const project = computed(() => {
  const { slug } = useRoute().params;
  return projects.find((project) => project.slug === slug);
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  position: relative;
  @include dark-background;
  height: 95vh;
  max-height: 95vh;
  margin: 0 7px 0 57px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  animation-name: show-header;
  animation-duration: 1s;

  &__content {
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0 1em;

    &-inner {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      color: $white;
      text-align: right;
    }
  }

  &__main-title {
    font-weight: 400;
    line-height: 48px;
    font-size: 46px;
    margin: 0 0 16px 0;

    .purple-text {
      transition: $main-transition;
    }

    &:hover {
      .purple-text {
        color: $light-purple;
      }
    }
  }

  &__bullets {
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

  &__description {
    font-size: 18px;
    line-height: 26px;
  }

  @include tablet-up {
    margin: 0 70px 0 70px;

    &__content {
      margin: 0 3em;

      &-inner {
        width: 50%;
      }
    }
  }

  @keyframes show-header {
    0% {
      opacity: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 95vh;
    }
  }
}
</style>
