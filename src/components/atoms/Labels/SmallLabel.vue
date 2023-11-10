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

.label {
  display: inline-block;
  padding: 8px 20px;
  border: 2px solid $black;
  border-radius: 6px;
}
</style>
