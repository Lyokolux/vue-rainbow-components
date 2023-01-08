<script setup lang="ts">
import Spinner from './Spinner.vue'
</script>

<template>
  <Story title="Spinner">
    <Variant title="Color">
      <Spinner />
    </Variant>
    <Variant title="Brand">
      <Spinner variant="brand" />
    </Variant>
    <Variant title="Inverse">
      <Spinner variant="inverse" />
    </Variant>
    <Variant title="Neutral">
      <Spinner variant="neutral" />
    </Variant>
  </Story>
</template>

<style lang="scss">
@import '../../assets/colors.css';
</style>