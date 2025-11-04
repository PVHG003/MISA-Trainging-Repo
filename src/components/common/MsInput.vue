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
        'textarea',
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
  objectStyle: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div class="input-group" :style="objectStyle">
    <div class="input-group__label">
      <slot name="label" />
      <span style="color: red">{{ required === true ? '*' : '' }}</span>
    </div>
    <div class="input-group__controller">
      <div class="input__wrapper" @input="$emit('update:modelValue', $event.target.value)">
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
  margin-bottom: 16px;
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
  border-color: var(--ms-border-color-translucent);
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
