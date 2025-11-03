<script setup></script>

<template>
  <div class="modal-overlay">
    <div class="modal">
      <h2>Thêm ứng viên mới</h2>
      <!-- Form fields go here -->
      <button @click="$emit('close')">Đóng</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 6px;
  width: 500px;
  height: 95%;
}
</style>
