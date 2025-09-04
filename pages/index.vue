<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { Post } from "~/models/Post";
import { Sort } from "~/models/Sort";

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const defaultSortString = route.query.sort || "date";
const sort = ref<Sort>(defaultSortString as Sort);
const page = ref<number>(0);

const query = computed(() => {
  return {
    page_size: route.query.page_size ?? 10,
    page: route.query.page ?? 0,
    sort: route.query.sort || "date",
  };
});

const { data } = await useFetch<{
  posts: Post[];
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
  </div>
</template>

<style module>
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
