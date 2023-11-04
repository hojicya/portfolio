<template>
  <section class="mainvisual">
    <kinesis-container class="mainvisual__content">
      <div>
        <MyBackgroundCircle />
      </div>
      <div class="mainvisual__title">
        <h1>
          <slot name="title" />
        </h1>
        <div class="mainvisual__supplement">
          <slot name="supplement" />
        </div>
      </div>
    </kinesis-container>
  </section>
</template>
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import MyBackgroundCircle from "../../components/molecules/BackgroundCircle.vue";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    MyBackgroundCircle,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";

.mainvisual {
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
  overflow: hidden;
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    & h1 {
      font-size: 5vw;
      font-weight: 500;
      color: $font-color;
    }
  }
  &__supplement {
    margin-top: 20px;
  }
}
</style>
