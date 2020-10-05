<template>
  <v-img
    :src="require('../assets/images/computer.jpg')"
    class="project-img"
    v-if="project.focus === 'web'"
  >
    <v-img
      :src="project.compImg"
      class="nested-img"
      width="75.7%"
    >
    </v-img>
  </v-img>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProjectImage',
  computed: {
    project () {
      return this.projects.find((p) => p.slug === this.$route.params.slug)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .project-img {
    .nested-img {
      border-radius: 7px;
      position: relative;
      left: 12%;
      top: 10.5%;
    }
  }
  @media only screen and (max-width: 1050px) {
    .project-img {
      grid-column: 1 !important;
      grid-row: auto !important;
    }
  }
</style>
