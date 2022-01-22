<template>
  <v-hover>
    <v-list-tile
      slot-scope="{ hover }"
      :class="{ tile: true, selected: selected, hover: hover }"
      @click="select"
      avatar
    >
      <v-flex>
        <v-list-tile-action>
          <v-img class="thumbnail" :src="thumbnail" aspect-ratio="1.33">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-5>
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-list-tile-action>
      </v-flex>
      <v-flex>
        <v-list-tile-content class="text">
          {{ title }}
          {{ url }}
        </v-list-tile-content>
      </v-flex>
    </v-list-tile>
  </v-hover>
</template>
<script>
import * as mtypes from "@/store/modules/sources/mutation-types";
import IconButton from "@/components/icon-button";
export default {
  data: function() {
    return {
      hover: false,
      selected: false
    };
  },
  components: {
    "icon-button": IconButton
  },
  props: {
    id: String,
    title: String,
    url: String,
    author: String,
    downloaded: Boolean,
    date: String,
    thumbnail: String
  },
  watch: {
    selectedSource(newSource, oldSource) {
      if (oldSource === undefined) {
        this.selected = newSource.id === this.id;
      } else if (newSource === undefined) {
        this.selected = false;
      } else {
        this.selected = newSource.id === this.id;
      }
    }
  },
  computed: {
    selectedSource() {
      return this.$store.getters.getSelectedSource;
    }
  },
  methods: {
    select() {
      if (this.selected) {
        this.$store.commit(mtypes.SET_SELECTED_SOURCE, undefined);
      } else {
        let source = this.$store.getters.getSourceById(this.id);
        this.$store.commit(mtypes.SET_SELECTED_SOURCE, source);
      }
    }
  }
};
</script>
<style lang="scss">
.tile {
  padding: 10px;
  background-color: $background-color-card;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  text-overflow: ellipsis;
  p {
    font-size: 14px;
    color: #7d7d7d;
  }
  .thumbnail {
    width: 100px;
    border-radius: 15px !important;
    margin-right: 10px;
  }
}
.hover {
  background-color: #eeeeee00 !important;
  cursor: pointer;
}
.selected {
  background-color: $background-color-toolbar !important;
  color: white !important;
  cursor: pointer;
  transition: none;

  p {
    color: white;
  }
}
</style>
