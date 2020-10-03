<template>
  <v-container id="projects">
    <h2 class="main-h">
      pro<span class="thinify">jects</span>
      <v-icon class="big-dots greyify">fa-circle</v-icon>
      <v-icon class="big-dots greenify">fa-circle</v-icon>
      <v-icon class="big-dots greyify">fa-circle</v-icon>
    </h2>
    <v-chip-group
      multiple
      v-model="selectedTags"
    >
      <v-chip
        active-class="chip-active"
        :value="tag"
        v-for="tag in availableTags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <transition-group
      name="filtered-projects"
      tag="div"
      class="projects-grid"
    >
      <v-card
        dark
        tile
        :to="'project/' + project.slug"
        v-for="(project) in p"
        :key="project.id"
      >
        <v-img
          class="align-end project-image"
          height="100%"
          :src="project.img"
        >
          <div class="project-content-box">
            <h3 class="project-title">
              <span class="thinify">{{ project.thinTitle }}</span>
              <span class="boldify">{{ project.boldTitle }}</span>
            </h3>
            <div class="d-flex">
              <v-chip
                v-for="tag in project.tags"
                :key="tag"
                class="project-type"
              >
                {{ tag }}
              </v-chip>
            </div>
          </div>
        </v-img>
      </v-card>
    </transition-group>
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
    availableTags () {
      const s = new Set()

      this.projects.forEach((project) => {
        project.tags.forEach((tag) => {
          s.add(tag)
        })
      })
      return s
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .chip-active {
    background-color: #059809;
    color: white !important;
  }
  .filtered-projects-enter, .filtered-projects-leave-to {
    height: 3px;
    opacity: 0;
  }
  .filtered-projects-enter-to, .filtered-projects-leave {
    height: 100%;
    opacity: 1;
  }
  .filtered-projects-enter-active, .filtered-projects-leave-active {
    transition: all 0.19s ease;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: calc(33% - 10px) calc(33% - 10px) calc(33% - 10px);
    gap: 15px;
    .project-image {
      border-left: 10px solid $greenify;
      transition: all .5s;
      .project-content-box {
        background-color: rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
        .project-title {
          font-size: 22px;
          padding: 10px 0 0 15px;
        }
        .project-type {
          text-align: center;
          background-color: $greenify;
          margin-left: 15px;
          transition: all .5s;
        }
      }
      &:hover {
        border-left: 10px solid $hoverGreenify;
        .project-type {
          background-color: $hoverGreenify;
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
