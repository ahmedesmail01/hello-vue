<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <main class="min-h-screen w-full">
    <RouterView />
  </main>

  <Footer />
</template>
