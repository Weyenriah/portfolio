<template>
  <section class="d-flex project-chips">
    <v-chip
      v-for="tag in project.tags"
      :key="tag"
      class="project-chip mt-1"
    >
      {{ tag }}
    </v-chip>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheTagGroups',
  computed: {
    project () {
      return this.projects.find((p) => p.slug === this.$route.params.slug)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .project-chips {
    > :not(:first-child) {
      margin-left: 5px;
    }
    .project-chip {
      color: white;
      background-color: $accent;
      height: 24px;
    }
  }
</style>
