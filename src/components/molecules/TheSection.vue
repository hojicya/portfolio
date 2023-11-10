<template>
  <section class="section">
    <MySectionText v-if="sectionName">{{ sectionName }}</MySectionText>
    <div class="section__contents">
      <slot />
    </div>
  </section>
</template>

<script>
import MySectionText from "../../components/atoms/Texts/SectionText.vue";

export default {
  components: {
    MySectionText,
  },
  props: {
    sectionName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.section {
  position: relative;
  max-width: 1100px;
  margin: 100px auto;
  padding: 100px 90px;
  background-color: rgba(255, 255, 255, 0.87);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 2px;
  color: $font-color;
  z-index: 10;
  &__contents {
    margin-top: 80px;
  }
}
</style>
