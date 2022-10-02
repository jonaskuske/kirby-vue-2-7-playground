import Vue from "vue";
import VueGlobalMethods from "@/config/VueGlobalMethods.js";

import Api from "./config/api.js";
import App from "./fiber/app.js";
import Errors from "./config/errors.js";
import Events from "./config/events.js";
import Fiber from "./fiber/plugin.js";
import Helpers from "./helpers/index.js";
import I18n from "./config/i18n.js";
import Libraries from "./libraries/index.js";
import Plugins from "./config/plugins.js";
import store from "./store/store.js";

import Portal from "@linusborg/vue-simple-portal";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.config.devtools = true;

VueGlobalMethods.use(Errors);
VueGlobalMethods.use(Helpers);
VueGlobalMethods.use(Libraries);

// Global styles
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/animations.css";

// Load components
import "./config/components.js";

// Load utilities after components
// to increase specificity
import "./styles/utilities.css";

VueGlobalMethods.use(Plugins);
VueGlobalMethods.use(Events);
VueGlobalMethods.use(I18n);
VueGlobalMethods.use(Fiber);
VueGlobalMethods.use(Api, store);

VueGlobalMethods.use(Portal);
VueGlobalMethods.use(Vuelidate);

new Vue({
	store,
	created() {
		window.panel.$vue = window.panel.app = this;
		window.panel.plugins.created.forEach((plugin) => plugin(this));
		this.$store.dispatch("content/init");
	},
	render: (h) => h(App)
}).$mount("#app");
