<script setup>
import { useAuth } from "~/composables/useAuth";

const dataCards = [
  {
    id: 1,
    srcIcon: "/servicesIcon/icon1.svg",
    altIcon: "Онлайн-прием",
    nameService: "Онлайн-прием",
  },
  {
    id: 2,
    srcIcon: "/servicesIcon/icon2.svg",
    altIcon: "Экстренный Случай",
    nameService: "Экстренный Случай",
  },
  {
    id: 3,
    srcIcon: "/servicesIcon/icon3.svg",
    altIcon: "Лечение рака",
    nameService: "Лечение рака",
  },
];

const { isAuth, logout } = useAuth();
const isShowModal = ref(false);

const showModal = () => {
  if (isAuth.value) {
    logout();
  } else {
    isShowModal.value = true;
  }
};
</script>

<template>
  <div class="max-w-[1045px] mx-auto lg:py-20 s:py-10 s:px-3">
    <div class="flex flex-col mb-20">
      <h1
        class="text-textColor lg:text-[3.6rem] s:text-[1.8rem] font-bold font-montserrat tracking-wide"
      >
        Место для получения медицинской помощи
      </h1>
      <div class="flex gap-3 2xl:w-[28%] s:w-[86%] mt-8 sm:w-1/2">
        <BaseBtn
          :textBtn="isAuth ? 'Выйти' : 'Войти'"
          type="button"
          @clickBtn="showModal"
          :isBg="true"
          variant="isSection"
          class="2xl:w-[45%] s:w-[43%]"
        />
        <BaseBtn
          textLink="Контакты"
          to="/contacts"
          :isBg="false"
          variant="isSection"
          class="2xl:w-[55%] s:w-[55%]"
        />
      </div>
    </div>
    <div
      class="flex 2xl:flex-row s:flex-col lg:flex-row justify-around items-center 2xl:gap-6 s:gap-8"
    >
      <BaseCardService v-for="card in dataCards" :key="card.id" :data="card" />
    </div>
    <BaseModal v-model="isShowModal" />
  </div>
</template>