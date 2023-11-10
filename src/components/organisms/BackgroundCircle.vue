<template>
  <div class="background">
    <kinesis-container class="background__content">
      <kinesis-element
        class="circle circle--one"
        :strength="30"
        type="rotate"
        transform-origin="5% 30%"
      />
      <kinesis-element class="circle circle--two" :strength="20" />
      <kinesis-element
        class="circle circle--three"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        class="circle circle--four"
        :strength="20"
        type="depth_inv"
      />
      <kinesis-element
        class="circle circle--five"
        :strength="20"
        type="depth"
      />
      <kinesis-element class="circle circle--six" :strength="20" type="depth" />
      <kinesis-element
        class="circle circle--seven"
        :strength="20"
        type="scale"
      />
    </kinesis-container>
  </div>
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
@import "../../styles/variables.scss";

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  &--one {
    width: 20vw;
    height: 20vw;
    border: 20px solid $light-blue;
    top: 5vh;
    left: 4vh;
  }
  &--two {
    width: 30vw;
    height: 30vw;
    border: 20px solid $light-blue;
    bottom: 11vh;
    left: 28vh;
    opacity: 0.3 !important;
  }
  &--three {
    width: 50vw;
    height: 50vw;
    border: 116px solid $light-blue;
    top: -6vh;
    right: -10vh;
  }
  &--four {
    width: 2vw;
    height: 2vw;
    border: 4px solid $light-blue;
    bottom: 10vh;
    right: 45vh;
  }
  &--five {
    width: 6vw;
    height: 6vw;
    border: 2px solid $light-blue;
    top: 27vh;
    left: 50vh;
  }
  &--six {
    width: 6vw;
    height: 6vw;
    background: $light-blue;
    bottom: 7vh;
    left: 7vh;
  }
  &--seven {
    width: 2vw;
    height: 2vw;
    border: 1px solid $light-blue;
    bottom: 33vh;
    right: 17vh;
  }
}
</style>
