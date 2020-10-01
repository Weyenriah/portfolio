<template>
  <div class="home">
    <TheShowcase/>
    <TheProjects/>
    <TheAboutMe/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheShowcase from '../components/TheShowcase'
import TheProjects from '../components/TheProjects.vue'
import TheAboutMe from '../components/TheAboutMe'

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
  .redify {
    color: #d00202;
    font-size: 30px;
  }
  .boldify {
    font-weight: bold;
  }
</style>
