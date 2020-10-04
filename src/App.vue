<template>
  <v-app>
    <v-main>
      <TheNavigation/>
      <router-view/>
      <TheFooter/>
    </v-main>
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheNavigation from './components/TheNavigation'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    TheFooter,
    TheNavigation,
  },
}
</script>

<style lang="scss">
  h1, h2, h3, p, .typography-nav {
    font-family: "Verdana", sans-serif;
  }
  #projects, #about-me {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
