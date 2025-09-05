import type { User } from "~/models/User";

export default defineNuxtRouteMiddleware(() => {
  const data = useCookie<{ token: string, user: User } | undefined>("users");

  if (!data.value?.token) {
    return navigateTo("/login");
  }
});
