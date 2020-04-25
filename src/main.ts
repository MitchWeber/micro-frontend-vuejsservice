import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

let vueInstance: Vue | null;

// eslint-disable @typescript-eslint/ban-ts-ignore, @typescript-eslint/no-unused-vars
// @ts-ignore
window.renderVueJsService = (containerId: string) => {
  const id = `${containerId}`;
  vueInstance = new Vue({
    render: (h) => h(App),
  }).$mount();
  // @ts-ignore
  document.getElementById(id).appendChild(vueInstance.$el);
};

// @ts-ignore
window.unmountVueJsService = (containerId: string) => {
  if (vueInstance) {
    vueInstance.$destroy();
  }
};
