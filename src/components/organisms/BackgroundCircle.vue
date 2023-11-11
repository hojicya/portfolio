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
    </kinesis-container>
    <div class="stick stick--one">*</div>
    <div class="stick stick--two">*</div>
    <div class="stick stick--three">*</div>
  </div>

  <div class="background background__inner">
    <kinesis-container class="background__content">
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

@keyframes rotate_animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  &__inner {
    pointer-events: none;
    z-index: 100;
  }
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.stick {
  position: absolute;
  display: inline-block;
  opacity: 0.5;
  &--one {
    top: 30vh;
    left: 50vh;
    font-size: 3em;
    animation: rotate_animation 10s linear infinite;
  }
  &--two {
    bottom: 24vh;
    right: 27vh;
    font-size: 3em;
    animation: rotate_animation 14s linear infinite;
  }
  &--three {
    bottom: 21vh;
    left: 24vh;
    font-size: 3em;
    animation: rotate_animation 8s linear infinite;
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
    width: 5vw;
    height: 5vw;
    border: 3px solid $light-blue;
    top: 10rem;
    right: 3rem;
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
    border: 2px solid #99d7db;
    bottom: 28vh;
    right: 12vh;
  }
}
</style>
