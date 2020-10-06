<template>
  <v-container id="about-me"
   fluid
  >
    <v-container class="d-flex flex-row justify-space-between">
      <v-card flat
              tile
              color="transparent"
              width="100%"
              class="pr-10 content-container"
      >
        <h2 class="main-h">
          <span class="thinify">about</span> me
        </h2>
        <p>
          Designing through the users perspective and code it, that's what I'm all about. To keep it short,
           I have dedicated a huge part of my life to make the gap between UX and frontend smaller, wherever I go. I want
           user testing and the users perspective to be a natural part of the process, as well as good written code.
           I strive to show this through how I work and the result of the work.
        </p>
        <v-divider class="mb-4"/>
        <v-sheet class="d-flex flex-wrap">
          <p class="boldify mr-9 mb-0">Skills</p>
          <div
            v-for="(tech, i) in availableTech"
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
          </div>
        </v-sheet>
      </v-card>
      <v-img class="about-me-pic" max-width="40%" :src="require('../assets/images/picture-felicia-wallin.png')"/>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheAboutMe',
  computed: {
    availableTech () {
      const s = new Set()

      this.projects.forEach((project) => {
        project.techniques.forEach((tech) => {
          s.add(tech)
        })
      })
      return s
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  #about-me {
    background-color: white;
    .container {
      padding: 0 12px;
      .about-me-pic {
        border-left: 15px solid $accent;
      }
    }
  }
  @media only screen and (max-width: 850px) {
    #about-me {
      .container {
        flex-direction: column !important;
        .about-me-pic {
          margin-top: 20px;
          margin-left: auto;
          margin-right: auto;
          max-width: 50% !important;
        }
      }
    }
  }
  @media only screen and (max-width: 550px) {
    #about-me {
      .container {
        .content-container {
          padding-right: 0 !important;
        }
        .about-me-pic {
          max-width: 90% !important;
        }
      }
    }
  }
</style>
