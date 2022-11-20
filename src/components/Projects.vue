<template>
    <div class="projects" id="projects">
      <section class="projects__inner">
        <article class="project">
          <img
            src="./../../src/assets/images/big/lifeconcern.jpg"
            alt=""
          >

          <div class="project__bullets">
            <div class="project__bullet project__bullet--purple">
              <p>Development</p>
            </div>

            <div class="project__bullet project__bullet--blue">
              <p>Design</p>
            </div>
          </div>
        </article>

        <article class="project">
          <img
            src="./../../src/assets/images/big/lifeconcern.jpg"
            alt=""
          >

          <div class="project__bullets">
            <div class="project__bullet project__bullet--purple">
              <p>Development</p>
            </div>

            <div class="project__bullet project__bullet--blue">
              <p>Design</p>
            </div>
          </div>
        </article>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 16px 0 57px;
  padding: 40px 0;
  z-index: 3;
  position: relative;

  &__inner {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    gap: 20px;
  }

  @include tablet-up {
    margin: 0 70px 40px 70px;

    &__inner {
      width: 90%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 40px;
    }
  }

  article:nth-of-type(odd) {
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  article:nth-of-type(even) {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
}

.project {
  box-shadow: 0 0.125rem 0.625rem rgba(17,35,45,.25);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &__bullets {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    gap: .5rem;
  }

  &__bullet {
    box-shadow: 0 0.125rem 0.625rem rgba(17,35,45,.25);
    font-size: 12px;
    color: $white;
    border-radius: 20px;
    padding: .5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

    &--blue {
      background-color: $blue;
    }

    &--purple {
      background-color: $purple;
    }

    p {
      margin: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:first-of-type {
      filter: grayscale(1);
    }
  }
}
</style>
