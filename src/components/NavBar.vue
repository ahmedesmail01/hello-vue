<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-lg font-bold">MyApp</div>
      <ul class="flex space-x-4">
        <li>
          <RouterLink to="/" class="hover:text-gray-400">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-gray-400">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:text-gray-400"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
