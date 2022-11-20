<template>
    <div class="projects" id="projects">
      <section class="projects__inner">
          <Project
            v-for="(project, i) in projects"
            :key="i"
            :project="project"
          />
      </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Project from './Project.vue'

export default {
  name: 'Projects',
  components: { Project },
  computed: {
    ...mapState(['projects']),
  },
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
</style>
