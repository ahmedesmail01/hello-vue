<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import HomeCards from "./components/HomeCards.vue";
import Posts from "./components/Posts.vue";
import { ref } from "vue";

const limit = ref(3);
</script>

<template>
  <NavBar />
  <main class="min-h-screen w-full">
    <Hero title="Hello world this is my first props in vue" />
    <HomeCards />
    <Posts :limit="limit" />
  </main>

  <Footer />
</template>
