<template>
  <div class="project-outer-container">
    <v-img
      :src="project.img"
      height="200px"
      class="header-img"
    >
      <router-link class="go-back" to="/">
        <v-icon class="redify small-dots">fa-circle</v-icon>
        <v-icon class="whiteify small-dots">fa-circle</v-icon>
        <v-icon class="whiteify small-dots">fa-circle</v-icon>
        Go back
      </router-link>
    </v-img>
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
              <q class="quote">{{ project.quote }}</q>
              <span class="boldify">{{ project.excerpt }}</span> {{ project.longerDesc }}

            </p>
            <a
              v-if="project.link != ''"
              :href="project.link"
              target="_blank"
            >
              <v-icon class="greenify small-dots">fa-circle</v-icon>
              <v-icon class="greyify small-dots">fa-circle</v-icon>
              <v-icon class="greyify small-dots">fa-circle</v-icon>
              See the project live!
            </a>
          </div>
        </div>
        <v-img
          :src="require('../assets/images/computer.jpg')"
          class="project-img"
        >
          <v-img
            :src="project.compImg"
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
      .go-back {
        display: block;
        margin: 15px;
        color: white;
        text-decoration: none;
        width: fit-content;
        &:hover {
          .whiteify {
            color: $redify !important;
          }
        }
      }
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
          width: 40%;
          font-size: 23px;
          float: right;
          text-align: right;
          font-weight: bold;
          color: $greenify;
        }
        a {
          width: 100%;
          text-decoration: none;
          color: black;
          transition: all .5s;
          &:hover {
            // font-weight: bold;
            .greyify {
              color: $greenify !important;
            }
          }
          i {
            font-size: 18px;
          }
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
  @media only screen and (max-width: 450px) {
    .project-title {
      flex-direction: column-reverse;
      align-items: flex-start !important;
    }
    .quote {
      width: 100% !important;
    }
  }
</style>
