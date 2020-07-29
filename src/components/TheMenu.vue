<template>
  <v-sheet
    height="400"
    class="menu-manager"
  >
    <v-container>
      <v-row class="menu-positioning">
        <v-btn
          class="menu-button"
          color="transparent"
          dark
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="menu-drawer"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon class="icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: 'TheMenu',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'fas fa-home' },
        { title: 'Projects', icon: 'fas fa-project-diagram' },
        { title: 'Contact', icon: 'fas fa-envelope' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .menu-manager {
    overflow: hidden;
    .menu-positioning {
      display: flex;
      justify-content: flex-end;
      margin: 20px;
      .menu-button {
        border: 2px solid white !important;
        border-radius: 1px;
        mix-blend-mode: difference;
      }
    }
    .icon {
      margin-left: 6px;
      font-size: 18px;
    }
  }
</style>
