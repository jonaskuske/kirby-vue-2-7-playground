import Vue from "vue";

let restrictedMethods = ["use", "mixin", "component", "filter", "directive"];

const VueGlobalMethods = {};

for (const method of restrictedMethods) {
	VueGlobalMethods[method] = function () {
		window.panel._isPanelCall = true;
		try {
			Vue[method].apply(Vue, arguments);
		} finally {
			window.panel._isPanelCall = false;
		}
	};
}

export default VueGlobalMethods;
