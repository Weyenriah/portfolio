<template>
  <v-footer
    padless
    absolute
    height="40"
    color="white"
  >
    <v-card class="d-flex justify-center align-center over-footer mt-8"
      width="100%"
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
    <v-card class="text-center lower-footer"
      width="100%"
      flat
      tile
    >
      <v-card-text class="footer-information">
        <v-icon small style="margin-top: -4px;"> far fa-copyright</v-icon>
        {{ new Date().getFullYear() }}
        <strong>Felicia Wallin</strong>
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
  .over-footer {
    background-color: $light-stone !important;
    .footer-buttons {
      width: 30%;
    }
  }
  .lower-footer {
    background-color: $stone !important;
  }
</style>
