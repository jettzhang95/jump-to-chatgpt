<script setup lang="ts">
import FunctionIcons from '@/components/function-icons/FunctionIcons.vue'
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
