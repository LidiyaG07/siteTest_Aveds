<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="w-full p-10 flex flex-col gap-5 shadow-xl">
    <div class="w-16 p-5 rounded-full bg-accentColor">
      <img :src="data.srcIcon" :alt="data.altIcon" />
    </div>
    <div class="text-base font-bold">{{ data.nameService }}</div>
    <div class="w-1/5 border-b border-accentColor"></div>
    <p class="text-secondTextColor text-sm">Рыба текст</p>
  </div>
</template>