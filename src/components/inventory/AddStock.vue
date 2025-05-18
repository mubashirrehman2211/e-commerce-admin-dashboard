<script setup lang="ts">
import Plus from 'u-vue/icons/Plus.vue';
import Minus from 'u-vue/icons/Minus.vue';
import {useProductStore} from "../../stores/product.store.ts";
import { PropType } from 'vue'
import type { StockType } from '../../types/index.ts'

defineProps({
  stock: {
    type: Object as PropType<StockType>,
    required: true
  },
  productId: {
    type: String,
    required: true
  }
})
const productStore = useProductStore()
</script>

<template>
  <div class="flex items-center justify-end gap-3 sm:gap-5">
    <button
      class="p-2 rounded bg-gray-700 border border-gray-600 hover:bg-gray-600 cursor-pointer"
      @click="productStore.updateStock(productId, 'decrease')"
    >
      <Minus class="w-4 h-4 text-white" />
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
      class="p-2 rounded bg-gray-700 border border-gray-600 hover:bg-gray-600 cursor-pointer"
      @click="productStore.updateStock(productId, 'increase')"
    >
      <Plus class="w-4 h-4 text-white" />
    </button>
  </div>
</template>

<style scoped>

</style>