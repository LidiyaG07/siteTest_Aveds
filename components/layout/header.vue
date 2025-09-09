<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const { isAuth, logout } = useAuth();

const isShowModal = ref(false);

const modalShow = () => {
  if (isAuth.value) {
    logout();
    return navigateTo("/");
  } else {
    isShowModal.value = true;
    return navigateTo("/");
  }
};
</script>

<template>
  <div class="py-5 border-b border-black s:px-3 overflow-x-hidden">
    <div class="max-w-[81rem] mx-auto flex justify-between items-center">
      <nuxt-link to="/">
        <img src="/logo/logo.svg" alt="Логотип" />
      </nuxt-link>
      <div
        class="2xl:w-1/4 s:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 flex 2xl:gap-12 justify-between items-center"
      >
        <nuxt-link to="/contacts" class="p-3 text-sm text-secondTextColor"
          >Контакты</nuxt-link
        >
        <BaseBtn
          :textBtn="isAuth ? 'Выйти' : 'Войти'"
          @clickBtn="modalShow"
          variant="isHeader"
          class="w-[58%]"
        />
      </div>
    </div>
    <BaseModal v-model="isShowModal" />
  </div>
</template>