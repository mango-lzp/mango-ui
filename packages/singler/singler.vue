<template>
  <div :class="[
    'mg-singler',
    {
      'is-disabled': disabled,
    }
    ]"
  >
    <template>
      <span>{{name}}：</span>
      <input v-bind="$attrs" @change="handleChange" :disabled='disabled' type="text">
    </template>
  </div>
</template>

<script>
export default {
  name:'mg-singler',
  props:{
    name: String,
    value: [String, Number],
    disabled: Boolean,
  },
  methods:{
    handleChange(event) {
      this.$emit('change', event.target.value);
      console.log(this.value)
    },
  }
}
</script>