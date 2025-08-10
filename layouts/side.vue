<script setup lang="ts"></script>

<template>
  <div class="side-container">
    <NuxtLink to="/">
      <Icon class="icon" name="custom:home" size="1.5rem" />
    </NuxtLink>
    <NuxtLink to="/">
      <Icon class="icon" name="custom:exit" size="1.5rem" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.side-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    border-right: 1px solid var(--border-color);
}

.side-container .icon {
  color: var(--font-color);
  margin-top: var(--margin-base);
  margin-bottom: var(--margin-base);
}

.side-container .icon:hover {
  color: var(--font-color-hover);
}
</style>
