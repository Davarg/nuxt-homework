<template>
  <NuxtLayout>
    <NuxtPage :class="$style.main_container" />
  </NuxtLayout>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style module>
.main_container {
  margin-top: var(--margin-base);
  margin-bottom: var(--margin-base);
  margin-left: 9.4vw;
}
</style>
