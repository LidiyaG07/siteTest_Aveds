<script setup>
import { reactive } from "vue";
import { useAuth } from "~/composables/useAuth.js";
const props = defineProps({
  modelValue: Boolean,
});

const emits = defineEmits(["update:modelValue"]);
const isAuth = ref(false);
const error = ref("");
const data = reactive({
  login: "",
  password: "",
});

const { login } = useAuth();

const submitData = async () => {
  error.value = "";
  if (data.password.length < 8) {
    error.value = "Пароль должен быть минимум 8 символов";
    return;
  }

  try {
    await login(data.login, data.password);
    navigateTo("/account");
    closeModalForm();
  } catch (e) {
    error.value = e.message;
  }
};

const closeModalForm = () => {
  emits("update:modelValue", false);
};
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-10 bg-black bg-opacity-50"
  >
    <div class="py-10 px-8 rounded-lg bg-white relative">
      <div class="absolute top-2 right-2">
        <img @click="closeModalForm" src="/icons/close.svg" alt="Закрыть" />
      </div>
      <div
        class="text-textColor 2xl:text-[3.6rem] s:text-[1.8rem] font-bold font-montserrat tracking-wide text-center mb-4"
      >
        {{ isAuth ? "Регистрация" : "Вход" }}
      </div>
      <form @submit.prevent="submitData" class="flex flex-col gap-3">
        <BaseInp type="text" placeholder="Логин" v-model="data.login" />
        <BaseInp type="password" placeholder="Пароль" v-model="data.password" />
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <BaseBtn textBtn="Войти" type="submit" class="mt-4" />
      </form>
    </div>
  </div>
</template>