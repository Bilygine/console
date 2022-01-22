<template>
    <div v-if="selectedRoute.meta !== undefined && !selectedRoute.meta.hidden" class="sidebar" align-center justify-center pa-0 text-xs-center>
      <v-layout row justify-center>
        <v-flex
          xs2
          justify-center
          v-for="(route, index) in serviceRoutes"
          v-bind:key="index"
          style="flex-basis: 110px"
        >
          <app-sidebar-item :route="route" />
        </v-flex>
        <v-flex xs2 justify-center style="flex-basis: 15px;">
         <v-divider :vertical="true" />
        </v-flex>
        <v-flex
          xs2
          justify-center
          v-for="(route, index) in appRoutes"
          v-bind:key="index + serviceRoutes.length"
          style="flex-basis: 110px"
        >
          <app-sidebar-item :route="route" />
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import AppSidebarItem from "@/components/app-sidebar-item";
export default {
  components: {
    "app-sidebar-item": AppSidebarItem
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(
        route => route.path !== "/" && route.path !== "*" && !route.meta.hidden
      );
    },
    selectedRoute() {
      return this.$route;
    },
    sidebarClasses() {
      return {
        sidebar: true,
        "is-closed": false
      };
    },
    toggleClasses() {
      return {
        "sidebar-toggle": true,
        "is-closed": false
      };
    },
    serviceRoutes() {
      return this.routes.filter(route => !route.meta.application)
    },
    appRoutes() {
      return this.routes.filter(route => route.meta.application)
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
$color__bg: $sub-color;
$color__sidebar: white;
$color__toggle: $sub-color;

.sidebar {
  bottom: 0px;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
  width: 100%;
  left:0;
  bottom: 0;
  height: 18vh;
  transition: 0.3s;
  .sidebar-item-container {
    left: 0;
    right: 10;
    width: 10px !important;
    color: rgb(202, 202, 202);
    .icon-container {
      height: 100px;
      width: 100px;
      display: flex;
      justify-content: center;
      padding: 0;
      // border: 2px solid $background-color;
      border-radius: 10%;
      .icon {
        margin: 13px;
      }
      &:hover {
        background-color: #eeeeee;
      }
      &.is-selected {
        color: white;
        background-color: $sub-color;
      }
    }
  }
}
</style>
