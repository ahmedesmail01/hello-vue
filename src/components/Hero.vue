<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Your one-stop solution for all your needs.",
  },
});
</script>

<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
      <p class="text-lg mb-6">{{ description }}</p>
      <a
        href="#"
        class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
        >Get Started</a
      >
    </div>
  </section>
</template>
