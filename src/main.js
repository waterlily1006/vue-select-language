import VueSelectLanguage from "./VueSelectLanguage.vue";
import Vue from "vue";

Vue.config.productionTip = false;

const VSLang = {
    install(Vue) {
        Vue.component(VueSelectLanguage.name, VueSelectLanguage);
    }
};

import App from "./App.vue";
Vue.component(VueSelectLanguage.name, VueSelectLanguage);
new Vue({
    render: h => h(App)
}).$mount("#app");

export default VSLang;
