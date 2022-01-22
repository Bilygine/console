<template>
  <v-card class="card elevation-0">
    <v-card-text style="padding: 0;"> </v-card-text>
  </v-card>
</template>
<script>
import IconButton from "@/components/icon-button";
import TileSource from "@/components/tile-source";
export default {
  components: {
    IconButton,
    TileSource
  },
  name: "view-sources-home",
  computed: {
    sources() {
      return this.$store.getters.getSources;
    },
    sourceCount() {
      return this.sources.length;
    }
  },
  methods: {
    openModal() {
      this.$router.push({
        path: "/sources/add"
      });
    },
    toRegister() {
      this.$router.push({
        path: "/sources/register"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-list {
  border-radius: 15px !important;
}
.card {
  background-color: $background-color-card;
  border-radius: 15px !important;
  height: 85vh !important;
  display: block;

  .content {
    max-height: 80vh !important;
    overflow: auto;
  }
}
.source-list {
  border-radius: 15px !important;
  background-color: green;
}
.sources-toolbar {
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
}
</style>
