<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  textBtn: String,
  textLink: String,
  to: String,
  type: String,
  variant: {
    type: String,
    default: "isHeader",
  },
  isBg: {
    type: Boolean,
    default: false,
  },
});

const variants = {
  isHeader: "2xl:p-2 s:py-1 s:px-5 border-2 rounded-lg text-xl",
  isSection: "p-4 border rounded-md",
};

const style =
  "border-primary w-full text-sm cursor-pointer text-center hover:shadow-lg";

const emits = defineEmits(["clickBtn"]);

const showModal = () => {
  console.log(1);
  emits("clickBtn");
};
</script>

<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :class="[
      isBg ? 'bg-primary text-white' : 'bg-white text-primary',
      style,
      variants[variant],
    ]"
  >
    {{ textLink }}
  </nuxt-link>

  <button
    v-else
    @click="showModal"
    :type="type"
    :class="[
      isBg ? 'bg-primary text-white' : 'bg-white text-primary',
      style,
      variants[variant],
    ]"
  >
    {{ textBtn }}
  </button>
</template>