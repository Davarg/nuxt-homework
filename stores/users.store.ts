import { defineStore } from "pinia";
import type { User } from "~/models/User";

export const useUsersStore = defineStore(
  "users",
  () => {
    const token = ref<string | undefined>();
    const user = ref<User | undefined>();
    const config = useRuntimeConfig();

    async function login(login: string, password: string): Promise<string> {
      const data = await $fetch<{
        token: string;
        user: User;
      }>(config.public.apiBase + "/auth/login", {
        method: "POST",
        body: {
          email: login,
          password: password,
        },
      });
      token.value = data.token;
      user.value = data.user;

      return data.token;
    }

    function logout() {
      token.value = undefined;
      user.value = undefined;
    }

    return { token, user, login, logout };
  },
  {
    persist: true,
  }
);
