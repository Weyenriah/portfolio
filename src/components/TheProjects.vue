<template>
  <v-container id="projects">
    <h2 class="main-h">
      pro<span class="thinify">jects</span>
      <v-icon class="greyify">fa-circle</v-icon>
      <v-icon class="greenify">fa-circle</v-icon>
      <v-icon class="greyify">fa-circle</v-icon>
    </h2>
    <div class="projects-grid">
      <v-card
        dark
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
            <v-card-title class="project-title">
              {{ project.title }}
            </v-card-title>
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
      { id: 0, title: 'Örebro Katthem', subtitle: 'website', to: '#', img: require('../assets/orebro-katthem.jpg') },
      { id: 1, title: 'The Climate Report', subtitle: 'game', to: '#', img: require('../assets/the-climate-report.jpg') },
      { id: 2, title: 'The Penguin Company', subtitle: 'logotype', to: '#', img: require('../assets/the-penguin-company.jpg') },
      { id: 3, title: 'F-W', subtitle: 'logotype', to: '#', img: require('../assets/fw-logo.jpg') },
      { id: 4, title: 'Mobilatrygghetslarm.se', subtitle: 'website', to: '#', img: require('../assets/mobilatrygghetslarm.jpg') },
    ],
  }),
}
</script>

<style lang="scss" scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: calc(33% - 10px) calc(33% - 10px) calc(33% - 10px);
    gap: 15px;
    .project-image {
      border-left: 10px solid #04b309;
      transition: all .5s;
      .project-content-box {
        background-color: rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
        .project-title {
          padding-top: 10px;
        }
        .project-type {
          width: 33%;
          padding: 0;
          text-align: center;
          background-color: #04b309;
          border-radius: 3px;
          margin-left: 15px;
          transition: all .5s;
        }
      }
      &:hover {
        border-left: 10px solid #06d50c;
        .project-type {
          background-color: #06d50c;
        }
      }
    }
  }
  @media only screen and (max-width: 980px) {
    .projects-grid {
      grid-template-columns: calc(50% - 5px) calc(50% - 5px);
      gap: 10px;
    }
  }
  @media only screen and (max-width: 615px) {
    .projects-grid {
      grid-template-columns: 100%;
      column-gap: 0;
    }
  }
</style>
