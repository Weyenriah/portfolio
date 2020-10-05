<template>
  <div class="d-flex mb-2 roles">
    <p class="mb-0 mr-9"><b>My role/s</b></p>
    <div class="d-flex flex-wrap">
      <span
        v-for="(roles, i) in project.roles"
        :key="i"
        class="d-flex"
      >
        <p
          v-if="i !== 0"
          class="mr-3 mb-0"
        >
          <b>|</b>
        </p>
        <p class="mb-0 mr-3">{{ roles }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProjectRoles',
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
    .roles {
      flex-direction: column;
    }
  }
</style>
