<template>
  <div :class="['mg-input', {'is-disabled': disabled}]">
    <template>
      <span v-if='name || name === ""'>{{name}}：</span>
      <input
        ref="input"
        class="mg-input-inner"
        v-bind="$attrs"
        @input='handleInput'
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
        :disabled='disabled'
        type="text"
      >
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name:'mg-input',
  props:{
    name: String,
    value: [String, Number],
    disabled: Boolean,
  },
  methods:{
    setInputValue() {
      const input = this.$refs.input
      if (!input) return
      if (input.value === this.inputValue) return
      input.value = this.inputValue
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleInput(event){
      if (event.target.value === this.inputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      this.$nextTick(this.setInputValue)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
  },
  computed:{
    inputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },
  },
  watch:{
    inputValue() {
      this.setInputValue()
    }
  },
  mounted(){
    this.setInputValue()
  }
}
</script>