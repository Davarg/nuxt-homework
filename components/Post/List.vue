<script setup lang="ts">
import type { Post } from "~/models/Post";

const { items } = defineProps<{
  items: Post[];
}>();
</script>

<template>
  <div>
    <ul :class="$style.list">
      <PostListItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :should-show-divider="index < items.length - 1"
      />
    </ul>
  </div>
</template>

<style module>
.list {
  padding: 0;
  list-style: none;
}

.list li:not(:first-child) {
  margin-top: 26px;
}
</style>
