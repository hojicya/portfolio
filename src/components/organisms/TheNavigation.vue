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
.header {
  font-size: 20px;
  font-weight: 500;
}
.navigation {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 30px 30px;
  background: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    margin: 0 2vw;
  }
}
</style>
