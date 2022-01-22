<template>
  <v-container class="container">
    <v-layout row ml-5>
      <v-flex xs6 mr-3>
        <sources-list />
      </v-flex>
      <v-flex xs6 ml-3>
        <sources-info />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SourcesList from "@/components/sources-list";
import SourcesInfo from "@/components/sources-info";
export default {
  components: {
    "sources-list": SourcesList,
    "sources-info": SourcesInfo
  },
  computed: {
    hasSelectedSource() {
      return this.$store.getters.hasSelectedSource;
    }
  },
  mounted () {
  }
};
</script>
<style lang="scss" scope>
.container {
  max-width: 100em !important;
}
</style>
