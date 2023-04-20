<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import Nav from './components/includes/Nav.vue'
  import Footer from './components/includes/Footer.vue'
</script>

<template>
  <Nav />
  <main class="container grow pb-10" id="main">
    <router-view />
  </main>
  <Footer />
</template>


<style>

</style>
