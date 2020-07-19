export let Vue;
//照着网上的教程写的..实在不会 -_-|||
function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      // 在vue原型上注册$store
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

class Store {
  constructor(options) {
    this.$option = options;

    // 使用vue实例使state响应式
    this.state = new Vue({
      data: options.state,
    });

    // 保存options里的mutations,actions,getters
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};

    // 实现getters
    this.getters = {};
    // 使getters响应式
    Object.keys(options.getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return options.getters[key](this.state);
        },
        enumerable: true,
      });
    });
  }

  // 实现commit方法
  commit(type, pyload) {
    this.mutations[type](this.state, pyload);
  }

  // 实现dispatch方法
  dispatch(type, pyload) {
    this.actions[type](
      {
        state: this.state,
        commit: this.commit.bind(this),
      },
      pyload
    );
  }
}

export default { Store, install };
