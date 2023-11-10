<template>
  <a
    class="link"
    :href="navigationItem.scroll"
    v-smooth-scroll="{
      duration: 1000,
      offset: -100,
      updateHistory: false,
    }"
  >
    {{ navigationItem.text }}
  </a>
</template>

<script>
export default {
  props: {
    navigationItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.link {
  position: relative;
  font-size: 16px;
  font-weight: 500;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: $accent-color;
    z-index: -1;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
</style>
