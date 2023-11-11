<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(navigationItem, i) in navigationItems"
        :key="i"
        class="navigation__item"
      >
        <MyNavigationButton :navigationItem="navigationItem" />
      </li>
    </ul>
  </nav>
</template>

<script>
import MyNavigationButton from "../../components/atoms/Buttons/NavigationButton.vue";

export default {
  components: {
    MyNavigationButton,
  },
  data() {
    return {
      navigationItems: [
        {
          text: "Top",
          scroll: "#top",
        },
        {
          text: "About",
          scroll: "#about",
        },
        {
          text: "Works",
          scroll: "#works",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.navigation {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  @include tab {
    padding: 3rem 5rem;
  }
  @include sp {
    padding: 1.5rem 2.5rem;
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    + .navigation__item {
      @include tab {
        margin-left: 5rem;
      }
      @include sp {
        margin-left: 2rem;
      }
    }
  }
}
</style>
