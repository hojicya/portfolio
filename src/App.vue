<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyNavigation from './components/organisms/TheNavigation.vue'
import Animxyz from '@animxyz/core'
</script>

<template>
  <MyNavigation />
  <RouterView />
</template>