<template>
  <div class="home">
    <header class="header">
      <TheNavigation/>

      <TheDecor/>

      <div class="header__content">
        <section class="header__content-inner">
          <h2>
            Hey you!
          </h2>

          <h1>
            Wanna create something <span class="purple-text">amazing</span> together?
          </h1>

          <div class="header__btns">
            <a
              class="btn btn--purple"
              href="/"
            >
              Contact me!
            </a>

            <a
              class="btn btn--outline-purple"
              href="#projects"
            >
              See what I can do!
            </a>
          </div>
        </section>
      </div>
    </header>

    <Projects/>

    <article>
      <img src="" alt="">

      <section>
        <h2></h2>
        <p></p>
      </section>
    </article>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue'
import TheDecor from '../components/TheDecor.vue'
import Projects from '../components/Projects.vue'

export default {
  name: 'Home',
  components: { TheNavigation, TheDecor, Projects },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  position: relative;
  @include dark-background;
  height: 95vh;
  max-height: 95vh;
  margin: 0 16px 0 57px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;

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

      h2 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 26px;
        color: $light-purple;
        margin-bottom: .5rem;
      }

      h1 {
        font-weight: 400;
        line-height: 48px;
        font-size: 46px;

        .purple-text {
          transition: $main-transition;
        }

        &:hover {
          cursor: default;

          .purple-text {
            color: $light-purple;
          }
        }
      }

      .btn {
        margin-top: 2rem;
      }
    }
  }

  &__btns {
    display: flex;
    gap: 1rem;
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
}

.btn {
  display: block;
  width: fit-content;
  border-radius: 30px;
  padding: .5rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;

  &--outline {
    &-purple {
      border: 3px solid $light-purple;
      color: $light-purple;
      transition: $main-transition;

      &:hover {
        background-color: $light-purple;
        color: $dark-background;
      }
    }
  }

  &--purple {
    background-color: $light-purple;
    border: 3px solid $light-purple;
    color: $dark-background;
  }
}
</style>
