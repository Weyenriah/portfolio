<script setup lang="ts"></script>

<template>
  <section class="about-me">
    <div class="about-me__inner">
      <div class="about-me__image">
        <img src="@/assets/images/me-small.webp" alt="" />
      </div>

      <div class="about-me__content">
        <section>
          <h2>Who Am <span class="purple-text">I</span>?</h2>

          <p>
            My profession entails
            <span class="purple-text">everything</span> between making your
            website look good, make it work like a charm and do all of that
            before the deadline. I <span class="purple-text">thrive</span>
            on the bridge between design and development.
            <br />
            <br />
            Oh, and Hello! My name is <span class="purple-text">Felicia</span>.
          </p>
        </section>

        <section>
          <h3>
            Wanna create something
            <span class="purple-text">amazing</span> together?
          </h3>

          <p>
            I'm currently working at
            <a href="https://qualitythink.se" target="_blank">Quality Think</a>
            in Gothenburg, Sweden, but don't let that stop you!
          </p>

          <a
            class="btn btn--outline-purple"
            href="mailto:felicia@wallin.design?subject=Let us work together!"
            target="_blank"
          >
            Contact me!
          </a>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  @include dark-background;
  position: relative;
  overflow: hidden;
  margin: 0 7px 0 57px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  .purple-text {
    transition: $main-transition;
  }

  &__inner {
    width: 85%;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  &__image {
    min-width: 50%;
    height: 300px;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin: 0 auto;

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
      margin: 0 0 10px 0;
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

    p {
      margin: 0;

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
  }

  @include laptop-up {
    &__inner {
      width: 76%;
      flex-direction: row;
      padding: 100px 0;
      gap: 60px;
    }

    &__image {
      min-width: 300px;
      height: 450px;
    }

    &__content {
      padding: 30px 0;
    }
  }
}
</style>
