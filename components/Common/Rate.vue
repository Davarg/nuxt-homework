<script setup lang="ts">
import { RatingAction } from '~/models/Rating';

const {
  likes,
  dislikes,
  ratingAction = null,
} = defineProps<{
  likes: number;
  dislikes: number;
  ratingAction?: RatingAction;
}>();

const emit = defineEmits<{
  (e: "ratingAction", action: RatingAction): void;
}>();
</script>

<template>
  <div :class="$style.container">
    <div
      :class="$style.icon_container"
      @click.stop.prevent="emit('ratingAction', RatingAction.liked)"
    >
      <div :class="$style.numbers">{{ likes }}</div>
      <Icon
        :class="[
          $style.icon,
          ratingAction != null &&
            ratingAction == RatingAction.liked &&
            $style.selected_like,
        ]"
        name="simple-line-icons:like"
      />
    </div>
    <div
      :class="$style.icon_container"
      @click.stop.prevent="emit('ratingAction', RatingAction.disliked)"
    >
      <div :class="$style.numbers">{{ dislikes }}</div>
      <Icon
        :class="[
          $style.icon,
          ratingAction != null &&
            ratingAction == RatingAction.disliked &&
            $style.selected_dislike,
        ]"
        name="simple-line-icons:dislike"
      />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
}

.numbers {
  font-size: 1rem;
  font-weight: 400;
}

.icon {
  width: 18px;
  height: 18px;
  margin-left: 6px;
}

.icon_container {
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.selected_like {
  color: greenyellow;
}

.selected_dislike {
  color: red;
}
</style>
