<template>
  <v-toolbar fixed app :class="toolbarClass">
    <v-toolbar-title>
        <p class="titleContainer subheading">Bilygine <b>Console</b></p>
    </v-toolbar-title>
    <!-- <span class="display-1">{{ viewName }}</span> -->
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    toolbarClass: ["elevation-0", "toolbar"]
  }),
  computed: {
    /**
     * Split route path and extract first element
     * @returns name of current view
     */
    viewName() {
      if (!this.$route.path) {
        return "";
      }
      let paths = this.$route.path
        .split("/")
        .filter(e => e !== "/" && e !== "");
      return paths.length > 0 ? paths[0] : "";
    }
  }
};
</script>

<style lang="scss">
.toolbar {
  // background-color: $sub-color !important;
  background-color: white !important;
  height: 55px !important;
  p {
    color: white;
    text-transform: capitalize;
    // color: $background-color-toolbar;
  }
  .titleContainer {
    background-color: $sub-color;
    padding: 8px;
    margin-top: 10px;
    border-radius: 15px;
  }
}
</style>
