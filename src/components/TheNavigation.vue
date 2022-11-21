<script setup lang="ts">
import TheLogo from "@/components/TheLogo.vue";
</script>

<template>
  <nav class="nav">
    <TheLogo size="--small" />

    <section class="nav__link-group">
      <!--<a
        class="nav__link"
        href="#projects"
      >
        The work
      </a>

      <router-link
        class="nav__link"
        to="/"
      >
        The person
      </router-link>-->
    </section>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  z-index: 2;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  &__link-group {
    display: flex;
    gap: 2rem;
  }

  &__link {
    color: $white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    transition: $main-transition;
    letter-spacing: 1px;

    &:hover {
      color: $light-purple;
    }
  }

  @include tablet-up {
    padding: 1rem 2rem;
  }
}
</style>
