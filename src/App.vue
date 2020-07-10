<template>
  <v-app>
    <v-content>
      <router-view/>
      <TheFooter/>
    </v-content>
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    TheFooter,
  },
}
</script>
