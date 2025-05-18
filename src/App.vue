<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col sm:pl-[80px]">
    <Navbar />

    <div class="flex flex-1 overflow-hidden">
      <aside class="sm:flex hidden">
        <Sidebar />
      </aside>

      <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

