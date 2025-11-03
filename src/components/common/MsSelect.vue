<script setup lang="ts">
interface OptionItem {
  key: string
  value: string
}

defineProps<{
  name: string
  options?: OptionItem[]
  modelValue?: string | number
  placeholder?: string
  required?: boolean
  style?: Record<string, any>
}>()
</script>

<template>
  <div class="select-group" :style="style">
    <div class="select-group__label">
      <slot name="label" /> <span style="color: red">{{ required === true ? '*' : '' }}</span>
    </div>
    <div class="input__wrapper">
      <select :name="name" :value="modelValue">
        <option value="" disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.key" :value="option.value">
          {{ option.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
}
.select-group__label {
  font-size: 16px;
  color: #1e2633;
  height: 25px;
  line-height: 25px;
  font-weight: 600;
}
.select-group select {
  width: 100%;
  height: 32px;
  border: 1px solid #1e2633;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: transparent;
}
.select-group select:focus {
  border-color: #2970f6;
  outline: none;
}
.input__wrapper select:hover,
.input__wrapper select:focus {
  border-color: #2970f6;
  outline: none;
}
</style>
