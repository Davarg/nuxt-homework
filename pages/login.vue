<script setup lang="ts">
useSeoMeta({
  title: "Добро пожаловать",
  description: "Страница входа",
  ogDescription: "Страница входа",
});

const usersStore = useUsersStore();
const login = ref<string>();
const password = ref<string>();

async function onLogin() {
  if (login.value && password.value) {
    if (await usersStore.login(login.value, password.value)) {
      navigateTo("/");
    }
  }
}
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.container">
      <div :class="$style.title">Вход на платформу</div>
      <form :class="$style.inputs">
        <div :class="$style.input_container">
          <Icon name="simple-line-icons:envolope" size="1.5rem" />
          <input v-model="login" :class="$style.input" placeholder="Email" />
        </div>
        <div :class="$style.input_container">
          <Icon name="simple-line-icons:key" size="1.5rem" />
          <input
            v-model="password"
            :class="$style.input"
            placeholder="Пароль"
            type="password"
          />
        </div>
      </form>
      <CommonButton
        :class="$style.button"
        title="Войти в аккаунт"
        @click="onLogin"
      />
    </div>
  </div>
</template>

<style module>
.main {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;
  justify-content: center;
  width: 301px;
}

.title {
  font-size: 1rem;
  font-weight: 500;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.input_container {
  width: 100%;
  border-radius: 20px;
  height: 2.5625rem;
  border: 1px solid var(--border-color);
  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input {
  width: 100%;
  height: 100%;
  border: none;
  margin-left: 9px;
  font-size: 1rem;
  font-weight: 400;
  background-color: none;
}

.input:focus,
.input:focus-visible,
.input:focus-within {
    outline: none;
    border: none;
    box-shadow: none;
}

.button {
  width: 100%;
  height: 2.5625rem;
}
</style>
