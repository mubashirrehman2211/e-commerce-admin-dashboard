<script setup lang="ts">
import Plus from 'u-vue/icons/Plus.vue';
import Minus from 'u-vue/icons/Minus.vue';
import {useProductStore} from "../../stores/product.store.ts";

defineProps(['stock', 'productId']);
const productStore = useProductStore()
</script>

<template>
  <div class="flex items-center justify-end gap-3 sm:gap-5">

    <button
        @click="productStore.updateStock(productId, 'decrease')"
        class="p-2 rounded bg-gray-700 border border-gray-600 hover:bg-gray-600 cursor-pointer"
    >
      <Minus class="w-4 h-4 text-white"/>
    </button>

    <span
        :class="[
        'border-b-2 px-4 py-1 text-base font-semibold',
        stock <= 5 ? 'text-red-400 border-red-400' : 'text-color border-gray-600'
      ]"
    >
      {{ stock }}
    </span>

    <button
        @click="productStore.updateStock(productId, 'increase')"
        class="p-2 rounded bg-gray-700 border border-gray-600 hover:bg-gray-600 cursor-pointer"
    >
      <Plus class="w-4 h-4 text-white"/>
    </button>
  </div>
</template>

<style scoped>

</style>