<script setup>
import { useAuth } from "@/composables/useAuth";

const { user, isAuth, logout } = useAuth();

const handleLogout = () => {
  logout();
  return navigateTo("/");
};
</script>

<template>
  <div
    class="max-w-[1045px] mx-auto 2xl:py-20 s:py-10 s:px-3 flex flex-col gap-9 items-start justify-center"
  >
    <h2 class="text-6xl s:text-[1.8rem] font-bold">Привет, {{ user?.name }}</h2>
    <div
      class="2xl:w-[45%] s:w-full sm:w-1/2 h-12 flex sm:flex-row s:flex-col gap-3"
    >
      <BaseBtn
        @clickBtn="handleLogout"
        type="button"
        :isBg="true"
        variant="isSection"
        textBtn="Выйти из аккаунта"
      />
      <BaseBtn
        to="/contacts"
        variant="isSection"
        textLink="Перейти в контакты"
      />
    </div>
  </div>
</template>
