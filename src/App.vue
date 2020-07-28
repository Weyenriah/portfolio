<template>
  <v-app>
    <v-content>
      <TheBackground/>
      <router-view/>
      <TheFooter/>
    </v-content>
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheBackground from './components/TheBackground';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    TheBackground,
    TheFooter,
  },
}
</script>
