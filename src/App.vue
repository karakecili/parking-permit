<template>
  <div id="app">
    <home-layout>
      <router-view />
    </home-layout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";

export default {

  components: {
    "home-layout": MainLayout
  }
}
</script>
