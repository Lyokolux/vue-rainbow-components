<script setup lang="ts">
import Spinner from './Spinner.vue'
import VueLogo from '~/components/icons/VueLogo.vue' 
</script>

<template>
  <Story title="Spinner">
    <Variant title="Default">
      <Spinner />
    </Variant>
    <Variant title="Size 5rem">
      <Spinner size="5rem" />
    </Variant>
    <Variant title="With slot">
      <Spinner>
        <VueLogo />
      </Spinner>
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
    <Variant title="Arc (brand)">
      <Spinner type="arc" variant="brand" />
    </Variant>
    <Variant title="Arc Inverse">
      <Spinner type="arc" variant="inverse" />
    </Variant>
    <Variant title="Arc Neutral">
      <Spinner type="arc" variant="neutral" />
    </Variant>
    <Variant title="Arc with slot">
      <Spinner type="arc">
        <VueLogo />
      </Spinner>
    </Variant>
  </Story>
</template>

<style lang="scss">
@import '../../assets/colors.css';
</style>