<template>
  <div>
    <router-link :to="isDisabled ? '' : path">
      <div class="sidebar-item-container">
        <div class="icon-container" :class="{ 'is-selected': isSelected}">
          <v-container bg fill-height grid-list-md pa-0 ma-0 text-xs-center>
              <v-layout row wrap align-center>
                <v-flex>
                  <font-awesome-icon
                    class="icon"
                    style="font-size: 2.3em"
                    :icon="route.meta.icon"
                  />
                  <b>{{ title | firstLetterToCaps }}</b>
                  <p>{{ subtitle }}</p>
                </v-flex>
              </v-layout>
          </v-container>
          <br>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["route"],
  data() {
    return {};
  },
  computed: {
    title() {
      return this.route.path.split("/")[1];
    },
    path() {
      return this.route.path;
    },
    subtitle() {
      return this.ready ? this.route.meta.subtitle : ''
    },
    isDisabled() {
      if (!this.ready) {
        // Params not undefined
        return false;
      }
      return this.route.meta.disabled;
    },
    isSelected() {
      if (!this.ready) {
        // Params not undefined
        return true;
      }
      let currentRoute = this.$route.fullPath.split("/")[1];
      let currentItem = this.route.path.split("/")[1];
      return currentRoute === currentItem;
    },
    ready() {
      return (this.route !== undefined && this.route.path !== undefined)
    }
  },
  filters: {
    firstLetterToCaps(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
$sidebar-background-color: #ffffff;
.v-navigation-drawer__border {
  width: 0px !important;  
}
.sidebar-navigation {
  background-color: $sidebar-background-color !important;
} 
</style>
