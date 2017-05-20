const Hoist = {
  install(Vue) {
    // Register a global custom directive called v-hoist
    Vue.directive('hoist', {
      // When the bound element is inserted into the DOM
      inserted: (el, binding) => {
        const target = binding.arg ? document.getElementById(binding.arg) : document.body;

        if (!target) {
          return;
        }

        if (binding.modifiers.prepend && target.firstChild) {
          target.insertBefore(el, target.firstChild);
        } else {
          target.appendChild(el);
        }
      },
    });
  },
};

export default Hoist;
