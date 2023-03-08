<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch } from 'vue'
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
  <RouterView />
</template>

<style scoped></style>
