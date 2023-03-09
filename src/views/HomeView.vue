<script setup lang="ts">
import FunctionIcons from '@/components/function-icons/FunctionIcons.vue'
import SettingModal from '@/components/setting-modal/SettingModal.vue'
import store from '@/stores'
</script>

<template>
  <div class="w-screen h-screen flex">
    <setting-modal v-if="store.settingVisible" />
    <nav class="w-64 px-2 py-4 bg-gray-900 text-gray-100 flex flex-col">
      <div class="grow"></div>
      <function-icons />
    </nav>
    <main class="grow p-2 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100">Main</main>
  </div>
</template>
