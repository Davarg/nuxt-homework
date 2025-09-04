import { defineStore } from "pinia";
import { RatingAction } from "~/models/Rating";
import type { Rating } from "~/models/Rating";

export const useRatingsStore = defineStore(
  "ratings",
  () => {
    const items = ref<Rating[]>([]);
    const config = useRuntimeConfig();

    async function like(id: number): Promise<boolean> {
      const item = items.value.find((item) => item.id == id);
      if (item?.action === RatingAction.liked) {
        return false;
      }

      await $fetch(`${config.public.apiBase}/posts/${id}/like`, {
        method: "POST",
      });

      const newItem = {
        id: id,
        action: RatingAction.liked,
      };
      if (!item) {
        items.value.push(newItem);
      } else {
        const index = items.value.findIndex((item) => item.id == id);
        items.value.splice(index, 1, newItem);
      }

      return true;
    }

    async function dislike(id: number): Promise<boolean> {
      const item = items.value.find((item) => item.id == id);
      if (item?.action === RatingAction.disliked) {
        return false;
      }

      await $fetch(`${config.public.apiBase}/posts/${id}/dislike`, {
        method: "POST",
      });

      const newItem = {
        id: id,
        action: RatingAction.disliked,
      };
      if (!item) {
        items.value.push(newItem);
      } else {
        const index = items.value.findIndex((item) => item.id == id);
        items.value.splice(index, 1, newItem);
      }

      return true;
    }

    function actionFor(id: number): RatingAction | undefined {
      const item = items.value.find((item) => item.id == id);
      if (item) {
        return item.action;
      }

      return undefined;
    }

    return { items, like, dislike, actionFor };
  },
  {
    persist: true,
  }
);
