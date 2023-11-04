<template>
  <div class="label">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  border: 2px solid #000;
  border-radius: 6px;
  padding: 8px 20px;
  & + .label {
    margin-left: 10px;
  }
}
</style>
