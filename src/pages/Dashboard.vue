<script setup lang="ts">
import StatisticsCard from "../components/dashboard/StatisticsCard.vue";
import CartOutline from 'u-vue/icons/CartOutline.vue';
import CurrencyUsd from 'u-vue/icons/CurrencyUsd.vue';
import TextBoxMultipleOutline from 'u-vue/icons/TextBoxMultipleOutline.vue';
import RecentProducts from "../components/inventory/RecentProducts.vue";
import LowInventoryList from "../components/inventory/LowInventoryList.vue";
import {computed} from "vue";
import {sales} from "../constants/Sales.ts";
import {useProductStore} from "../stores/product.store.ts";

const revenue = computed(() => {
  return sales.reduce((sum, rev) => sum + rev.revenue, 0)
})

const orders = computed(() => {
  return sales.reduce((sum, order) => sum + order.orders, 0)
})

const productStore = useProductStore()
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <StatisticsCard title="Total Orders" :value="orders">
        <template #icon>
          <CartOutline/>
        </template>
      </StatisticsCard>

      <StatisticsCard title="Revenue" :value="`$ ${revenue}`">
        <template #icon>
          <CurrencyUsd/>
        </template>
      </StatisticsCard>

      <StatisticsCard title="Inventory Count" :value="productStore.products?.length">
        <template #icon>
          <TextBoxMultipleOutline/>
        </template>
      </StatisticsCard>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 m-auto mt-10">
      <RecentProducts/>
      <LowInventoryList/>
    </div>
  </div>
</template>


<style scoped>
</style>