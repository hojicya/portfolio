<template>
  <section class="top">
    <kinesis-container class="top__content">
      <div>
        <MyBackgroundCircle />
      </div>

      <div class="top__text__content">
        <h1>
          <kinesis-element tag="span" :strength="10" type="depth">
            h
          </kinesis-element>
          <kinesis-element tag="span" :strength="3"> o </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="rotate">
            j
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth_inv">
            i
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth">
            c
          </kinesis-element>
          <kinesis-element tag="span" :strength="3"> y </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="rotate">
            a
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth_inv">
            '
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth">
            s
          </kinesis-element>
        </h1>
        <h1>
          <kinesis-element tag="span" :strength="10" type="rotate">
            p
          </kinesis-element>
          <kinesis-element tag="span" :strength="3"> o </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth_inv">
            r
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="rotate">
            t
          </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="depth">
            f
          </kinesis-element>
          <kinesis-element tag="span" :strength="3" type="rotate">
            o
          </kinesis-element>
          <kinesis-element tag="span" :strength="10"> l </kinesis-element>
          <kinesis-element tag="span" :strength="10" type="rotate">
            i
          </kinesis-element>
          <kinesis-element tag="span" :strength="3"> o </kinesis-element>
        </h1>

        <div class="top__text__content--supplement">
          <kinesis-element tag="p" :strength="5" type="rotate">
            Welcome to my portfolio!
          </kinesis-element>
          <kinesis-element tag="p" :strength="3">
            Please take it easy.
          </kinesis-element>
        </div>
      </div>
    </kinesis-container>
  </section>
</template>
<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import MyBackgroundCircle from "../components/organisms/TheBackgroundCircle.vue";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    MyBackgroundCircle,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.top {
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
  &__text__content {
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
    & span {
      display: inline-block;
      letter-spacing: 1vw;
    }
    &--supplement {
      margin-top: 20px;
    }
  }
}
</style>
