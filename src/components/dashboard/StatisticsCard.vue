<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true // or provide default
  },
  value: {
    type: [String, Number],
    required: true // or provide default
  }
})
</script>

<template>
  <div
    class="bg-gray-800 text-white rounded-lg shadow-md p-6 sm:p-8 flex items-center gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md transition hover:shadow-xl my-2 w-full"
  >
    <div
      class="text-2xl text-color bg-[var(--color-primary)] bg-opacity-30 p-2 rounded-lg flex items-center justify-center"
    >
      <slot name="icon" />
    </div>
    <div>
      <h4 class="text-gray-300 text-lg font-medium tracking-wide">
        {{ title }}
      </h4>
      <p class="text-xl sm:text-2xl font-bold text-white">
        {{ value }}
      </p>
    </div>
  </div>
</template>