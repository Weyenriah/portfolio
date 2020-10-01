<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
    cycle
    :interval="5000"
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
          <div class="d-flex flex-column">
            <p class="mb-0">{{ item.type }}</p>
            <h2>{{ item.title }}</h2>
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
          title: 'Örebro Katthem',
          type: 'website',
          shortDesc: 'Text',
          link: '#',
          diffAlignment: 'grid-align-right',
        },
        {
          src: require('../assets/the-penguin-company.jpg'),
          title: 'The Penguin Company',
          type: 'logotype',
          shortDesc: 'Text',
          link: '#',
          diffAlignment: 'grid-align-right',
        },
        {
          src: require('../assets/the-climate-report.jpg'), // Needs another image
          title: 'The Climate Report',
          type: 'game',
          shortDesc: 'Text',
          link: '#',
          // Defaults left alignment
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
