import Singler from './singler';

/* istanbul ignore next */
Singler.install = function(Vue) {
  Vue.component(Singler.name, Singler);
};

export default Singler;


//局部注册需要的文件