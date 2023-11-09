<template>
  <nav class="navigation">
    <h1 class="header">hojicya's portfolio</h1>
    <ul class="navigation__list">
      <li
        v-for="(item, i) in navigation_items"
        :key="i"
        class="navigation__item"
      >
        <MyNavigationButton :text="item.text" :to="item.to" />
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
      navigation_items: [
        {
          text: "Top",
          to: "/",
        },
        {
          text: "About",
          to: "/about",
        },
        {
          text: "Works",
          to: "/works",
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 30px;
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
