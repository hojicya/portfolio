<template>
  <kinesis-element
    class="circle circle--one"
    :strength="30"
    type="rotate"
    transform-origin="5% 30%"
  />
  <kinesis-element class="circle circle--two" :strength="20" />
  <kinesis-element class="circle circle--three" :strength="10" type="depth" />
  <kinesis-element
    class="circle circle--four"
    :strength="20"
    type="depth_inv"
  />
  <kinesis-element class="circle circle--five" :strength="20" type="depth" />
  <kinesis-element class="circle circle--six" :strength="20" type="depth" />
  <kinesis-element class="circle circle--seven" :strength="20" type="scale" />
</template>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  &--one {
    width: 20vw;
    height: 20vw;
    border: 20px solid $theme-color;
    top: 5vh;
    left: 4vh;
  }
  &--two {
    width: 30vw;
    height: 30vw;
    border: 20px solid $theme-color;

    bottom: 11vh;
    left: 28vh;
    opacity: 0.3 !important;
  }
  &--three {
    width: 50vw;
    height: 50vw;
    border: 116px solid $theme-color;
    top: -6vh;
    right: -10vh;
  }
  &--four {
    width: 2vw;
    height: 2vw;
    border: 4px solid $theme-color;
    bottom: 10vh;
    right: 45vh;
  }
  &--five {
    width: 6vw;
    height: 6vw;
    border: 2px solid $theme-color;
    top: 27vh;
    left: 50vh;
  }
  &--six {
    width: 6vw;
    height: 6vw;
    background: $theme-color;
    bottom: 7vh;
    left: 7vh;
  }
  &--seven {
    width: 2vw;
    height: 2vw;
    border: 1px solid $theme-color;
    bottom: 33vh;
    right: 17vh;
  }
}
</style>
