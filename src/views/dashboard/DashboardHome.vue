<template>
  <v-container>
    <v-layout align-start column fill-height/>
  </v-container>
</template>
<script>
export default {
  name: 'dashboard-home',
  data: () => {
    return {
      stats: [
        {
          title: 'Medias',
        },
        {
          title: 'Analyzed'
        },
        {
          title: 'Running'
        },
        {
          title: 'Time'
        }
      ]
    }
  },
  computed: {
    sources() {
      return this.$store.getters.getSources;
    },
    analyzes() {
      return this.$store.getters.getAnalyzes;
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
</style>
