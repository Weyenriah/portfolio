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
        <h2 class="main-h">
          <span class="thinify">about</span> me<v-icon class="blueify">fa-circle</v-icon>
        </h2>
        <v-card-text>
          Lorem Ipsum
        </v-card-text>
      </v-card>
      <v-img width="400px" :src="require('../assets/picture-felicia-wallin.png')"/>
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
