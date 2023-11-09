<template>
  <section class="section">
    <MyTitleText v-if="heading">{{ heading }}</MyTitleText>
    <div class="section__contents">
      <slot />
    </div>
  </section>
</template>

<script>
import MyTitleText from "../../components/atoms/Texts/TitleText.vue";

export default {
  components: {
    MyTitleText,
  },
  props: {
    heading: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px;
  &__contents {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
