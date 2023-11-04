<template>
  <MyMainVisual class="mainvisual">
    <template v-slot:title>
      <div>
        <kinesis-element
          tag="span"
          :strength="10"
          type="depth"
          style="display: inline-block"
        >
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
      </div>
      <div>
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
      </div></template
    >
    <template v-slot:supplement>
      <kinesis-element tag="p" :strength="5" type="rotate">
        Welcome to my portfolio!
      </kinesis-element>
      <kinesis-element tag="p" :strength="3">
        Please take it easy.
      </kinesis-element>
    </template>
  </MyMainVisual>
</template>
<script>
import MyMainVisual from "../components/organisms/MainVisual.vue";

export default {
  components: {
    MyMainVisual,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.mainvisual {
  & span {
    display: inline-block;
    letter-spacing: 1vw;
  }
}
</style>
