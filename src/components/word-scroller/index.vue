<template>
 <virtual-list :size="20" :remain="16">
  <v-container grid-list-md>
  <v-layout row wrap>
    <v-flex v-for="item of $parent.words" v-bind:key="item.id" xs2>
    <div v-bind:class="['box', item.id === selectedWord ? 'isActive' : 'isNotActive' ]" v-bind:key="item.id" @click="clickItem(item);">
      <b><font-awesome-icon icon="clock"/>
       {{ formattedTime(item.time) }}
      <br>
      <p v-html="highlight(item.word)"/></b>
    </div>
  </v-flex>
  </v-layout>
</v-container>
</virtual-list>
</template>
<script>

export default {
  data: () => {
    return {
      selectedWord: "",
    }
  },
  methods: {
    clickItem(item) {
      if (this.selectedWord !== item.id) {
        this.selectWord(item.id); 
      } 
      this.$parent.playAt(item.time - 1);
    },
    highlight(word) {
     return word.replace(this.$parent.content, '<b style="color: rgb(254, 107, 3)">' + this.$parent.content + '</b>')
   },
   selectWord(j) {
    this.selectedWord = j;
  },
  formattedTime(time) {
    var seconds = Math.floor(time),
    hours = Math.floor(seconds / 3600);
    seconds -= hours*3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes*60;

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  },
}
};
</script>

<style lang="scss" scoped>
.box {
  max-width: 10rem !important; 
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

.isActive {
  background: $hovered;
}

</style>
