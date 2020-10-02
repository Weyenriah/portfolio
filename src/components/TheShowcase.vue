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
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
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
          :class="item.diffAlignment"
          align="center"
        >
          <div class="d-flex flex-column carousel-container">
            <p class="mb-0 carousel-type">{{ item.type }}</p>
            <h2>
              <span class="thin">{{ item.thinTitle }}</span>{{ item.boldTitle }}
            </h2>
            <p>{{ item.shortDesc }}</p>
            <a :href="item.link">Go to project</a>
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
          diffAlignment: 'grid-align-right',
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
