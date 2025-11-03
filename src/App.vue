<script setup>
import AppNavbar from '@/layouts/AppNavbar.vue'
import AppSidebar from '@/layouts/AppSidebar.vue'
</script>

<template>
  <div class="app-layout">
    <app-navbar />
    <main class="content-area">
      <app-sidebar />
      <div class="content-body">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Base layout */
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--ms-white);
}

/* Main content area layout */
.content-area {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Content body */
.content-body {
  flex: 1;
  padding: 24px;
  background-color: var(--ms-gray-200);
  overflow-y: auto;
}
</style>
