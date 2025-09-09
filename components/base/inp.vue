<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
const data = defineModel();
</script>

<template>
  <label v-if="label" :for="inputId" class="text-sm font-medium">{{
    label
  }}</label>
  <input
    class="px-2 py-1 rounded-lg border border-textColor"
    :type="type"
    v-model="data"
    :placeholder="placeholder"
  />
</template>