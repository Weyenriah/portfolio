<template>
  <v-container>
    <h2>projects<span class="greenify">.</span></h2>
    <div class="projects-grid">
      <v-card
        dark
        hover
        tile
        :to="project.to"
        v-for="(project) in projects"
        :key="project.id"
      >
        <v-img
          class="align-end project-image"
          height="100%"
          :src="project.img"
        >
          <div class="project-content-box">
            <v-card-title class="project-title">{{ project.title }}</v-card-title>
            <v-card-subtitle class="project-type">{{ project.subtitle }}</v-card-subtitle>
          </div>
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
      { id: 0, title: 'Örebro Katthem', subtitle: 'webpage', to: '#', img: require('../assets/orebro-katthem.jpg') },
      { id: 1, title: 'The Climate Report', subtitle: 'game', to: '#', img: require('../assets/the-climate-report.jpg') },
      { id: 2, title: 'The Penguin Company', subtitle: 'logotype', to: '#', img: require('../assets/the-penguin-company.jpg') },
      { id: 3, title: 'F-W', subtitle: 'logotype', to: '#', img: require('../assets/fw-logo.jpg') },
    ],
  }),
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: -15px;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
    .project-content-box {
      background-color: rgba(0, 0, 0, 0.5);
      border-left: 7px solid #038407;
      padding-bottom: 10px;
      .project-title {
        padding-top: 10px;
      }
      .project-type {
        width: 33%;
        padding: 0;
        text-align: center;
        background-color: #038407;
        border-radius: 3px;
        margin-left: 15px;
      }
    }
  }
  @media only screen and (max-width: 980px) {
    .projects-grid {
      grid-template-columns: calc(100%/2) calc(100%/2);
    }
  }
  @media only screen and (max-width: 615px) {
    .projects-grid {
      grid-template-columns: 100%;
    }
  }
</style>
