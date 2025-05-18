<script setup lang="ts">
import {computed} from 'vue'
import {useProductStore} from "../../stores/product.store.ts";

const productStore = useProductStore()
const lowInventory = computed(() => productStore.products.filter(product => product.stock <= 5))
</script>

<template>
  <div class="bg-gray-800 rounded-xl p-4 shadow-md relative">
    <h2 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
      Low Inventory
    </h2>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li
        v-for="product in lowInventory"
        :key="product.id"
        class="py-3 flex justify-between items-center"
      >
        <span class="text-gray-700 dark:text-gray-300">{{ product.name }}</span>
        <span class="text-sm font-semibold text-red-600">{{ product.stock }} left</span>
      </li>
    </ul>
    <RouterLink
      to="/products"
      class="absolute right-2 bottom-2 text-color"
    >
      <button class="px-4 py-2 font-semibold rounded bg-[var(--color-primary)] border border-[var(--color-primary)] cursor-pointer">
        Add Stock
      </button>
    </RouterLink>
  </div>
</template>
