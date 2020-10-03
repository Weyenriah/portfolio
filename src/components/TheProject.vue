<template>
  <div class="project-outer-container">
    <v-img
      :src="project.img"
      height="200px"
      class="header-img"
    ></v-img>
    <v-container>
      <v-sheet class="project-inner-container">
        <div class="text-based-content">
          <div class="d-flex align-center project-title">
            <h2>
              <span class="thinify">{{ project.thinTitle }}</span> {{ project.boldTitle }}
            </h2>
            <div>
              <v-icon class="greenify big-dots">fa-circle</v-icon>
              <v-icon class="greyify big-dots">fa-circle</v-icon>
              <v-icon class="greyify big-dots">fa-circle</v-icon>
            </div>
          </div>
          <div class="d-flex project-chips">
            <v-chip
              v-for="tag in project.tags"
              :key="tag"
              class="project-chip"
            >
              {{ tag }}
            </v-chip>
          </div>
          <div class="mt-2">
            <p>
              <span class="boldify">{{ project.excerpt }}</span> {{ project.longerDesc }}
              <q class="quote">{{ project.quote }}</q>
            </p>
          </div>
        </div>
        <v-img
          :src="project.compImg"
          class="project-img"
        >
          <v-img
            :src="project.img"
            class="nested-img"
            width="74%"
          >
          </v-img>
        </v-img>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheProject',
  computed: {
    project () {
      return this.projects.find((p) => p.slug === this.$route.params.slug)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .project-outer-container {
    padding: 0;
    .header-img {
      border-bottom: 4px solid $redify;
    }
    .project-inner-container {
      display: grid;
      grid-template-columns: 50% 50%;
      .text-based-content {
        grid-column: 1;
        .project-chips {
          > :not(:first-child) {
            margin-left: 5px;
          }
          .project-chip {
            color: white;
            background-color: $greenify;
          }
        }
        .quote {
          font-size: 20px;
          float: right;
          font-weight: bold;
          color: $greenify;
        }
      }
      .project-img {
        grid-column: 2;
        grid-row: 1 / span 5;
        .nested-img {
          position: relative;
          left: 12.8%;
          top: 11%;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .project-outer-container {
      .project-inner-container {
        display: grid;
        grid-template-columns: 100%;
      }
      .project-img {
        grid-column: 1 !important;
        grid-row: auto !important;
      }
    }
  }
</style>
