<script setup lang="ts"></script>

<template>
  <div class="contact">
    <div>
      <a
        class="contact__action"
        href="mailto:felicia@wallin.design?subject=Låt oss jobba tillsammans!"
        target="_blank"
        aria-label="Email me!"
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>
    </div>

    <a
      class="contact__action"
      href="https://www.linkedin.com/in/felicia-wallin/"
      aria-label="Visit my LinkedIn."
    >
      <font-awesome-icon icon="fa-brands fa-linkedin" />
    </a>

    <a
      class="contact__action"
      href="https://github.com/Weyenriah"
      aria-label="Visit my GitHub."
    >
      <font-awesome-icon icon="fa-brands fa-github" />
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
    color: $white;

    svg {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      svg {
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
