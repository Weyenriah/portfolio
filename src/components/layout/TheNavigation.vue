<template>
  <v-sheet>
    <v-app-bar
      color="black"
      dark
      flat
    >
      <v-toolbar-title
        class="typography-nav"
        @click="$router.push('/')"
      >
        wallin.<span class="boldify">design</span>
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
    font-size: 23px;
    cursor: pointer;
    span {
      color: $accent;
    }
  }
</style>
