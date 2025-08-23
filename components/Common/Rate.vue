<script setup lang="ts">
const { likes, dislikes } = defineProps<{
  likes: number;
  dislikes: number;
}>();
</script>

<template>
  <div :class="$style.container">
    <div v-if="likes > 0">
      <label :class="$style.numbers">{{ likes }}</label>
      <Icon :class="$style.icon" name="simple-line-icons:like" />
    </div>
    <div v-if="dislikes > 0">
      <label :class="$style.numbers">{{ dislikes }}</label>
      <Icon :class="$style.icon" name="simple-line-icons:dislike" />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
}

.numbers {
  font-size: 1rem;
  font-weight: 400;
}

.icon {
  width: 18px;
  height: 18px;
  margin-left: 6px;
}
</style>
