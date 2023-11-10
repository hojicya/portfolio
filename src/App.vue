<template>
  <MyNavigation />
  <RouterView />
  <MyFooter />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MyNavigation from "./components/organisms/TheNavigation.vue";
import MyFooter from "./components/organisms/TheFooter.vue";

export default {
  components: {
    MyNavigation,
    MyFooter,
  },
};
</script>
