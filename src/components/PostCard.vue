<script setup>
import { RouterLink } from "vue-router";
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Your one-stop solution for all your needs.",
  },
  userName: {
    type: String,
    default: "Bonnie Green",
  },
  userEmail: {
    type: String,
    default: "Developer at Open AI",
  },
  postId: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <RouterLink
    :to="'/posts/' + postId"
    class="flex flex-col items-center justify-center p-8 text-center border-b border-default rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e"
  >
    <blockquote class="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
      <h3 class="text-lg font-semibold text-heading">{{ title }}</h3>
      <p class="my-4">{{ description }}</p>
    </blockquote>
    <figcaption class="flex items-center justify-center">
      <img
        class="rounded-full w-9 h-9"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
        alt="profile picture"
      />
      <div class="space-y-0.5 text-left rtl:text-right ms-2">
        <div class="leading-tight text-base text-heading font-medium mb-0.5">
          {{ userName }}
        </div>
        <div class="text-sm text-body">{{ userEmail }}</div>
      </div>
    </figcaption>
  </RouterLink>
</template>
