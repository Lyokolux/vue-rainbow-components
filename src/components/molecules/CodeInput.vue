<template>
  <fieldset :id="localId" :class="{ 'error': error }">
    <legend><span v-if="required" class="required">*</span><span>{{ label }}</span></legend>
    <input v-for="(_, i) in length" :key="i" :value="localValue[i]" maxlength="1" :disabled="disabled" :readonly="readonly" @input="onInput" @keydown.delete="onDelete" @focus="onFocus" @paste="onPaste" />
  </fieldset>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useId } from '~/composables/useId'

type CodeInputProps = {
  modelValue: string
  label: string
  length?: number 
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  required?: boolean
}

// TODO: error state
// TODO: helpText string as component!

const props = withDefaults(defineProps<CodeInputProps>(), {
  length: 4,
})

const emit = defineEmits<{
  (e: 'update:modelValue', newVal: string): void
}>()

const localId = useId(8)
const localValue = computed(() => props.modelValue.split(''))
watch(localValue, (newVal) => {
  focusAtIndex(newVal.length)
})
const focusAtIndex = (i: number) => {
  if(0 > i || i > props.length - 1) return
  const inputs = (document.querySelectorAll(`[id='${localId}'] > input`) as NodeListOf<HTMLInputElement>)
  inputs.item(i).focus()
}
const onFocus = () => focusAtIndex(Math.min(localValue.value.length, props.length - 1))

const onInput = (e: Event) => {
  const c = (e as InputEvent).data
  if(props.modelValue.length < props.length) {
    emit('update:modelValue', `${props.modelValue}${c}`)
  }
}

const onDelete = () => emit('update:modelValue', props.modelValue.slice(0, -1))

const onPaste = (e: ClipboardEvent) => {
  const data = e.clipboardData?.getData('Text')
  if(!data) return 
  emit('update:modelValue', data)
}
</script>

<style scoped lang="scss">
fieldset {
  line-height: 1.5rem;
  margin: 0px;
  padding: 0px;
  border: 0px none;
  box-sizing: border-box;
}

legend {
  color: rgb(63, 73, 84);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.125rem;
  align-self: center;
  box-sizing: border-box;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px 16px;

  .required {
    color: var(--c-error);
    margin-right: 0.2rem;
  }
}

input {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(164, 167, 181);
  transition: all 0.1s linear 0s, padding 0s ease 0s, border 0s ease 0s;
  display: inline-block;
  padding: 0px 1rem;
  width: 56px;
  height: 56px;
  border-radius: 20px;
  line-height: 2.5rem;
  color: rgb(42, 48, 57); // TODO
  font-size: 28px;
  box-sizing: border-box;
  margin: 0px 6px 12px;
  text-align: center;

  &:focus {
    outline: 0px;
    padding: 0px 0.9375rem;
    border-color: var(--c-brand);
    background-color: var(--c-main-background);
    box-shadow: var(--c-brand) 0px 0px 2px;
  }

  &[disabled] {
    background-color: rgb(246, 247, 249);
    border: 1px solid rgba(82, 95, 127, 0.15);
    color: rgb(215, 217, 226);
    cursor: not-allowed;
    user-select: none;
  }

  &[readonly] {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
    margin: 0px 0px 12px;
  }

  .error & {
    border-width: 2px;
    border-color: var(--c-error);
  }
}
</style>