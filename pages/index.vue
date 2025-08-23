<script setup lang="ts">
import { createDefaultPost } from "~/models/Post";
import type { Post } from "~/models/Post";

const items: Post[] = [
  createDefaultPost(),
  createDefaultPost(),
  createDefaultPost(),
];
</script>

<template>
  <div class="main-container">
    <PostList :items="items" />
  </div>
</template>

<style scoped>
.main-container {
  margin-top: var(--margin-base);
  margin-bottom: var(--margin-base);
  margin-left: 9.4vw;
}
</style>
