<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title">
        {{ error.statusCode }}
      </div>
      <div class="subtitle">
        Страница не найдена, вернитесь на главную страницу
      </div>
      <NuxtLink to="/">
        <CommonButton title="На главную" class="error-button" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: max(16px, 5vw);
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  width: 205px;
  height: 141px;
  font-size: 7.5rem;
  font-weight: 500;
  color: var(--font-color);
}

.subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: var(--font-color);
  text-align: center;
}

.error-button {
  width: 18.8125rem;
  height: 2.5625rem;
  margin-top: 24px;
}
</style>
