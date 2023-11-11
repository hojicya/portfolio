<template>
  <h2 class="section__title">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.section {
  &__title {
    border-bottom: dashed 1px #2e2e2e;
    font-weight: 500;
    @include tab {
      font-size: 3.6rem;
      letter-spacing: 0.2rem;
    }
    @include sp {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>
