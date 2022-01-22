<template>
  <v-container class="container" fill-height>
    <v-layout column row wrap>
      <v-flex class="text-xs-center">
        <h2 class="my-title">Search and select an audio source.</h2>
      </v-flex>
      <v-flex class="text-xs-center">
        <text-field class="search-bar" v-model="content" placeholder="Search by title..."/>
      </v-flex>
      <v-flex style="margin-top: 1rem" class="text-xs-center">
        <h3 v-if="content !== ''">
          <div v-if="results.length >= 1">{{ results.length }} matches </div>
          <div v-else>No source has matched</div>
        </h3>
      </v-flex>
      <v-flex class="text-xs-center">
         <v-list class="content" three-line>
          <template v-for="(item, index) in results">
            <div v-bind:key="index" class="source" @click="$router.push('/kontrolaiphe/' + item.id)">
              <h2> {{ item.title }} </h2>
              {{ item.url }}
              <br> ({{ item.id }})
            </div>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AnalyzesList from "@/components/analyzes-list";
import TextField from "@/components/text-field";
import TileSource from "@/components/tile-source";

import * as atypes from '@/store/modules/socket/action-types'

export default {
  data: () => {
    return {
      content: ""
    }
  },
  components: {
    "analyzes-list": AnalyzesList,
    "text-field": TextField,
    "tile-source": TileSource
  },
  watch: {
    "content": function () {
      this.sendSearch()
    }
  },
  computed: {
    results () {
      let results = this.$store.getters.getResults
      return this.$store.getters.getSources.filter(source => results.includes(source.id))
    }
  },
  methods: {
    sendSearch () {
      this.$store.dispatch(atypes.SEARCH_SOURCES, this.content)
    }
  },
  mounted () {
    this.sendSearch()
  }
};
</script>
<style lang="scss" scoped>

::placeholder {
  color: white;
  opacity: 0.4;
}
.container {
  max-width: 60em !important;
  max-height: 80em !important;
  padding: 0;
  .content {
    margin-top: 2rem;
    max-height: 45vh !important;
    overflow: auto;
  }
  .my-title {
    color: rgb(78, 77, 92);
    padding: 0;
    margin-top: 1rem;
  }
  .search-bar {
    background: $sub-color;
    border-radius: 1rem;
    border: none;
    color: #ffff;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 2rem;
    padding-right: 5rem;
    margin-top: 1.4rem;
    height: 5rem;
    width: 40rem;
  } 
}


.source {
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.2rem; 
    cursor: pointer;

  &:hover {
    background: $hovered;
    color: $sub-color;
    transition-delay: 50ms;
  }
}

</style>
