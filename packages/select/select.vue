<script>
export default {
  name:'mg-select',
  props:{
    name: String,
    value: {
      required: true
    },
    disabled: Boolean,
    popperClass: String,
    placeholder: {
      type: String,
      default() {
        return '请选择'
      }
    },
    
  },
  render(h){
    let span
    if(this.name || this.name === '') span = <span>{this.name}：</span>
    return (
      <div class={['mg-select', {'is-disabled': this.disabled}]}>
        {span}
      </div>
    )
  },
  methods:{
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
  },
  computed:{
  },
  watch:{
  },
  mounted(){
  }
}
</script>