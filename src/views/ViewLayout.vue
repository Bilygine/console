<template>
  <div>
    <div class="view">
      <transition name="fade" mode="out-in">
        <router-view name="page" />
      </transition>
    </div>
  </div>
</template>
<script>
import * as atypes from '@/store/modules/socket/action-types'
export default {
  name: "view-layout",
  data: () => ({
    showModal: false
  }),
  watch: {
    "$route.meta"({ showModal }) {
      this.showModal = showModal;
    }
  },
  mounted() {
   this.$store.dispatch(atypes.GET_SOURCES)
   this.$store.dispatch(atypes.GET_ANALYZES)
  }
};
</script>
<style lang="scss">
$title-color: #ffffff;
.view {
  left: 0;
  span {
    text-transform: capitalize;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
  transition-duration: 175ms !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
