<template>
  <div class="decor">
    <div class="decor__left"></div>
    <div class="decor__right"></div>
    <div class="decor__right"></div>
    <div class="decor__left"></div>
  </div>
</template>

<script>
export default {
  name: 'TheDecor',
}
</script>

<style lang="scss" scoped>
.decor {
  position: absolute;
  left: -15rem;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .2rem;
  transition: $main-transition--slow;

  div {
    &:nth-of-type(2) {
      margin-top: 2rem;
    }

    &:nth-of-type(3) {
      margin-top: -2rem;
    }
  }

  &__left, &__right {
    @include main-background;
    width: 200px;
    height: 370px;
  }

  &__left {
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  &__right {
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  @include mobile-up {
    left: -10rem;
  }

  @include tablet-up {
    left: -3rem;
  }
}
</style>
