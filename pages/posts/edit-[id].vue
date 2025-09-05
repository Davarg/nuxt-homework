<script setup lang="ts">
import type { Post } from '~/models/Post';

definePageMeta({
  middleware: "auth",
});

const route = useRoute()
const id = ref(route.params.id)
const config = useRuntimeConfig();

const { data: item } = await useFetch<Post>(
  config.public.apiBase + "/posts/" + id.value
);

useSeoMeta({
  title: `Редактирование ${item.value?.title}`,
  description: `Редактируем очень важную новость ${item.value?.title}`,
  ogDescription: `Редактируем очень важную новость ${item.value?.title}`,
});
</script>

<template>
    <div>
        Edit {{ id }}
    </div>
</template>