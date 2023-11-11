<template>
  <section class="mainvisual">
    <div class="mainvisual__content">
      <h1 class="mainvisual__title">hojicya's<br />portfolio</h1>
      <p class="mainvisual__supplement">
        Welcome to my portfolio!<br />
        Please take it easy.
      </p>
    </div>
  </section>
</template>
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/variables.scss";
@import "../../../styles/mixins.scss";

.mainvisual {
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;
  overflow: hidden;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  &__title {
    font-weight: 500;
    color: $font-color;
    @include tab {
      font-size: 7.4rem;
      letter-spacing: 1.4rem;
    }
    @include sp {
      font-size: 3.4rem;
      letter-spacing: 1rem;
    }
  }
  &__supplement {
    margin-top: 2rem;
    @include tab {
      font-size: 1.8rem;
    }
  }
}
</style>
