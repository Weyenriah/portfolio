<template>
  <footer>
    <div class="footer-box">
      <v-card-text class="footer-information">
        {{ new Date().getFullYear() }} <strong>Felicia Wallin</strong>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    icons: [
      'fab fa-linkedin',
    ],
  }),
}
</script>

<style lang="scss" scoped>
  .footer-box {
    width: 100%;
    box-shadow: none;
    background-color: #79fcf3;
    text-align: center;
    .footer-information {
      color: #326c6a;
    }
  }
</style>
