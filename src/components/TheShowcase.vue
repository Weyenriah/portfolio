<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    cycle
    :interval="8000"
    progress
    progress-color="#0edcdc"
  >
    <v-carousel-item
      v-for="(project) in p"
      :key="project.id"
      :src="project.img"
      reverse-transition="fade-transition"
      transition="fade-transition"
      color="black"
      eager
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
            <section class="carousel-content">
              <div class="d-flex carousel-types">
                <v-chip-group>
                  <v-chip
                    v-for="tag in project.tags"
                    :key="tag"
                    class="carousel-type"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
              <h2>
                <span class="thinify">{{ project.thinTitle }}</span>{{ project.boldTitle }}
              </h2>
              <p> {{ project.excerpt }} </p>
              <router-link :to="'project/' + project.slug">
                Go to project
                <v-icon>fa-chevron-right</v-icon>
              </router-link>
            </section>
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
      background-color: rgba(0,0,0,0.5);
      padding: 0 40px;
      width: 50%;
      transition: width .5s;
      height: 100%;
      justify-content: center;
      .carousel-content {
        display: flex;
        flex-direction: column;
        width: 90%;
        .carousel-types {
          > :not(:first-child) {
            margin-left: 5px;
          }
          .carousel-type {
            background-color: $accent;
            height: 24px;
          }
        }
        a {
          text-align: right;
          text-decoration: none;
          color: white;
          transition: all .5s;
          &:hover {
            i {
              margin-left: 12px;
            }
          }
          i {
            font-size: 15px;
            margin-left: 7px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 725px) {
    .carousel-flex {
      .carousel-container {
        width: 100%;
        padding: 0 30px;
      }
    }
  }
</style>
