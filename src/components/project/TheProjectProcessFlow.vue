<template>
  <section class="mt-4 mb-8 flow-container">
    <div
      v-for="(bubble, i) in project.flow"
      :key="i"
    >
      <article
        class="d-flex mt-2 mb-2"
        :class="{
          left: i % 2 === 0, // Even indexes
          right: i % 2 === 1, // Odd indexes
          last: i === project.flow.length - 1, // Last
        }"
      >
        <v-sheet
          class="process-bubbles pa-2 d-flex align-center justify-center"
          width="50%"
          rounded
        >
          <p class="ma-0">{{ bubble }}</p>
        </v-sheet>
        <v-sheet
          width="15%"
          height="20px"
          class="align-self-end lines"
        >
        </v-sheet>
      </article>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProjectProcessFlow',
  computed: {
    project () {
      return this.projects.find((p) => p.slug === this.$route.params.slug)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .flow-container {
    padding: 0 5%;
    .process-bubbles {
      background-color: $lighter-stone;
      word-break: break-word;
      text-align: center;
    }
    .left {
      flex-direction: row;
      .lines {
        border-top: 1px solid $stone;
        border-right: 1px solid $stone;
        &:after {
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          content: "\f0d7";
          color: $stone;
          margin-left: 6px;
          width: 100%;
          height: 150%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
      }
    }
    .right {
      flex-direction: row-reverse;
      .lines {
        border-top: 1px solid $stone;
        border-left: 1px solid $stone;
        &:after {
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          content: "\f0d7";
          color: $stone;
          margin-left: -6px;
          width: 100%;
          height: 150%;
          display: flex;
          align-items: flex-end;
        }
      }
    }
    .last {
      &right {
        justify-content: flex-end;
      }
      &left {
        align-self: flex-end;
      }
      .lines {
        display: none;
      }
    }
  }
</style>
