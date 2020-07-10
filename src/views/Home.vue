<template>
  <div class="home">
    <TheHeader/>
    <TheProjects/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheProjects from '@/components/TheProjects.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheProjects,
  },
}
</script>

<style lang="scss">
  .red-dot {
    line-height: 0.0;
    font-size: 103px;
    color: #ce0000;
  }
  .red-dot-mini {
    color: #ce0000;
  }
</style>
