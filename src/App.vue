<template>
  <MyNavigation />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MyNavigation from "./components/organisms/TheNavigation.vue";

export default {
  components: {
    MyNavigation,
  },
};
</script>
