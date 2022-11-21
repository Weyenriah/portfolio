<template>
  <div class="home">
    <header class="header">
      <TheNavigation />

      <TheDecor />

      <div class="header__content">
        <section class="header__content-inner">
          <h2 class="header__subheading">Hey you!</h2>

          <h1 class="header__main-title">
            Wanna create something
            <span class="purple-text">amazing</span> together?
          </h1>

          <div class="header__btns">
            <a
              class="btn btn--purple"
              href="mailto:felicia@wallin.design?subject=Let us work together!"
              target="_blank"
            >
              Contact me
            </a>

            <a class="btn btn--outline-purple" href="#projects">
              See what I can do!
            </a>
          </div>
        </section>
      </div>
    </header>

    <TheProjectList />

    <AboutMe />
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
import TheDecor from "@/components/TheDecor.vue";
import TheProjectList from "@/components/TheProjectList.vue";
import AboutMe from "@/components/AboutMe.vue";
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

  &__subheading {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 26px;
    color: $light-purple;
    margin: 0 0 0.5rem 0;
  }

  &__main-title {
    font-weight: 400;
    line-height: 48px;
    font-size: 46px;
    margin: 0;

    .purple-text {
      transition: $main-transition;
    }

    &:hover {
      .purple-text {
        color: $light-purple;
      }
    }
  }

  &__btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    margin-top: 30px;
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

  @include laptop-up {
    &__btns {
      flex-direction: row;
      gap: 1rem;
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
