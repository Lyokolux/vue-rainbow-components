<template>
  <button :class="[
    { 'outline': outline },
    variant
  ]" :disabled="disabled">
    <slot name="before" />
    <span v-if="label">{{ label }}</span>
    <slot name="after" />
  </button>
</template>

<script setup lang="ts">
// TODO: button outline brand
// TODO: button border filled
// TODO: button inverse
// TODO: button with loading states
// TODO: button with border radius
// TODO: button with shaded (Only neutral, brand, destructive and success variant can be shaded.)
type ButtonProps = {
  label?: string
  outline?: boolean
  disabled?: boolean
  size?: string
  radius?: string
  variant?: 'border' | 'neutral' | 'brand' | 'success' | 'destructive'
}
withDefaults(defineProps<ButtonProps>(), {
  radius: '100px',
  size: '1rem'
})
// TODO: focus state

</script>

<style scoped lang="scss">
button {
  --size: v-bind(size);
  --btn-color: var(--c-brand);
  gap: 1rem;
  cursor: pointer;
  border: 1px solid var(--btn-border-color, transparent);
  color: var(--btn-color);
  background-color: var(--btn-bg-color, transparent);
  font-size: var(--size);
  line-height: calc(var(--size) * 1.375);
  border-radius: v-bind(radius);
  padding: calc(var(--size) * 0.5) var(--size);
  transition: border 0.15s, color 0.2s, transform 0.2s, filter 0.4s;

  &:hover {
    filter: grayscale(0.3);
  }

  &:not(:disabled):active {
    filter: grayscale(0.6);
    transform: scale(0.95);
  }

  &:focus {
    outline: 0;
    box-shadow: var(--btn-bg-color, --btn-color) 0px 0px 0.1875rem;
  }

  &:disabled {
    --btn-color: var(--c-disabled);
    --btn-border-color: var(--c-disabled);
    --btn-bg-color: var(--c-main-background);
    cursor: initial;
  }

  &:not(:disabled).outline {
    --btn-border-color: var(--c-brand);
  }

  &:not(:disabled).border {
    --btn-color: var(--color);
    --btn-border-color: var(--c-disabled);

    &:hover {
      --btn-color: var(--c-brand);
      --btn-border-color: var(--c-brand);
    }
  }

  &:not(:disabled).neutral {
    --btn-color: var(--c-brand);
    --btn-bg-color: var(--c-main-background);
    --btn-border-color: var(--c-disabled);
  }

  &:not(:disabled).brand {
    --btn-color: var(--c-main-background);
    --btn-bg-color: var(--c-brand);
  }

  &:not(:disabled).success {
    --btn-color: var(--c-main-background);
    --btn-bg-color: var(--c-success);
  }

  &:not(:disabled).destructive {
    --btn-color: var(--c-main-background);
    --btn-bg-color: var(--c-error);
  }
}
</style>