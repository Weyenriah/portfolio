<template>
  <section class="mt-4 mb-8 flow-container">
    <div
      v-for="(bubble, i) in project.flow"
      :key="i"
    >
      <article
        class="d-flex flex-row-reverse mt-2 mb-2"
        v-if="i % 2 === 1 && i < project.flow.length - 1"
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
          class="align-self-end lines-left"
        >
        </v-sheet>
      </article>
      <article
        class="d-flex mt-2 mb-2"
        v-else-if="i % 2 === 0 && i < project.flow.length - 1"
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
          class="align-self-end lines-right"
        >
        </v-sheet>
      </article>
      <article
        class="d-flex flex-row mt-2 mb-2"
        v-else-if="i === project.flow.length - 1"
      >
        <v-sheet
          class="process-bubbles pa-2 d-flex align-center justify-center"
          width="50%"
          rounded
        >
          <p class="ma-0">{{ bubble }}</p>
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
    .lines-left {
      border-top: 1px solid $stone;
      border-left: 1px solid $stone;
    }
    .lines-right {
      border-top: 1px solid $stone;
      border-right: 1px solid $stone;
    }
  }
</style>
