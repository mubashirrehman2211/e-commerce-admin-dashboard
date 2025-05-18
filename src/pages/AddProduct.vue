<script setup lang="ts">
import {reactive} from 'vue'
import TagOutline from 'u-vue/icons/TagOutline.vue';
import CurrencyUsd from 'u-vue/icons/CurrencyUsd.vue';
import LayersOutline from 'u-vue/icons/LayersOutline.vue';
import ImageOutline from 'u-vue/icons/ImageOutline.vue';
import ListBox from 'u-vue/icons/FormatListBulleted.vue';
import {productTypes} from '../constants/SelectOptions.ts'
import {useProductStore} from "../stores/product.store.ts";
import {useRouter} from "vue-router";

const product = reactive({
  name: '',
  price: '',
  stock: '',
  category: '',
  image: '',
})

const productStore = useProductStore()
const router = useRouter()

function handleProductImage(e) {
  console.log({e})
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader();
  reader.onload = function (e) {
    product.image = e.target.result
  }

  reader.readAsDataURL(file)
}

</script>

<template>
  <form
    class="md:w-[500px] border border-gray-700 my-10 w-full m-auto p-4 shadow-lg rounded-lg space-y-10"
    @submit.prevent="productStore.addProduct(product, router)"
  >
    <h2 class="text-2xl text-color font-semibold text-center">
      Add New Product
    </h2>

    <div class="text-color flex flex-col gap-6">
      <div>
        <div class="relative">
          <TagOutline class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="product.name"
            type="text"
            placeholder="Product Name"
            class="w-full pl-10 pr-3 py-2 border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          >
        </div>
      </div>

      <div>
        <div class="relative">
          <CurrencyUsd class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="product.price"
            placeholder="Price ($)"
            type="number"
            step="0.01"
            class="w-full pl-10 pr-3 py-2 border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          >
        </div>
      </div>

      <div>
        <div class="relative">
          <LayersOutline class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            v-model="product.stock"
            placeholder="Stock"
            type="number"
            class="w-full pl-10 pr-3 py-2 border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          >
        </div>
      </div>

      <div>
        <div class="relative">
          <ListBox class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            v-model="product.category"
            class="w-full pl-10 text-color pr-3 py-2 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          >
            <option
              disabled
              value=""
            >
              Select category
            </option>
            <option
              v-for="category in productTypes"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>

      <div class="grow">
        <div class="relative">
          <ImageOutline class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="file"
            class="w-full pl-10 pr-3 py-2 border-b-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            @change="handleProductImage"
          >
          <img
            v-if="product.image"
            :src="product.image"
            alt="image-preview"
            class="w-full h-full object-contain border-2 rounded border-[var(--color-primary)]"
          >
        </div>
      </div>
    </div>

    <div class="pt-4">
      <button
        type="submit"
        class="w-full font-semibold cursor-pointer bg-[var(--color-primary)] text-white py-2 rounded-md hover:bg-[var(--color-primary-light)] transition"
      >
        Add Product
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>
