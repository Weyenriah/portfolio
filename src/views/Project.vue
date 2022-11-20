<template>
  <div v-if="project" class="project">
    <h2>{{ project.title }}</h2>
  </div>
  <div v-else>
    <h2>Project not found</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Project',
  props: [],
  computed: {
    ...mapState(['projects']),
    project () {
      return this.projects.find(({ slug }) => slug === this.$route.params.slug)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
