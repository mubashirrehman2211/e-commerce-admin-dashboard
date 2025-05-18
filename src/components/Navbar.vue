<script setup lang="ts">
import AccountEditOutline from 'u-vue/icons/AccountEditOutline.vue';
import ProfileDropdown from "./ProfileDropdown.vue";
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full p-4 shadow-lg flex items-center justify-between"
    :style="{ background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface))' }"
  >
    <RouterLink
      to="/"
      class="flex items-center cursor-pointer gap-2 text-xl sm:text-2xl text-[var(--color-primary-light)]"
    >
      <AccountEditOutline class="w-6 h-6 sm:w-7 sm:h-7 sm:flex hidden text-4xl" />
      <span class="font-semibold whitespace-nowrap">E-Commerce</span>
    </RouterLink>

    <div class="shrink-0">
      <ProfileDropdown />
    </div>
  </header>
</template>
