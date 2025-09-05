<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

useSeoMeta({
  title: "Пошло говно по трубам",
  description: "Страница создания новости очень важной",
  ogDescription: "Страница создания новости очень важной",
});
</script>

<template>
    <div>
        Create
    </div>
</template>