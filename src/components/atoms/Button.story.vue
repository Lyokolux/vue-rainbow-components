<template>
  <Story title="Atoms/Button" :layout="{ type: 'grid' }">
    <Variant title="Base">
      <Button label="Button Base" />
    </Variant>
    <Variant title="Variant border">
      <Button label="Button border" variant="border" />
    </Variant>
    <Variant title="Variant neutral">
      <Button label="Button neutral" variant="neutral" />
    </Variant>
    <Variant title="Variant brand">
      <Button label="Button brand" variant="brand" />
    </Variant>
    <Variant title="Variant success">
      <Button label="Button success" variant="success" />
    </Variant>
    <Variant title="Variant destructive">
      <Button label="Button destructive" variant="destructive" />
    </Variant>
    <Variant title="Size small">
      <Button label="Button small" variant="brand" size="0.875rem" />
    </Variant>
    <Variant title="Size large">
      <Button label="Button large" variant="brand" size="1.2rem" />
    </Variant>
    <Variant title="Base disabled">
      <Button label="Button base disabled" disabled />
    </Variant>
    <Variant title="Neutral disabled">
      <Button label="Button neutral disabled" variant="neutral" disabled />
    </Variant>
    <Variant title="Brand disabled">
      <Button label="Button brand disabled" variant="brand" disabled />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Button from './Button.vue';
</script>

<style lang="scss">
@import '../../assets/colors.css';

button {
  margin: 0.2rem;
}
</style>