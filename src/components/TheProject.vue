<template>
  <div>
    <v-img
      :src="project.img"
      height="100px"
      class="header-img"
    />
    <v-container
      class="project-inner-container"
    >
      <v-sheet class="text-based-content">
        <section class="d-flex align-center project-title">
          <h2>
            <span class="thinify">{{ project.thinTitle }}</span> {{ project.boldTitle }}
          </h2>
        </section>
        <section class="d-flex project-chips">
          <v-chip
            v-for="tag in project.tags"
            :key="tag"
            class="project-chip mt-1"
          >
            {{ tag }}
          </v-chip>
        </section>
        <section class="mt-4">
          <div class="d-flex mb-2 roles">
            <p class="mb-0 mr-9"><b>My role/s</b></p>
            <div class="d-flex flex-wrap">
              <span
                v-for="(roles, i) in project.roles"
                :key="i"
                class="d-flex"
              >
                <p
                  v-if="i !== 0"
                  class="mr-3 mb-0"
                >
                  <b>|</b>
                </p>
                <p class="mb-0 mr-3">{{ roles }}</p>
              </span>
            </div>
          </div>
          <v-divider/>
          <div class="d-flex mt-2 mb-4 techniques">
            <p class="mr-9 mb-2"><b>Techniques</b></p>
            <div class="d-flex flex-wrap">
              <span
                v-for="(tech, i) in project.techniques"
                :key="i"
                class="d-flex"
                >
                <p
                  v-if="i !== 0"
                  class="mr-3 mb-0"
                >
                  <b>|</b>
                </p>
                <p class="mb-0 mr-3">{{ tech }}</p>
              </span>
            </div>
          </div>
        </section>
        <section>
          {{ project.excerpt }}
        </section>
        <section class="mt-4 go-to-project">
          <v-btn
            v-if="project.link != ''"
            depressed
            small
            :href="project.link"
            target="_blank"
          >
            See the project live!
          </v-btn>
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
  .header-img {
    border-bottom: 4px solid $accent;
    .go-back-container {
      background-color: rgba(0,0,0,0.5);
      width: 40%;
      height: 100%;
      padding: 10px 30px;
      transform: skewX(-10deg) translateX(-30px);
      transition: width .5s;
      .go-back {
        display: block;
        width: fit-content;
        color: white;
        text-decoration: none;
      }
    }
    @media only screen and (max-width: 560px) {
      .go-back-container {
        width: 90%;
      }
    }
  }
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
          background-color: $accent;
          height: 24px;
        }
      }
      .go-to-project {
        text-align: right;
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    .project-inner-container {
      display: grid;
      grid-template-columns: 100%;
      .techniques, .roles {
        flex-direction: column;
      }
      .project-img {
        grid-column: 1 !important;
        grid-row: auto !important;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .go-to-project {
      width: 100%;
      a {
        width: 100%;
      }
    }
    .project-title {
      flex-direction: column-reverse;
      align-items: flex-start !important;
    }
  }
</style>
