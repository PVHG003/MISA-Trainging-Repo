<script>
const allowedVariants = ['primary', 'secondary', 'danger']
</script>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => allowedVariants.includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  style: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <button class="btn" :class="`btn--${variant}`" :disabled="disabled" :style="style">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 6px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
}

.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0);
  transition: background 0.3s;
}

.btn:hover::after {
  background: rgba(255, 255, 255, 0.15);
}

.btn--primary {
  color: var(--ms-white);
  background: var(--ms-primary);
}

.btn--secondary {
  color: var(--ms-black);
  background: var(--ms-secondary-bg);
}

.btn--danger {
  color: var(--ms-white);
  background: var(--ms-danger);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
