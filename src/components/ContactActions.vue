<template>
  <div class="contact">
    <div>
      <a
        class="contact__action"
        href="#"
        aria-label="Email me!"
      >
        <v-icon>{{ 'fas fa-envelope' }}</v-icon>
      </a>
    </div>

    <a
      class="contact__action"
      href="#"
      aria-label="Visit my LinkedIn."
    >
      <v-icon>{{ 'fab fa-linkedin' }}</v-icon>
    </a>

    <a
      class="contact__action"
      href="#"
      aria-label="Visit my GitHub."
    >
      <v-icon>{{ 'fab fa-github' }}</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactActions',
}
</script>

<style lang="scss" scoped>
.contact {
  position: fixed;
  bottom: 1rem;
  left: .5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__action {
    @include main-background;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    text-decoration: none;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.25);

    i {
      color: $white;
      font-size: 1rem;
      transition: all .3s ease-in-out;
    }

    &:hover {
      i {
        transform: scale(1.6);
      }
    }
  }

  @include tablet-up {
    left: auto;
    right: 1rem;
  }
}
</style>
