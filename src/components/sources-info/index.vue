<template>
  <div>
    <div v-if="!hasSelectedSource">
      <v-card class="card elevation-0">
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <p class="title font-weight-thin">
                Find here all information from a <b>source</b>.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
    <div v-else>
      <v-card class="card elevation-0">
        <v-toolbar class="sources-toolbar elevation-0">
          <h1 class="font-weight-thin">{{ title }}</h1>
          <v-spacer />
          <icon-button
            icon="trash-alt"
            color="red"
            :size="1.8"
            :messages="['<b>Delete this source</b>']"
            :timeout="-1"
            :click="deleteSource"
          />
        </v-toolbar>
        <v-toolbar flat color="white">
      <v-toolbar-title>Analyzes ({{ getAnalyzes.length }})</v-toolbar-title>
      <v-spacer></v-spacer>
      <icon-button
            icon="cog"
            color="green"
            :bottom="true"
            :size="1.8"
            :messages="['<b>Start Analyze</b>']"
            :timeout="-1"
            :click="runAnalyze"
          />
    </v-toolbar>
    <v-card-text>
      <v-data-table
      class="analyzes-list"
        :pagination.sync='pagination'
          :items="getAnalyzes"
          :expand="expand"
          item-key="name"
        >
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded">  
              <td class="text-xs-left">{{ props.item.time.startedAt | date}}</td>
              <td class="text-xs-right">{{ props.item.steps.length }} steps</td>
              <td class="text-xs-right">{{ props.item.time.elapsed | msToSeconds }}</td>
              <td class="text-xs-right" v-if="props.item.status === 'RUNNING'">
                <v-progress-circular
                  :size="18"
                  indeterminate
                  color="orange"
                ></v-progress-circular>
              </td>
              <td v-else class="text-xs-right"><font-awesome-icon 
                :icon="analyzeStatusIcon(props.item)"
                :color="analyzeStatusColor(props.item)"
              />
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import * as atypes from "@/store/modules/sources/action-types";
import IconButton from "@/components/icon-button";
import TileSource from "@/components/tile-source";
import axios from 'axios';

const moment = require('moment');

export default {
  components: {
    IconButton,
    TileSource
  },
  data: function () {
    return {
      expand: false,
      pagination: { rowsPerPage: 5 }
    }
  },
  name: "view-sources-home",
  computed: {
    title() {
      return this.selectedSource.title;
    },
    selectedSource() {
      return this.$store.getters.getSelectedSource;
    },
    hasSelectedSource() {
      return this.$store.getters.hasSelectedSource;
    },
    getAnalyzes() {
      return this.$store.getters
      .getAnalyzesBySourceId(this.selectedSource.id)
      .sort((a, b) => {
        if (a.time.startedAt < b.time.startedAt) {
          return 1;
        }
        if (a.time.startedAt > b.time.startedAt) {
          return -1;
        }
        return 0;
      })
    }
  },
  methods: {
    openModal() {
      this.$router.push({
        path: "/sources/add"
      });
    },
    deleteSource() {
      this.$store.dispatch(atypes.DELETE_SOURCE, this.selectedSource)
    },
    analyzeStatusIcon(analyze) {
      let status = analyze.status
      if(status === 'FAILURE') {
        return 'exclamation-circle'
      } else if (status === 'SUCCEED') {
        return 'check'
      }
    },
    analyzeStatusColor(analyze) {
      let status = analyze.status
      if(status === 'FAILURE') {
        return 'red'
      } else if (status === 'SUCCEED') {
        return 'green'
      }
    },
    runAnalyze() {
      var instance = axios.create({
        baseURL: process.env.VUE_APP_API_SERVER || "http://localhost:8181",
        /* other custom settings */
      });

      instance.post("/api/source/" + this.selectedSource.id + "/analysis", {
        language_code: 'fr-FR',
        sample_rate_hertz: 16000,
        encoding: 'LINEAR16'
      })
    }
  },
  filters: {
    msToSeconds: function (value) {
      if (!value) return ''
      return Math.trunc(value / 1000) + 's'
    },
    date: function (value) {
      return moment(value).format('YYYY-MM-DD hh:mm:ss')
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  background-color: $background-color-card;
  height: 90vh !important;
  display: block;

  .content {
    height: 50em !important;
    overflow: auto;
  }
}

.sources-toolbar {
  background-color: white;
  color: #3D3C4A;
}
</style>
