<script setup lang="ts">
import {useProductStore} from "../../stores/product.store.ts";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-color">
    <ProductCard :products="productStore.filteredProducts"/>
  </div>
</template>

<style scoped>

</style>