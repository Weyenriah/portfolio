<template>
  <v-sheet>
    <v-app-bar
      color="blue"
      dark
      flat
    >
      <!-- Spec. because some other <div> made it impossible to seperate title + icon -->
      <v-card class="d-flex justify-space-between align-center"
        width="100%"
        color="blue"
        flat
      >
        <v-toolbar-title>wallin.design - web, design, ux</v-toolbar-title>

        <v-app-bar-nav-icon @click="drawer = true"><v-icon>fas fa-bars</v-icon></v-app-bar-nav-icon>
      </v-card>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
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
  name: 'TheNavigation',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Showcase' },
        { title: 'Projects' },
        { title: 'About me' },
        { title: 'Contact' },
      ],
    }
  },
}
</script>
