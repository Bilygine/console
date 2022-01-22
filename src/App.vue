<template>
  <v-app>
    <app-toolbar />
    <v-content class="app">
      <router-view />
    </v-content>
    <app-sidebar/>
  </v-app>
</template>

<script>
import AppSidebar from "@/components/app-sidebar";
import AppToolbar from "@/components/app-toolbar";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppSidebar
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");

html,
body {
  font-family: "Open Sans", sans-serif;
}

#app {
  margin: 0 auto;
  text-align: left;
  font-family: "Open Sans", sans-serif;
  background-color: $background-color;
}
.app {
  display: block;
}
</style>
