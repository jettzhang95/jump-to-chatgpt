<script setup lang="ts">
import { watch } from 'vue'
import FunctionIcons from '@/components/function-icons/FunctionIcons.vue'
import store from '@/stores'
import { systemDarkModeMediaQuery } from '@/utils'

watch(
  () => store.theme,
  (newTheme) => {
    if (
      newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (newTheme === 'system') {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', systemDarkModeMediaQuery)
    } else {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', systemDarkModeMediaQuery)
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="w-screen h-screen flex">
    <nav class="w-64 p-2 bg-gray-900 text-gray-100 flex flex-col">
      <div class="grow"></div>
      <function-icons />
    </nav>
    <main class="grow p-2 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100">Main</main>
  </div>
</template>
