<template>
  <v-container id="about-me"
   fluid
  >
    <v-container class="d-flex flex-row justify-space-between">
      <v-card flat
              tile
              color="transparent"
              width="100%"
      >
        <h2 class="main-h">
          <span class="thinify">about</span> me
        </h2>
        <p>
          Text about myself
        </p>
      </v-card>
      <v-img class="about-me-pic" max-width="40%" :src="require('../assets/images/picture-felicia-wallin.png')"/>
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
    .container {
      padding: 0 12px;
      .about-me-pic {
        border-left: 15px solid $accent;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    #about-me {
      .container {
        flex-direction: column !important;
        .about-me-pic {
          margin-left: auto;
          margin-right: auto;
          max-width: 100% !important;
        }
      }
    }
  }
</style>
