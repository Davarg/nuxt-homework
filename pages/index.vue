<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { Post } from "~/models/Post";
import { Sort } from "~/models/Sort";

useSeoMeta({
  title: "Свежие новости",
  description: "Страница самых свежих новостей",
  ogDescription: "Страница самых свежих новостей",
});

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const sort = ref<Sort>((route.query.sort || "date") as Sort);
const page = ref<number>(parseInt(route.query.page?.toString() ?? "1"));

const query = computed(() => {
  return {
    page_size: route.query.page_size ?? 2,
    page: route.query.page ?? 1,
    sort: route.query.sort || "date",
  };
});

const { data } = await useFetch<{
  posts: Post[];
  total_pages: number;
}>(config.public.apiBase + "/posts", {
  query,
});

const changeRoute = useDebounceFn((page, sort) => {
  router.replace({
    query: {
      page: page,
      sort: sort,
    },
  });
}, 100);

watch([page, sort], () => {
  changeRoute(page.value, sort.value);
});
</script>

<template>
  <div>
    <div :class="$style.filters_container">
      <div :class="$style.filters">
        <div
          :class="[$style.filter, sort == Sort.date && $style.selected]"
          @click="sort = Sort.date"
        >
          По дате
        </div>
        <div
          :class="[$style.filter, sort == Sort.rating && $style.selected]"
          @click="sort = Sort.rating"
        >
          По рейтингу
        </div>
      </div>
      <div :class="$style.divider" />
    </div>
    <PostList :items="data?.posts" />
    <div :class="$style.pages">
      <div
        v-for="index in data?.total_pages ?? 0"
        :key="index"
        :class="$style.page"
      >
        <div
          :class="[$style.page_index, page == index && $style.selected]"
          @click="page = index"
        >
          {{ index }}
        </div>
        <div v-show="index != data?.total_pages" :class="$style.page_divider" />
      </div>
    </div>
  </div>
</template>

<style module>
.pages {
  margin-top: 38px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
}

.page {
  font-weight: 300;
  color: var(--font-tertiary-color);
  font-size: 1.125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.page_index {
  cursor: pointer;
}

.page_divider {
  background-color: var(--border-color);
  width: 1px;
  height: 100%;
  margin-left: 16px;
}

.filters_container {
  margin-bottom: 38px;
}

.filters {
  display: flex;
  flex-direction: row;
  gap: 42px;
  align-items: center;
}

.filter {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  color: var(--font-tertiary-color);
}

.selected {
  font-weight: 400;
  color: var(--font-color);
}

.divider {
  background-color: var(--border-color);
  height: 1px;
  width: 100%;
  margin-top: 17px;
}
</style>
