<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Realisations from './components/Realisations.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <!-- HEADER -->
    <Header />
    <!-- CONTENU DES PAGES -->
    <RouterView />
    <!-- FOOTER -->
    <Footer />
  
</template>

<style scoped>


</style>
