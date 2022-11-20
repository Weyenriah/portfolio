<script setup lang="ts"></script>

<template>
  <div class="contact">
    <div>
      <a class="contact__action" href="#" aria-label="Email me!">
        <v-icon>{{ "fas fa-envelope" }}</v-icon>
      </a>
    </div>

    <a class="contact__action" href="#" aria-label="Visit my LinkedIn.">
      <v-icon>{{ "fab fa-linkedin" }}</v-icon>
    </a>

    <a class="contact__action" href="#" aria-label="Visit my GitHub.">
      <v-icon>{{ "fab fa-github" }}</v-icon>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  position: fixed;
  top: 0.5rem;
  left: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__action {
    @include main-background;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border-radius: 100%;
    text-decoration: none;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.25);

    i {
      color: $white;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      i {
        transform: scale(1.6);
      }
    }
  }

  @include tablet-up {
    left: auto;
    top: auto;
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
