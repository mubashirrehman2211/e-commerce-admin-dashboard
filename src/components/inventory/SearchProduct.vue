<script setup lang="ts">
import {useProductStore} from "../../stores/product.store.ts";

const productStore = useProductStore()
</script>

<template>
  <input v-model="productStore.searchQuery"
         type="text"
         placeholder="Search products..."
         class="px-4 py-2 border border-gray-700 bg-gray-700 text-color rounded w-64"/>
</template>

<style scoped>

</style>