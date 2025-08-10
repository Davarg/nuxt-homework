<script setup lang="ts">
import Side from './side.vue';

</script>

<template>
  <div class="layout-container">
    <Side />
    <slot />
  </div>
</template>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}
</style>
