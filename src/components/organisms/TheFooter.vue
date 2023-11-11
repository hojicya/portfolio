<template>
  <footer class="footer">
    <p>&copy; 2023 Miyuki Shimura</p>
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.footer {
  text-align: center;
  @include tab {
    padding: 10rem 10rem 6rem;
    font-size: 1.4rem;
  }
  @include sp {
    padding: 10rem 0 4rem;
    font-size: 1rem;
  }
}
</style>
