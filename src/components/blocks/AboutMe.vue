<template>
  <section class="about-me">
    <div class="about-me__inner">
      <div class="about-me__image">
        <img
          src="./../../../src/assets/images/me-small.webp"
          alt=""
        >
      </div>

      <div class="about-me__content">
        <section>
          <h2>Who Am <span class="purple-text">I</span>?</h2>
          <p>
          </p>
        </section>

        <section>
          <h3>Wanna create something <span class="purple-text">amazing</span> together?</h3>
          <p>I'm currently working at <a href="https://qualitythink.se" target="_blank">Quality Think</a> in Gothenburg, Sweden, but don't let that stop you!</p>
          <a
            class="btn btn--outline-purple"
            href=""
          >
            Contact me!
          </a>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style lang="scss" scoped>
.about-me {
  @include dark-background;
  position: relative;
  overflow: hidden;
  margin: 0 7px 0 57px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  &__decor {
    top: -35px;
    opacity: .3;
  }

  .purple-text {
    transition: $main-transition;
  }

  &__inner {
    width: 90%;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  &__image {
    min-width: 100%;
    height: 300px;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $white;

    h2 {
      font-size: 32px;

      &:hover {
        cursor: default;

        .purple-text {
          color: $light-purple;
        }
      }
    }

    h3 {
      font-size: 24px;
      margin: 30px 0 10px 0;

      &:hover {
        cursor: default;

        .purple-text {
          color: $light-purple;
        }
      }
    }

    a {
      color: $light-purple;
    }

    .btn {
      margin-top: 20px;
    }
  }

  @include tablet-up {
    margin: 0 70px 0 70px;

    &__inner {
      width: 76%;
      flex-direction: row;
    }

    &__image {
      min-width: 300px;
      height: 400px;
    }

    &__content {
      padding: 30px 0;
    }
  }
}
</style>
