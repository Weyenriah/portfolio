<template>
  <div class="d-flex mt-2 mb-4 techniques">
    <p class="mr-9 mb-2"><b>Techniques</b></p>
    <div class="d-flex flex-wrap">
      <span
        v-for="(tech, i) in project.techniques"
        :key="i"
        class="d-flex"
      >
        <p
          v-if="i !== 0"
          class="mr-3 mb-0"
        >
          <b>|</b>
        </p>
        <p class="mb-0 mr-3">{{ tech }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProjectTechniques',
  computed: {
    project () {
      return this.projects.find((p) => p.slug === this.$route.params.slug)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 1050px) {
    .techniques {
      flex-direction: column;
    }
  }
</style>
