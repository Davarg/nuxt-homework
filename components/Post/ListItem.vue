<script setup lang="ts">
import type { Post } from "~/models/Post";

const { item, shouldShowDivider } = defineProps<{
  item: Post;
  shouldShowDivider: boolean;
}>();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.item">
      <div :class="$style.header">
        <Icon :class="$style.icon" name="custom:logo" />
        <label :class="$style.author">{{ item.author }}</label>
        <NuxtTime
          :class="$style.date"
          :datetime="item.date"
          locale="ru-RU"
          relative
        />
      </div>
      <div :class="$style.body">
        <div :class="$style.title">{{ item.title }}</div>
        <div :class="$style.text">{{ item.body }}</div>
      </div>
      <div :class="$style.footer">
        <CommonRate :likes="item.likes" :dislikes="item.dislikes" />
      </div>
    </div>
    <div v-if="shouldShowDivider" :class="$style.divider" />
  </li>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 692px;
}

.date {
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 17px;
  color: var(--font-tertiary-color);
}

.author {
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 8px;
  color: var(--font-color);
}

.icon {
  border-radius: 50%;
  background-color: rgba(241, 186, 103, 0.587);
  height: 1.5rem;
  width: 1.5rem;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.body {
  display: flex;
  flex-direction: column;
}

.body .title {
  font-size: 1.375rem;
  color: var(--font-color);
  font-weight: 400;
}

.body .text {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--font-color);
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.footer {
  display: flex;
  flex-direction: row;
  margin-top: 9px;
}

.divider {
  background-color: var(--border-color);
  height: 1px;
  width: 100%;
}
</style>
