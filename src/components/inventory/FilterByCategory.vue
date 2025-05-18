<script setup lang="ts">
import {productTypes} from "../../constants/SelectOptions.ts";
import {useProductStore} from "../../stores/product.store.ts";

const productStore = useProductStore()
</script>

<template>
  <div class="px-1 border border-gray-700 bg-gray-700 text-color rounded">
    <select v-model="productStore.selectedCategory" class="px-4 py-2 bg-gray-700">
      <option v-for="cat in productTypes" :key="cat" :value="cat">{{ cat }}</option>
    </select>
  </div>
</template>

<style scoped>

</style>