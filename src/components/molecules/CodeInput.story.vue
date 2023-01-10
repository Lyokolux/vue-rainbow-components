<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CodeInput from './CodeInput.vue'

const value = ref('')
const readonlyValue = ref('1234')
watchEffect(() => console.log(value.value))
</script>

<template>
  <Story title="Code Input">
    <Variant title="Default">
      <CodeInput v-model="value" label="Enter your Code" />
    </Variant>
    <Variant title="Disabled">
      <CodeInput v-model="value" label="Enter your Code" disabled />
    </Variant>
    <Variant title="Readonly">
      <CodeInput v-model="readonlyValue" label="Enter your Code" readonly />
    </Variant>
  </Story>
</template>

<style lang="scss">
@import '../../assets/colors.css';
</style>