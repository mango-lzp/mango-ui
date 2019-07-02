<script>
export default {
  name:'mg-option',
  props:{
    value: {
      required: true
    },
    disabled: Boolean,
  },
  render(h){
    return (
      <li
        on-mouseenter={this.hoverItem}
        on-click={this.selectOptionClick}
        class="mg-select-dropdown__item"
        v-show={this.visible}
        class={{
          'selected': this.itemSelected,
          'is-disabled': this.disabled,
          'hover': this.hover
        }}>
        {this.$slots.default}
      </li>
    )
  },
  data(){
    return{
      hover: false
    }
  },
  methods:{
    selectOptionClick() {
      if (this.disabled !== true) {
        this.dispatch('MgSelect', 'handleOptionClick', [this, true]);
      }
    },
    hoverItem() {
      if (!this.disabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
  },
  computed: {
    isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },

    currentValue() {
      return this.value || this.label || '';
    },

    itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
  }
}
</script>