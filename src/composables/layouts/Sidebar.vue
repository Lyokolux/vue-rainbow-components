<template>
  <nav>
    <slot />
  </nav>
</template>

<style scoped lang="scss">
nav {
  box-sizing: border-box;
  border-bottom-right-radius: .875rem;
  border-top-right-radius: .875rem;
  background-color: var(--c-main-background);
  padding: 0.75rem 0.5rem 1rem 0.5rem;
}
</style>