<template>
    <input :type="fieldType" :placeholder="placeholder" class="text-field" :value="modelValue" @input="updateSelf($event.target.value)">
</template>
<script>
export default {
  computed: {
    fieldType () {
      return this.password ? 'password' : 'text'
    }
  },
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    modelValue: {
      default: ""
    },
    placeholder: {
      default: ""
    }
  },
  methods: {
    updateSelf(content) {
      this.$emit("input", content);
    }
  },
  mounted() {
    console.log(this.type)
    this.$forceUpdate()
  }
}
</script>