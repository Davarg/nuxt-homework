<script setup lang="ts">
import type { Post } from "~/models/Post";

const config = useRuntimeConfig();

const { data } = await useFetch<{
  posts: Post[];
}>(config.public.apiBase + "/posts")
</script>

<template>
  <PostList :items="data?.posts" />
</template>

<style scoped>
</style>
