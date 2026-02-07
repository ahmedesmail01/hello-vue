<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>this is post view with id : {{ route.params.id }}</template>
