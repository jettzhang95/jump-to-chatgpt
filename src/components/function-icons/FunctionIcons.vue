<script setup lang="ts">
import SettingIcon from './components/SettingIcon.vue'
import ThemeIcon from './components/ThemeIcon.vue'
import GithubIcon from './components/GithubIcon.vue'
import ClearIcon from './components/ClearIcon.vue'
</script>
<template>
  <div class="flex justify-around text-gray-100">
    <setting-icon />
    <clear-icon />
    <theme-icon />
    <github-icon />
  </div>
</template>
