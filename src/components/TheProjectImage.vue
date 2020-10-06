<template>
  <v-img
    :src="require('../assets/images/computer.jpg')"
    class="project-img mt-4"
    v-if="project.focus === 'web'"
    max-width="60%"
    eager
  >
    <v-img
      :src="project.compImg"
      class="nested-img"
      width="75.7%"
      eager
    >
    </v-img>
  </v-img>
  <v-img
    :src="project.compImg"
    class="project-img mt-4 not-web"
    v-else
    max-width="40%"
    eager
  >
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
    margin-left: auto;
    margin-right: auto;
    .nested-img {
      border-radius: 7px;
      position: relative;
      left: 12%;
      top: 10.5%;
    }
  }
  @media only screen and (max-width: 1050px) {
    .project-img {
      max-width: 90% !important;
      grid-column: 1 !important;
      grid-row: auto !important;
    }
    .not-web {
      max-width: 70% !important;
    }
  }
  @media only screen and (max-width: 500px) {
    .not-web {
      max-width: 90% !important;
    }
  }
</style>
