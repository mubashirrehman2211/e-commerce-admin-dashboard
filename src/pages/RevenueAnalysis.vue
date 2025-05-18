<script setup lang="ts">
import { useRevenueStore } from '../stores/revenue.store.ts'
import RevenueChart from '../components/revenue/RevenueChart.vue'
import StatisticsCard from "../components/dashboard/StatisticsCard.vue"
import CurrencyUsd from 'u-vue/icons/CurrencyUsd.vue'
import CartOutline from 'u-vue/icons/CartOutline.vue'
import { productTypes, timePeriods } from '../constants/SelectOptions'

const revenueStore = useRevenueStore()
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 mb-6">
      <select
          v-model="revenueStore.selectedCategory"
          class="p-3 border border-gray-700 rounded text-white bg-gray-700 w-full sm:w-[200px]"
      >
        <option v-for="c in productTypes" :key="c" :value="c">{{ c }}</option>
      </select>

      <select
          v-model="revenueStore.selectedPeriod"
          class="p-3 border border-gray-700 rounded text-white bg-gray-700 w-full sm:w-[200px]"
      >
        <option v-for="t in timePeriods" :key="t" :value="t.value">{{ t.label }}</option>
      </select>
    </div>

    <div class="flex flex-wrap gap-4 justify-between mb-6">
      <StatisticsCard title="Total Revenue" :value="`$ ${revenueStore.totalRevenue}`" class="flex-1 min-w-[200px]">
        <template #icon>
          <CurrencyUsd />
        </template>
      </StatisticsCard>

      <StatisticsCard title="Total Orders" :value="revenueStore.totalOrders" class="flex-1 min-w-[200px]">
        <template #icon>
          <CartOutline />
        </template>
      </StatisticsCard>
    </div>

    <div class="mt-4 h-[400px]">
      <RevenueChart :chartData="revenueStore.chartData" />
    </div>
  </div>
</template>



