<template>
  <div class="card" @click="showModal = true">
    <img v-if="workItem.image" :src="workItem.image" class="card__image" />
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
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.card {
  text-align: center;
  &__image {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    border-radius: 5px;
    object-fit: cover;
    @include tab {
      height: 28rem;
    }
    @include sp {
      height: 14rem;
    }
  }
  &__title {
    font-size: 1.8rem;
  }
}
</style>
