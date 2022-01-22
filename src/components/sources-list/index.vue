<template>
  <v-card class="card elevation-0">
    <v-card-text style="padding: 0;">
      <v-toolbar class="sources-toolbar elevation-0">
        <span class="title">Audio sources ({{ sourceCount }})</span>
        <v-spacer />
        <icon-button
          icon="plus"
          color="blue"
          :size="3"
          :messages="['<b>Add a new source</b>']"
          :timeout="-1"
          :click="toRegister"
        />
      </v-toolbar>
      <v-list class="content" three-line>
        <template v-for="(item, index) in sources">
          <tile-source
            :key="index"
            :id="item.id"
            :title="item.title"
            :url="item.url"
            :author="item.author"
            :downloaded="item.downloaded"
            :date="item.date"
            :thumbnail="item.thumbnail"
            :status="item.status"
          />
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script src="https://unpkg.com/v-tooltip"></script>
<script>
import * as atypes from "@/store/modules/sources/action-types";
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
  height: 90vh !important;
  display: block;

  .content {
    max-height: 60vh !important;
    overflow: auto;
  }
}
.source-list {
  border-radius: 15px !important;
  background-color: green;
}
.sources-toolbar {
  background-color: white;
  color: rgb(62, 60, 74);
}

</style>
