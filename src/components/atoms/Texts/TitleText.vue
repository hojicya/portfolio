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
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.title {
  @include tab {
    font-size: 2.6rem;
  }
  @include sp {
    font-size: 1.8rem;
  }
}
</style>
