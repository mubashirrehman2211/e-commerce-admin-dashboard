<script setup lang="ts">

import {useProductStore} from "../../stores/product.store.ts";

const productStore = useProductStore()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">Recent Products</h2>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="product in productStore.recentProduct" :key="product.id" class="py-3 flex justify-between">
        <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ product.created_at }}</span>
      </li>
    </ul>
  </div>
</template>
