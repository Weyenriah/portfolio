<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  /* src/main.scss */

  /* Define your CSS variables (from the original files) */
  :root {
    --accent-purple: #a78bfa; // (This is a guess, adjust as needed)
    --accent-blue: #60a5fa;   // (This is a guess, adjust as needed)
  }

  body {
    background-color: #0a0a0a;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0;
  }

  /* You can add other global styles here */
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
</style>
