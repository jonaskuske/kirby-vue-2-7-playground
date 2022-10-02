import Vue from "vue";
import DemoSection from "./components/DemoSection.vue";

console.log("Trying to illegaly call Vue.component...");
Vue.component("my-component", {});

window.panel.plugin("getkirby/pluginkit", {
  sections: {
    demo: DemoSection
  }
});
