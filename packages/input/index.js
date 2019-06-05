import input from './input';

/* istanbul ignore next */
input.install = function(Vue) {
  Vue.component(input.name, input);
};

export default input;


//局部注册需要的文件