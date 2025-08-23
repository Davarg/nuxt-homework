<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
</script>

<template>
  <div :class="$style.button">
    {{ title }}
  </div>
</template>

<style module>
.button {
  background-color: #191919;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 24px;
}

.button:hover {
  background-color: #191919d4;
}
</style>
