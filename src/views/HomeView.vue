<script setup>
import Hero from "../components/Hero.vue";
import HomeCards from "../components/HomeCards.vue";
import Posts from "../components/Posts.vue";
import { ref } from "vue";

const limit = ref(3);
</script>
<template>
  <Hero title="Hello world this is my first props in vue" />
  <HomeCards />
  <Posts :limit="limit" />
</template>
