<script setup lang="ts">
import ProductList from "../components/inventory/ProductList.vue";
import SearchProduct from "../components/inventory/SearchProduct.vue";
import FilterByCategory from "../components/inventory/FilterByCategory.vue";
import SortProducts from "../components/inventory/SortProducts.vue";
</script>

<template>
  <div class="xl:p-6 ">
    <h1 class="text-2xl font-bold mb-6 text-color">
      Product Inventory
    </h1>

    <div class="flex flex-wrap gap-4 mb-6">
      <SearchProduct />
      <FilterByCategory />
      <SortProducts />
    </div>

    <ProductList />
  </div>
</template>

<style scoped>

</style>
