<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    cycle
    :interval="8000"
    progress
    progress-color="#d00202"
  >
    <v-carousel-item
      v-for="(project) in p"
      :key="project.id"
      :src="project.img"
      reverse-transition="fade-transition"
      transition="fade-transition"
      color="black"
    >
      <v-sheet
        color="transparent"
        height="100%"
        tile
      >
        <v-row
          class="fill-height carousel-flex"
          align="center"
        >
          <div class="d-flex flex-column carousel-container">
            <div class="d-flex">
              <v-chip
                v-for="tag in project.tags"
                :key="tag"
                class="carousel-type"
              >
                {{ tag }}
              </v-chip>
            </div>
            <h2>
              <span class="thin">{{ project.thinTitle }}</span>{{ project.boldTitle }}
            </h2>
            <p> {{ project.excerpt }} </p>
            <a>Go to project</a>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheShowcase',
  computed: {
    p () {
      return this.projects.filter((p) => p.showcase)
    },
    ...mapState(['projects']),
  },
}
</script>

<style lang="scss" scoped>
  .carousel-flex {
    display: flex;
    justify-content: flex-end;
    .carousel-container {
      border-left: 10px solid #d00202;
      background-color: rgba(0,0,0,0.5);
      padding: 10px 30px 10px 20px;
      width: 50%;
      // transform: skewX(-10deg);
      height: 100%;
      justify-content: center;
      .carousel-type {
        background-color: #d00202;
      }
      h2 {
        .thin {
          font-weight: normal;
        }
      }
      a {
        text-decoration: none;
        color: white;
        transition: all .5s;
        text-align: right;
        &:hover {
          font-weight: bold;
        }
        i {
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 725px) {
    .carousel-flex {
      .carousel-container {
        width: 90%;
      }
    }
  }

  /* To get smoother transition
   * From: https://github.com/vuetifyjs/vuetify/issues/10809
   */
  .v-carousel .v-window-item {
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
