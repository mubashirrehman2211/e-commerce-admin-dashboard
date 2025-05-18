<script setup lang="ts">
import ChevronDown from 'u-vue/icons/ChevronDown.vue';
import AccountCircleOutline from 'u-vue/icons/AccountCircleOutline.vue';
import UDropdown from 'u-vue/components/UDropdown.vue'
import {profileLinks} from '../constants/Profile.ts';
</script>

<template>
  <div class="flex gap-10 items-center text-[var(--color-primary-light)]">
    <UDropdown left>
      <div class="profile-content all-center gap-2 cursor-pointer">
        <AccountCircleOutline class="sm:text-3xl text-xl"/>
        <h2 class="admin-name font-semibold">Jhon</h2>
        <ChevronDown class="text-xl"/>
      </div>

      <template #content>
        <div class="text-color w-full p-5 rounded" v-for="profile in profileLinks"
             :style="{ background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface))' }"
        >
          <RouterLink :to="profile.link">
            <div class="flex gap-2 items-center cursor-pointer" :key="profile.id">
              <component :is="profile.icon" class="text-[var(--color-primary-light)]"/>
              <h2>{{ profile.name }}</h2>
            </div>
          </RouterLink>
        </div>
      </template>
    </UDropdown>
  </div>
</template>

<style scoped>

</style>