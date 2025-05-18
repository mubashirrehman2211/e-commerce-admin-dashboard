<script setup lang="ts">

import {useProductStore} from "../../stores/product.store.ts";

const productStore = useProductStore()
</script>

<template>
  <div class="px-1 border border-gray-700 bg-gray-700 text-color rounded">
    <select v-model="productStore.sortOption"
            class="px-4 py-2 border border-gray-700 bg-gray-700 text-color rounded">
      <option value="name">Sort by Name</option>
      <option value="stock">Sort by Stock</option>
    </select>
  </div>
</template>

<style scoped>

</style>