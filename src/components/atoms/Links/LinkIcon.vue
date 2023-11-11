<template>
  <a :href="linkItem.href" class="link" target="_blank">
    <img v-if="linkItem.image" :src="imageSrc" class="link__image" />
    <span class="link__title">{{ linkItem.text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    linkItem: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    imageSrc() {
      return new URL(`../../../assets/${this.linkItem.image}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.link {
  display: flex;
  justify-items: flex-start;
  align-items: center;
  &__image {
    @include tab {
      width: 3rem;
    }
    @include sp {
      width: 2rem;
    }
  }
  &__title {
    @include tab {
      margin-left: 1rem;
      font-size: 1.6rem;
    }
    @include sp {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }
}
</style>
