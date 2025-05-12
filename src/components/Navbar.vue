<script setup lang="ts">
import AccountEditOutline from 'u-vue/icons/AccountEditOutline.vue';

import ProfileDropdown from "./ProfileDropdown.vue";
</script>

<template>
  <div
      class="sticky top-0 z-50 w-full p-4 shadow-lg flex justify-between items-center"
      :style="{ background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface))' }"
  >
    <div class="flex items-center gap-2 text-2xl text-color">
      <AccountEditOutline/>
      <span class="font-semibold">E-Commerce</span>
    </div>

    <ProfileDropdown/>
  </div>
</template>
