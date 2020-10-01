<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
    cycle
    :interval="8000"
    progress
    progress-color="#d00202"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      color="black"
    >
      <v-sheet
        class="carousel-grid"
        color="transparent"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          :class="item.diffAlignment"
          align="center"
          justify="center"
        >
          <div class="d-flex flex-column carousel-content">
            <p class="mb-0 carousel-type">{{ item.type }}</p>
            <h2><span class="thin">{{ item.thinTitle }}</span>{{ item.boldTitle }}</h2>
            <p>{{ item.shortDesc }}</p>
            <a :href="item.link">Go to project <v-icon>fa-angle-double-right</v-icon></a>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'TheShowcase',
  data () {
    return {
      items: [
        {
          src: require('../assets/orebro-katthem.jpg'),
          thinTitle: 'Örebro',
          boldTitle: ' Katthem',
          type: 'website',
          shortDesc: 'A responsive webpage with admin UI designed to match the workflow of the volunteers.',
          link: '#',
          diffAlignment: 'grid-align-right',
        },
        {
          src: require('../assets/the-climate-report.jpg'),
          thinTitle: 'The',
          boldTitle: ' Climate Report',
          type: 'game',
          shortDesc: 'A game with the goal of highlighting different choices connected to climate change, in a fun and easy way.',
          link: '#',
          // Default Alignment: Left
        },
        {
          src: require('../assets/the-penguin-company.jpg'),
          thinTitle: 'The',
          boldTitle: ' Penguin Company',
          type: 'logotype',
          shortDesc: 'A logotype designed for a mock-company that sells only penguin costumes.',
          link: '#',
          diffAlignment: 'grid-align-right',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .carousel-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    .carousel-content {
      border-left: 7px solid #d00202;
      background-color: rgba(0,0,0,0.5);
      padding: 10px 20px;
      max-width: 86%;
      .carousel-type {
        background-color: #d00202;
        text-align: center;
        border-radius: 3px;
        font-weight: bold;
        width: 50%;
      }
      h2 {
        .thin {
          font-weight: normal;
        }
      }
      a {
        text-decoration: none;
        color: white;
        text-align: right;
        transition: all .5s;
        &:hover {
          font-weight: bold;
        }
        i {
          font-size: 18px;
        }
      }
    }
    .grid-align-right { /* Left is default */
      grid-column: 2;
    }
  }
  @media only screen and (max-width: 560px) {
    .carousel-grid {
      grid-template-columns: 100%;
      .grid-align-right { /* Left is default */
        grid-column: 1;
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
