<script setup lang="ts">
import Sidebar from './Sidebar.vue'
</script>

<template>
  <Story title="Layouts/Sidebar">
    <Variant title="Basic 100px">
      <Sidebar class="width">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </Sidebar>
    </Variant>
    <Variant title="Full height">
      <Sidebar class="full-height">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </Sidebar>
    </Variant>
  </Story>
</template>

<style lang="scss">
@import '../../assets/colors.css';

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;

  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

.full-height {
  width: max(100px, 10vw);
  height: 100vh;
}

.width {
  width: max(10%, 100px);
}
</style>