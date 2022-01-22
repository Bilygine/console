<template>
  <v-layout row justify-center>
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Register a new source</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex>
                <v-text-field label="Youtube URL" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" flat @click="addSources">ADD</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import ADD_SOURCE from "@/store/modules/sources/action-types";
export default {
  data: () => ({
    dialog: true
  }),
  watch: {
    dialog(val) {
      if (!val) {
        this.$router.push("/sources");
      }
    }
  },
  methods: {
    addSources() {
      this.$store.dispatch("ADD_SOURCE", {
        id: "423",
        title: "An amazing source registred",
        url: "https://youtube.com/video/x9adKzo",
        author: "AnAuthor",
        downloaded: true,
        date: "02/21/2019"
      });
      this.dialog = false;
    }
  }
};
</script>
