<template>
  <h3 v-if="titleName" class="title">{{ titleName }}</h3>
</template>

<script>
export default {
  props: {
    titleName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 26px;
}
</style>
