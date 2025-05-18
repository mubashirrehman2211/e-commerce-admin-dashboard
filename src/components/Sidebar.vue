<script setup lang="ts">
import { profileLinks } from "../constants/Profile.ts";
</script>

<template>
  <div
    class="fixed top-0 left-0 h-screen w-[80px] flex flex-col items-center justify-start p-3 border-r border-gray-800"
    :style="{
      background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface))'
    }"
  >
    <div class="mt-20">
      <div
        v-for="profile in profileLinks"
        :key="profile.id"
        class="text-color w-full p-5 rounded mt-2"
      >
        <RouterLink :to="profile.link">
          <component
            :is="profile.icon"
            class="text-xl text-[var(--color-primary-light)] cursor-pointer"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

