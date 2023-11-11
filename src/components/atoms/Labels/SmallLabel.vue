<template>
  <div class="label">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.label {
  display: inline-block;
  border: 1px solid $black;
  border-radius: 6px;
  @include tab {
    padding: 0.8rem 2rem;
  }
  @include sp {
    padding: 0.4rem 1rem;
  }
}
</style>
