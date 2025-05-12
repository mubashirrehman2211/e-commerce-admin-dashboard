<script setup lang="ts">
import ChevronDown from 'u-vue/icons/ChevronDown.vue';
import UDropdown from 'u-vue/components/UDropdown.vue'
import {profileLinks} from './../constants/Profile';
</script>

<template>
  <div class="flex gap-10 items-center text-color mx-10">
    <!-- profile page -->
    <input type="text" class="search-box p-2 border-2 border-gray-700 rounded-lg" placeholder="Search">
    <UDropdown>
      <div class="profile-content flex justify-between items-center gap-4 cursor-pointer">
        <img src="/profile-avatar.jpg" alt="profile-image" class="w-8 h-8 rounded-full shadow-sm"/>
        <h2 class="admin-name text-lg">M Ali</h2>
        <ChevronDown class="text-xl"/>
      </div>
      <template #content>
        <div class="text-color w-full p-5 rounded" v-for="profile in profileLinks"
             :style="{ background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface))' }"
        >
          <div class="flex gap-2 items-center cursor-pointer" :key="profile.id" @click="()=> console.log('click')">
            <component :is="profile.icon"/>
            <h2>{{ profile.name }}</h2>
          </div>
        </div>
      </template>
    </UDropdown>
  </div>
</template>

<style scoped>

</style>