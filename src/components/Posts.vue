<script setup>
import { useQuery } from "@tanstack/vue-query";
import PostCard from "./PostCard.vue";

import viewMoreBtn from "./viewMoreBtn.vue";
import ViewMoreBtn from "./viewMoreBtn.vue";
import { ref, watch } from "vue";

const props = defineProps({
  limit: { type: Number, default: 3 },
  step: { type: Number, default: 3 },
});

const shownLimit = ref(props.limit);

watch(
  () => props.limit,
  (v) => (shownLimit.value = v)
);

const viewMore = () => {
  shownLimit.value += props.step;
};

const {
  data: posts,
  isLoading: loadingPosts,
  isError: isErrorPosts,
  error: errorPosts,
} = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});

const {
  data: users,
  isLoading: loadingUsers,
  isError: isErrorUsers,
  error: errorUsers,
} = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});
</script>
<template>
  <div
    class="grid mb-8 bg-neutral-primary-soft border border-default rounded-base shadow-xs md:mb-12 md:grid-cols-2"
  >
    <div v-if="loadingPosts">loadingPost..</div>
    <div v-if="loadingUsers">loadinguser...</div>
    <div v-if="posts" v-for="post in posts.slice(0, shownLimit)" :key="post.id">
      <PostCard
        :postId="post.id"
        :title="post.title"
        :description="post.body"
        :userName="
          users.find((user) => user.id === post.userId)?.name || 'Unknown User'
        "
        :userEmail="
          users.find((user) => user.id === post.userId)?.email ||
          'Unknown Email'
        "
      />
    </div>
  </div>
  <ViewMoreBtn v-if="posts && shownLimit < posts.length" @click="viewMore" />
</template>
