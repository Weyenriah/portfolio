<template>
  <v-container>
    <v-sheet>
      <p>{{ project.title }}</p>
    </v-sheet>
   <!-- Image (computer)
    Title
     Tags
     Text
     Key parts in text -->
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProject',
  computed: {
    project () {
      return this.projects.find((p) => p.id === Number(this.$route.params.id))
    },
    ...mapState(['projects']),
  },
}
</script>

<style scoped>

</style>
