<template>
  <v-app>
    <v-main>
      <router-view/>
      <ContactActions/>
    </v-main>
  </v-app>
</template>

<script>
import ContactActions from './components/ContactActions.vue'

export default {
  name: 'App',
  components: { ContactActions },
}
</script>

<style lang="scss">
</style>
