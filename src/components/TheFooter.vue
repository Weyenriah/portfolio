<template>
  <v-footer
    absolute
    padless
  >
    <v-card class="d-flex justify-center align-center"
      color="#0957bd"
      width="100%"
      dark
      tile
    >
      <div class="footer-buttons d-flex justify-space-between">
        <v-btn
          v-for="button in buttons"
          :key="button.name"
          icon
          :href="button.href"
          target="_blank"
        >
          <v-icon>{{ button.icon }}</v-icon>
        </v-btn>
      </div>
    </v-card>
    <v-card class="text-center"
      color="black"
      width="100%"
      flat
      dark
      tile
    >
      <v-card-text class="footer-information">
        <v-icon small style="margin-top: -4px;"> far fa-copyright</v-icon> {{ new Date().getFullYear() }} <strong>Felicia Wallin</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    buttons: [
      { icon: 'fas fa-envelope', href: 'mailto:felicia@wallin.design', name: 'email' },
      { icon: 'fab fa-github', href: 'https://github.com/Weyenriah', name: 'github' },
      { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/felicia-wallin/', name: 'linkedin' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
  .footer-buttons {
    width: 30%;
  }
</style>
