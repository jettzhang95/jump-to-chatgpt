<script setup lang="ts">
import store from '@/stores'
</script>
<template>
  <div
    class="z-50 w-screen h-screen fixed bg-gray-500 flex justify-center items-center opacity-60"
    @click="store.toggleSetting"
    @keydown.delete="store.toggleSetting"
  >
    <div class="w-1/4 h-1/4 bg-neutral-200 dark:bg-gray-400 rounded-md" @click.stop="() => {}">
      <label for="api-key" class="block text-sm font-semibold leading-6 text-gray-900"
        >First name</label
      >
      <div class="mt-2.5">
        <input
          type="text"
          name="api-ley"
          id="api-key"
          autocomplete="given-name"
          class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
</template>
