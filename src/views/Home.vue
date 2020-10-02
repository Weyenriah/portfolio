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
  h2 {
    font-size: 32px;
  }
  .main-h {
    margin-top: -15px;
  }
  .redify {
    color: #d00202;
    font-size: 50px;
  }
  .greenify {
    color: #04b309;
    font-size: 50px;
  }
  .blueify {
    color: #0255d0;
    font-size: 50px;
  }
  .boldify {
    font-weight: bold;
  }
  .thinify {
    font-weight: normal;
  }
</style>
