<template>
  <div class="card" @click="showModal = true">
    <img v-if="workItem.image" :src="workItem.image" class="card__image" />
    <h2 class="card__title">{{ workItem.projectName }}</h2>
  </div>

  <Teleport to="body">
    <MyWorkModal
      :show="showModal"
      :workItem="workItem"
      @close="showModal = false"
    >
      <template #header>
        <h3>custom header</h3>
      </template>
    </MyWorkModal>
  </Teleport>
</template>

<script>
import MyWorkModal from "../../components/organisms/WorkModal.vue";

export default {
  components: {
    MyWorkModal,
  },
  props: {
    workItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  &__image {
    object-fit: cover;
    width: 100%;
    height: 325px;
    border-radius: 5px;
  }
  &__title {
    font-size: 18px;
  }
}
</style>
