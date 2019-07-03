<script>
export default {
  name:'mg-input',
  inheritAttrs: false,//取消默认属性继承
  props:{
    name: String,
    value: [String, Number],
    disabled: Boolean,
  },
  render(h){
    let span
    if(this.name || this.name === '') span = <span>{this.name}：</span>
    return (
      <div class='mg-input'>
        {span}
        <input
          ref="input"
          class="mg-input-inner"
          attrs ={this.$attrs}
          on-input={this.handleInput}
          on-change={this.handleChange}
          on-blur={this.handleBlur}
          on-focus={this.handleFocus}
          type="text"
        />
        {this.$slots.default /*等价于<slot></slot>*/}
      </div>
    )
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