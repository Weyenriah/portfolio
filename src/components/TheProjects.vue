<template>
  <v-container>
    <h2>Projects</h2>
    <div class="d-flex flex-wrap justify-space-between">
      <v-card class="mb-6"
        width="350"
        dark
        hover
        :to="project.to"
        v-for="(project) in projects"
        :key="project.id"
      >
        <v-img
          class="align-end"
          :src="project.img"
        >
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        </v-img>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TheProjects',
  data: () => ({
    projects: [
      { id: 0, title: 'Rubrik1', subtitle: 'Undertitel1', to: '#', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
      { id: 1, title: 'Rubrik2', subtitle: 'Undertitel2', to: '#', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
      { id: 2, title: 'Rubrik3', subtitle: 'Undertitel3', to: '#', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
      { id: 3, title: 'Rubrik4', subtitle: 'Undertitel4', to: '#', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
      { id: 4, title: 'Rubrik5', subtitle: 'Undertitel5', to: '#', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
