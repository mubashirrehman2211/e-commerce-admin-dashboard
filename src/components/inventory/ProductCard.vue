<script setup lang="ts">
import AddStock from "./AddStock.vue";
import type {Product} from "@/types";

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
})
</script>

<template>
  <div
    v-for="product in products"
    :key="product.id"
    class="p-4 border border-gray-200 rounded-xl shadow-sm bg-gray-800 border-gray-700 flex flex-col sm:flex-row items-center sm:items-start gap-4 transition hover:shadow-md"
  >
    <div class="sm:w-24 sm:h-24 w-full h-[10em] rounded overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="object-cover w-full h-full"
      >
    </div>

    <div class="flex-1 w-full">
      <h2 class="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
        {{ product.name }}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {{ product.category }}
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {{ product.price }} $
      </p>

      <span
        :class="[
          'text-xs px-2 py-1 rounded-full font-medium mb-3 inline-block',
          product.stock > 0
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        ]"
      >
        {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}
      </span>

      <AddStock
        :stock="product.stock"
        :product-id="product.id"
      />
    </div>
  </div>
</template>
