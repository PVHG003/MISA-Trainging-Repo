<script setup>
defineProps({
  modelValue: [String, Number, Boolean, File],
  inputType: {
    type: String,
    default: 'text',
    validator: (value) =>
      [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
        'select',
        'none',
      ].includes(value),
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  style: {
    type: Object,
    default: () => {},
  },
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="input-group" :style="style" :class="customClass">
    <div class="input-group__label">
      <slot name="label" />
      <span style="color: red">{{ required === true ? '*' : '' }}</span>
    </div>
    <div class="input-group__controller">
      <div class="input__wrapper">
        <input :type="inputType" :placeholder="placeholder" :value="modelValue" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
}

.input-group__label {
  font-size: 16px;
  color: #1e2633;
  height: 25px;
  line-height: 25px;
  font-weight: 600;
  width: 160px;
}

.input__wrapper input {
  height: 32px;
  line-height: 32px;
  padding: 2px 16px 0;
  font-size: 14px;
  outline: none;
  border: 1px solid #1e2633;
  width: 100%;
  border-radius: 4px;
}

.input__wrapper input:hover,
.input__wrapper input:focus {
  border-color: #2970f6;
  outline: none;
}

.input-group__controller {
  flex: 1;
}
</style>
