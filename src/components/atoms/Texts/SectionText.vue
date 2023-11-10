<template>
  <h2 class="section__title">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
.section {
  &__title {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 5px;
    text-align: center;
  }
}
</style>
