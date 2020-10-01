<template>
  <v-container id="about-me"
   fluid
  >
    <v-container class="d-flex flex-row">
      <v-card width="50%"
              flat
              tile
              color="transparent"
      >
        <v-card-text>
          <h2>about me<span class="blueify">.</span></h2>
          Lorem Ipsum
        </v-card-text>
      </v-card>
      <v-img width="50%" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"/>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'TheAboutMe',
}
</script>

<style lang="scss" scoped>
  #about-me {
    background-color: white;
  }
</style>
