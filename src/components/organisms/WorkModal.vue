<template>
  <Transition name="modal">
    <div v-if="show" class="modal__mask">
      <div class="modal__container">
        <img v-if="workItem.image" :src="workItem.image" class="modal__image" />

        <div class="modal__container--text">
          <h2 class="modal__projectname">{{ workItem.projectName }}</h2>
          <p class="modal__text">
            {{ workItem.desc }}
          </p>
          <p class="modal__head">使用言語など</p>
          <p class="modal__text">{{ workItem.skills }}</p>
        </div>

        <button class="modal__close" @click="$emit('close')">
          <img src="../../assets/icon-close.svg" />
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
@import "../../styles/mixins.scss";

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
    width: 90%;
    margin: auto;
    background-color: $white;
    border-radius: 5px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
    justify-content: space-between;
    align-items: flex-start;
    @include tab {
      display: flex;
      padding: 12rem 8rem;
    }
    @include sp {
      padding: 5rem 3rem;
    }
    &--text {
      @include tab {
        padding-left: 12rem;
      }
      @include sp {
        margin-top: 4rem;
      }
    }
  }
  &__projectname {
    font-weight: 500;
    @include tab {
      font-size: 2.4rem;
    }
    @include sp {
      font-size: 2rem;
    }
  }
  &__head {
    @include tab {
      font-size: 2rem;
      margin-top: 5rem;
    }
    @include sp {
      font-size: 1.4rem;
      margin-top: 2rem;
    }
  }
  &__text {
    white-space: pre-wrap;
    @include tab {
      margin-top: 2rem;
    }
    @include sp {
      margin-top: 1rem;
    }
  }
  &__image {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    object-fit: cover;
    @include tab {
      width: 40%;
      height: 32.5rem;
    }
    @include sp {
      width: 100%;
      height: 14rem;
    }
  }
  &__close {
    position: absolute;
    padding: 0;
    background: none;
    border: none;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease;
    @include tab {
      top: 2rem;
      right: 2rem;
      width: 3.2rem;
    }
    @include sp {
      top: 1rem;
      right: 1rem;
      width: 2rem;
    }
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
