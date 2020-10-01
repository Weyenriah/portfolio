<template>
  <v-sheet>
    <v-app-bar
      color="black"
      dark
      flat
      style="border-bottom: 3px solid #d00202"
    >
      <v-toolbar-title class="typography-nav">
        wallin<span class="redify">.</span><span class="boldify">design</span>
      </v-toolbar-title>
    </v-app-bar>
  </v-sheet>
</template>

<script>
export default {
  name: 'TheNavigation',
}
</script>

<style lang="scss" scoped>
  .typography-nav {
    font-family: "Arial", sans-serif;
    font-size: 23px;
  }
</style>
