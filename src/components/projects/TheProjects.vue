<template>
  <v-container id="projects">
    <h2 class="main-h">
      pro<span class="thinify">jects</span>
    </h2>
    <v-chip-group
      multiple
      v-model="selectedTags"
    >
      <v-chip
        active-class="chip-active"
        class="availableChips"
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
        @click.native="scrollToTop ()"
        v-for="(project) in p"
        :key="project.id"
      >
        <v-img
          class="align-end project-image"
          height="100%"
          :src="project.img"
        >
          <article class="project-content-box">
            <h3 class="project-title">
              <span class="thinify">{{ project.thinTitle }}</span>
              <span class="boldify">{{ project.boldTitle }}</span>
            </h3>
            <section class="d-flex project-chips">
              <v-chip-group>
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  class="project-type"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </section>
          </article>
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
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
  },
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
    background-color: $accent;
    color: white !important;
  }
  .availableChips {
    height: 24px;
  }
  .filtered-projects-enter, .filtered-projects-leave-to {
    opacity: 0;
  }
  .filtered-projects-enter-to, .filtered-projects-leave {
    opacity: 1;
  }
  .filtered-projects-enter-active, .filtered-projects-leave-active {
    transition: all .12s ease;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: calc(33% - 10px) calc(33% - 10px) calc(33% - 10px);
    gap: 15px;
    .project-image {
      border-left: 0 solid $accent;
      transition: all .5s;
      .project-content-box {
        background-color: rgba(0, 0, 0, 0.5);
        padding-bottom: 10px;
        .project-title {
          font-size: 22px;
          padding: 10px 0 0 15px;
        }
        .project-chips {
          > :first-child {
            margin-left: 15px;
          }
          > :not(:first-child) {
            margin-left: 5px;
          }
          .project-type {
            text-align: center;
            background-color: $accent;
            transition: all .5s;
            height: 24px;
          }
        }
      }
      &:hover {
        border-left: 10px solid $accent;
        transition: all .5s;
        .project-type {
          background-color: $accent;
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
