<template>
  <v-container class="container">
   <v-layout v-if="!source" column row class="text-xs-center">
     Error.
   </v-layout>
   <v-layout v-else row ml-5 class="text-xs-center">
    <v-flex xs6 mr-3>
      <v-layout column>
        <v-flex>
          <text-field class="search-bar" v-model="content" placeholder="Type an occurence..."></text-field>
          <h3></h3>
        </v-flex>
        <v-flex mt-3>
          <div>
            <div v-if="words.length >= 1">{{ words.length }} matches </div>
            <div v-else>No occurences has matched</div>
          </div>
        </v-flex>
        <v-flex> 
        <word-scroller/>
      </v-flex>
    </v-layout>
  </v-flex>
  <v-flex xs6>
   <h2 class="my-title">{{ source.title }}</h2>
   <youtube :video-id="videoId" ref="youtube" :player-vars="videoVars" @playing="playing"/>
 </v-flex>
</v-layout>
</v-container>
</template>
<script>

import AnalyzesList from "@/components/analyzes-list";
import TextField from "@/components/text-field";
import TileSource from "@/components/tile-source";
import WordScroller from "@/components/word-scroller";
import * as atypes from '@/store/modules/socket/action-types'
import * as mtypes from '@/store/modules/kontrolaiphe/mutation-types'

export default {
  data: () => {
    return {
      content: "",
      videoVars: {
        autoplay: 0,
        start: 20
      },
      playing: true,
    }
  },
  components: {
    "analyzes-list": AnalyzesList,
    "text-field": TextField,
    "tile-source": TileSource,
    "word-scroller": WordScroller
  },
  watch: {
    "content": function () {
      if (this.content === "") {
        this.$store.commit(mtypes.SET_WORDS, [])
        return;
      }
      this.sendSearch()
    }
  },
  computed: {
    source() {
      return this.$store.getters.getSourceById(this.$route.params.id)
    },
    youtubeUrl() {
      return 'https://www.youtube.com/embed/' + this.youtubeId + '?start=' + this.selectedTime
    },
    videoId() {
      return this.getYoutubeId()
    },
    player() {
      return this.$refs.youtube.player;
    },
    words() {
      return this.$store.getters.getWords;
    },
  },
  methods: {
    sendSearch () {
      if (!this.source) {
        return;
      }
      let analyzes = this.$store.getters.getAnalyzesBySourceId(this.source.id)
      this.$store.dispatch(atypes.SEARCH_OCCURENCES, { analyze_id: analyzes[0].id, input: this.content})
    },
  getYoutubeId() {
    return this.$youtube.getIdFromUrl(this.source.url);
  },
   async playAt(time) {
    await this.player.playVideo();
    await this.player.seekTo(time);
  },
},
mounted () {
  this.$store.commit(mtypes.SET_WORDS, )
}
};
</script>
<style lang="scss" scoped>

::placeholder {
  color: white;
  opacity: 0.4;
}

.container {
  max-width: 100em !important;
  max-height: 80em !important;
  padding: 0;
  margin: 0;
  .my-title {
    margin-bottom: 2rem;
    color: rgb(59, 59, 68);
    padding: 0;
    font-size: 1.7rem;
  }
  .search-bar {
    background: $sub-color;
    border-radius: 1rem;
    border: none;
    color: #ffff;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 2rem;
    margin-top: 1.4rem;
    height: 4rem;
    width: 40rem;
  } 
}
</style>
