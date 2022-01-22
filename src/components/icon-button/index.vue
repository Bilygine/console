<template>
  <v-tooltip :dark="true" :open-delay="0" :close-delay="0" :bottom="bottom" top>
    <template #activator="data">
      <v-btn :color="color" class="white--text" @click="trigger" v-on="data.on">
        <font-awesome-icon :icon="icon" />
      </v-btn>
    </template>
    <span v-html="message" />
  </v-tooltip>
</template>
<script>
export default {
  data: function() {
    return {
      state: false,
      message: ""
    };
  },
  props: {
    icon: String,
    click: Function,
    color: String,
    size: Number,
    messages: Array,
    timeout: Number,
    bottom: Boolean
  },
  watch: {
    state() {
      this.computeMessage();
    }
  },
  computed: {
    style() {
      return {
        "font-size": this.size + "em"
      };
    },
    autoToggle() {
      return this.timeout > 0;
    }
  },
  methods: {
    trigger() {
      if (this.click) {
        this.click.call();
      }
      if (!this.autoToggle) {
        this.state = !this.state;
      } else {
        this.state = true;
        setTimeout(() => {
          this.state = false;
        }, 2000);
      }
    },
    computeMessage() {
      let message = "";
      if (this.messages.length === 1) {
        message = this.messages[0];
      } else if (this.messages.length > 1) {
        message = this.state ? this.messages[1] : this.messages[0];
      }
      this.message = message;
    }
  },
  mounted() {
    this.computeMessage();
  }
};
</script>
<style lang="scss">
</style>
