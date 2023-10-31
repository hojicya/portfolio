<template>
  <router-link class="link" active-class="link--active">{{ text }}</router-link>
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
.link {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #e4e92e;
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

.link--active {
  background: #e4e92e;
}
</style>
