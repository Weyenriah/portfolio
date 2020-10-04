<template>
  <v-container class="project-inner-container">
    <v-sheet class="text-based-content">
      <section class="d-flex align-center project-title">
        <h2>
          <span class="thinify">{{ project.thinTitle }}</span> {{ project.boldTitle }}
        </h2>
        <div
          v-for="i in 3"
          :key="i"
        >
          <v-icon class="greenify big-dots">fa-circle</v-icon>
        </div>
      </section>
      <section class="d-flex project-chips">
        <v-chip
          v-for="tag in project.tags"
          :key="tag"
          class="project-chip"
        >
          {{ tag }}
        </v-chip>
      </section>
      <section class="mt-4">
        <div class="d-flex mb-2">
          <p class="greenify mb-0 mr-9"><b>My role/s</b></p>
          <span class="d-flex flex-wrap">
            <span
              v-for="(roles, i) in project.roles"
              :key="i"
              class="d-flex"
            >
              <p
                v-if="i !== 0"
                class="mr-3 mb-0 greenify"
              >
                <b>|</b>
              </p>
              <p class="mb-0 mr-3">{{ roles }}</p>
            </span>
          </span>
        </div>
        <v-divider/>
        <div class="d-flex mt-2 mb-4">
          <p class="greenify mr-9 mb-0"><b>Techniques</b></p>
          <span class="d-flex flex-wrap">
            <span
              v-for="(tech, i) in project.techniques"
              :key="i"
              class="d-flex"
            >
              <p
                v-if="i !== 0"
                class="mr-3 mb-0 greenify"
              >
                <b>|</b>
              </p>
              <p class="mb-0 mr-3">{{ tech }}</p>
            </span>
          </span>
        </div>
      </section>
      <section>
        {{ project.excerpt }}
      </section>
      <section class="mt-2">
        <a
          v-if="project.link != ''"
          :href="project.link"
          target="_blank"
        >
          <v-icon class="greenify small-dots">fa-circle</v-icon>
          <span
            v-for="i in 2"
            :key="i"
          >
            <v-icon class="greyify small-dots">fa-circle</v-icon>
          </span>
          See the project live!
        </a>
      </section>
    </v-sheet>
    <v-img
      :src="require('../assets/images/computer.jpg')"
      class="project-img"
      v-if="project.focus === 'web'"
    >
      <v-img
        :src="project.compImg"
        class="nested-img"
        width="75.7%"
      >
      </v-img>
    </v-img>
  </v-container>
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
  .project-inner-container {
    display: grid;
    grid-template-columns: 50% 50%;
    .project-img {
      .nested-img {
        border-radius: 7px;
        position: relative;
        left: 12%;
        top: 10.5%;
      }
    }
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
  }
  @media only screen and (max-width: 885px) {
    .project-inner-container {
      display: grid;
      grid-template-columns: 100%;

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
