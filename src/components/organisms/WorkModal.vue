<template>
  <Transition name="modal">
    <div v-if="show" class="modal__mask">
      <div class="modal__container">
        <div class="modal__container--text">
          <h2 class="modal__projectname">{{ workItem.projectName }}</h2>
          <p class="modal__text">
            {{ workItem.desc }}
          </p>
          <p class="modal__head">使用言語など</p>
          <p class="modal__text">{{ workItem.skills }}</p>
        </div>
        <img v-if="workItem.image" :src="workItem.image" class="modal__image" />

        <button class="modal__close" @click="$emit('close')">
          <img src="src/assets/icon-close.svg" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    workItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.modal {
  &__mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }
  &__container {
    position: relative;
    display: flex;
    width: 90%;
    margin: auto;
    padding: 120px 80px;
    background-color: $white;
    border-radius: 5px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
    justify-content: space-between;
    align-items: flex-start;
    &--text {
      padding-right: 160px;
    }
  }
  &__projectname {
    font-size: 24px;
    font-weight: 500;
  }
  &__head {
    font-size: 20px;
    margin-top: 40px;
  }
  &__text {
    margin-top: 20px;
    white-space: pre-wrap;
  }
  &__image {
    width: 40%;
    height: 325px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    object-fit: cover;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    padding: 0;
    background: none;
    border: none;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal__container,
.modal-leave-to .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
