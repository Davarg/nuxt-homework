<script setup lang="ts">
import type { Post } from "~/models/Post";
import { RatingAction } from "~/models/Rating";

const route = useRoute();
const id = ref(route.params.id);

const config = useRuntimeConfig();

const { data: item } = await useFetch<Post>(
  config.public.apiBase + "/posts/" + id.value
);

useSeoMeta({
  title: `${item.value?.title}`,
  description: `Очень важная новость ${item.value?.title}`,
  ogDescription: `Очень важная новость ${item.value?.title}`,
});

const ratingsStore = useRatingsStore();
const ratingAction = ref<RatingAction | undefined>(
  ratingsStore.actionFor(item.value?.id ?? -1)
);

const likes = ref<number>(item.value?.likes ?? 0);
const dislikes = ref<number>(item.value?.dislikes ?? 0);

async function onRatingAction(action: RatingAction) {
  if (item.value) {
    switch (action) {
      case RatingAction.liked:
        if (await ratingsStore.like(item.value.id)) {
          ratingAction.value = RatingAction.liked;
          likes.value += 1;
        }
        break;

      case RatingAction.disliked:
        if (await ratingsStore.dislike(item.value.id)) {
          ratingAction.value = RatingAction.disliked;
          dislikes.value += 1;
        }
        break;
    }
  }
}
</script>

<template>
  <div v-if="item" :class="$style.container">
    <div :class="$style.item">
      <div :class="$style.header">
        <Icon :class="$style.icon" name="custom:logo" />
        <label :class="$style.author">Огурчик</label>
        <NuxtTime
          :class="$style.date"
          :datetime="item.published_at"
          locale="ru-RU"
          relative
        />
      </div>
      <div :class="$style.body">
        <div :class="$style.title">{{ item.title }}</div>
        <div :class="$style.text">{{ item.content }}</div>
      </div>
      <div :class="$style.footer">
        <CommonRate
          :likes="likes"
          :dislikes="dislikes"
          :rating-action="ratingAction"
          @rating-action="onRatingAction"
        />
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 692px;
  margin-top: 26px;
}

.date {
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 17px;
  color: var(--font-tertiary-color);
}

.author {
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 8px;
  color: var(--font-color);
}

.icon {
  border-radius: 50%;
  background-color: rgba(241, 186, 103, 0.587);
  height: 1.5rem;
  width: 1.5rem;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.body {
  display: flex;
  flex-direction: column;
}

.body .title {
  font-size: 1.375rem;
  color: var(--font-color);
  font-weight: 400;
}

.body .text {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--font-color);
  font-weight: 300;
}

.footer {
  display: flex;
  flex-direction: row;
  margin-top: 9px;
}
</style>
