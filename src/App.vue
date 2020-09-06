<template>
  <v-app>
    <v-content>
      <TheNavigation/>
      <router-view/>
      <TheFooter/>
    </v-content>
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
