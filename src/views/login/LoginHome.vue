<template>
  <v-container class="container" fill-height>
    <v-layout>
      <v-layout column row wrap>
        <v-flex class="text-xs-center">
          <h1 class="font-weight-thin">Let's enter.</h1>
          <h3 class="font-weight-thin">Type your beta access credentials.</h3>
        </v-flex>
        <v-flex class="text-xs-center">
          <text-field class="search-bar" v-model="username" placeholder="Username"/>
        </v-flex>
        <v-flex class="text-xs-center">
          <text-field class="search-bar" v-model="password" :type="'password'" placeholder="Password"/>
        </v-flex>
        <v-flex class="text-xs-center">
          <v-btn @click="connect" color="#253FE1" class="white--text" type="filled" style="margin-top:20px;">Connect</v-btn>
        </v-flex>
      </v-layout>
      </v-layout>
  </v-container>
</template>
<script>
import TextField from "@/components/text-field";

export default {
  data: () => {
    return {
      username: '',
      password: '',
      code: 1834943123
    }
  },
  components: {
    "text-field": TextField,
  },
  methods: {
    connect() {
      if (this.password.hashCode() === this.code) {
        this.$router.push('sources')
        localStorage.bypass = "OK";
      }
    }
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
  margin-top: 12em;
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
    font-size: 1rem;
    font-weight: bold;
    padding-left: 2rem;
    padding-right: 5rem;
    margin-top: 1.4rem;
    height: 3.3rem;
    width: 35rem;
  } 
}
</style>
