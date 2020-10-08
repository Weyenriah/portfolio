<template>
  <div>
    <TheProjectImage/>
    <v-container class="project-inner-container">
      <v-sheet class="text-based-content">
        <section class="d-flex align-center project-title">
          <h2>
            <span class="thinify">{{ project.thinTitle }}</span> {{ project.boldTitle }}
          </h2>
        </section>
        <TheProjectTagGroups/>
        <section class="mt-4">
          <TheProjectRoles/>
          <v-divider/>
          <TheProjectTechniques/>
        </section>
        <section>
          {{ project.excerpt }}
        </section>
        <section class="mt-4 go-to-project">
          <v-btn
            v-if="project.link !== ''"
            depressed
            small
            :href="project.link.url"
            target="_blank"
          >
            {{ project.link.title }}
          </v-btn>
        </section>
        <TheProjectProcessFlow/>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheProjectRoles from './TheProjectRoles'
import TheProjectTechniques from './TheProjectTechniques'
import TheProjectTagGroups from './TheProjectTagGroups'
import TheProjectImage from './TheProjectImage'
import TheProjectProcessFlow from './TheProjectProcessFlow'

export default {
  name: 'TheProject',
  components: {
    TheProjectProcessFlow,
    TheProjectImage,
    TheProjectTagGroups,
    TheProjectTechniques,
    TheProjectRoles,
  },
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
    grid-template-columns: 100%;
    .text-based-content {
      grid-column: 1;
      .go-to-project {
        text-align: right;
        a {
          background-color: $dark-accent !important;
          color: white;
          transition: all .5s;
          &:hover {
            background-color: $accent !important;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    .project-inner-container {
      display: grid;
      grid-template-columns: 100%;
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
