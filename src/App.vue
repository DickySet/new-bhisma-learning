<template>
    <div id="app">
        <template v-if="isLoggedIn">
          <MainPage />
        </template>
        <template v-else>
          <RouterView />
        </template>
    </div>
  </template>
  
  <script>
  import MainPage from './views/MainPage/MainPage.vue'
  
  export default {
    components: {
      MainPage
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated
        }
    }
  }
  </script>
  