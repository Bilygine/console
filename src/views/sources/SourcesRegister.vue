<template>
  <v-container class="container">
    <v-card class="elevation-0 card">
      <v-toolbar class="sources-toolbar elevation-0">
        <div class="subheading">Register new source</div>
      </v-toolbar>
      <v-card-text>
        <p></p>
        <v-layout row justify-center>
          <v-flex xs4>
            <vs-input
              style="width: 100%"
              label="URL"
              icon="search"
              placeholder="Search"
              v-model="url"
            />
          </v-flex>
        </v-layout>
        <v-layout row justify-center pt-3>
          <v-flex xs3 class="text-xs-center">
            <v-btn
              :disabled="canSubmit || loading"
              :loading="loading"
              color="primary"
              @click="register"
              >Register</v-btn
            >
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import * as atypes from "@/store/modules/sources/action-types";
export default {
  data: () => ({
    dialog: true,
    url: "",
    loading: false
  }),
  watch: {
    dialog(val) {
      if (!val) {
        this.$router.push("/sources");
      }
    }
  },
  computed: {
    canSubmit() {
      return this.url === "";
    }
  },
  methods: {
    register() {
      this.loading = true;
      this.$store
        .dispatch(atypes.REGISTER_SOURCE, { url: this.url })
        .then(() => {
          this.loading = false;
          this.$router.push("/sources");
        });
    }
  }
};
</script>
<style lang="scss" scope>
.container {
  max-width: 100em !important;
}
.card {
  border-radius: 15px !important;
}
</style>
