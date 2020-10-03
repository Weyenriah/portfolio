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
  #projects, #about-me {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 32px;
    font-weight: bolder;
  }
  .redify {
    color: #d00202 !important;
    font-size: 18px;
    margin-left: 5px;
  }
  .greenify {
    color: #059809 !important;
    font-size: 18px;
    margin-left: 5px;
  }
  .blueify {
    color: #0957bd !important;
    font-size: 18px;
    margin-left: 5px;
  }
  .greyify {
    color: rgba(0,0,0,0.1) !important;
    font-size: 18px;
    margin-left: 5px;
  }
  .whiteify {
    color: rgba(255,255,255,0.2) !important;
    font-size: 18px;
    margin-left: 5px;
  }
  .boldify {
    font-weight: bolder;
  }
  .thinify {
    font-weight: normal;
  }
</style>
