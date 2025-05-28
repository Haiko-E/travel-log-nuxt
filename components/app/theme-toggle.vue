<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode = computed({
  get() { return colorMode.value === "dark"; },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <ColorScheme>
    <template #placeholder>
      <span class="loading loading-ring loading-xs mr-3" />
    </template>
    <label class="swap swap-rotate mr-3">
      <input
        v-model="isDarkMode"
        type="checkbox"
        class="theme-controller"
      >
      <Icon
        name="tabler:sun"
        class="swap-on"
        size="24"
      />
      <Icon
        name="tabler:moon"
        class="swap-off"
        size="24"
      />
    </label>
  </ColorScheme>
</template>
