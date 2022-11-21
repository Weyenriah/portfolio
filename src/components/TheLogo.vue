<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "--small",
  },
});
</script>

<template>
  <div class="logo" :class="'logo' + size">
    <div class="logo__left"></div>
    <div class="logo__middle"></div>
    <div class="logo__right"></div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  gap: 2px;

  &--small {
    transform: scale(1.2);

    .logo {
      &__left,
      &__right {
        height: 30px;
        width: 16px;
      }

      &__middle {
        width: 14px;
        height: 16px;
      }
    }
  }

  &__left,
  &__right {
    background-color: white;
  }

  &__left {
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  &__right {
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  &__middle {
    background-color: white;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    align-self: flex-end;
    transform-style: preserve-3d;
    transition: $main-transition;
  }

  &:hover {
    .logo {
      &__middle {
        transform: rotateY(-180deg);
        background-color: $light-purple;
        animation-name: jump;
        animation-timing-function: cubic-bezier(0s, 500s, 1s, 500s);
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
  }

  @keyframes jump {
    50% {
      transform: rotateY(90deg) translateY(-10px);
      background-color: $light-purple;
    }
  }
}
</style>
