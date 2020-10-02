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
        v-for="(project, i) in p"
        :key="i"
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
            <div class="d-flex">
              <v-card-subtitle
                v-for="tag in project.tags"
                :key="tag"
                class="project-type"
              >
                {{ tag }}
              </v-card-subtitle>
            </div>
          </div>
        </v-img>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProjects',
  data: () => ({
    selectedTags: [],
  }),
  computed: {
    p () {
      return this.projects.filter((o) => {
        if (this.selectedTags.length === 0) {
          return true
        }
        return this.selectedTags.some((selectTag) => {
          return o.tags.some((tag) => {
            return tag === selectTag
          })
        })
      })
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: calc(33% - 10px) calc(33% - 10px) calc(33% - 10px);
    gap: 15px;
    .project-image {
      border-left: 10px solid #059809;
      transition: all .5s;
      .project-content-box {
        background-color: rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
        .project-title {
          padding: 10px 0 0 15px;
        }
        .project-type {
          width: 33%;
          padding: 0;
          text-align: center;
          background-color: #059809;
          border-radius: 3px;
          margin-left: 15px;
          transition: all .5s;
        }
      }
      &:hover {
        border-left: 10px solid #05b10a;
        .project-type {
          background-color: #05b10a;
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
