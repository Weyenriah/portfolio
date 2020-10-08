<template>
  <div class="home">
    <TheShowcase/>
    <TheProjects/>
    <v-divider/>
    <TheAboutMe/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheShowcase from '../components/showcase/TheShowcase'
import TheProjects from '../components/projects/TheProjects.vue'
import TheAboutMe from '../components/about-me/TheAboutMe'

export default {
  name: 'Home',
  components: {
    TheShowcase,
    TheProjects,
    TheAboutMe,
  },
}
</script>

<style lang="scss">

</style>
