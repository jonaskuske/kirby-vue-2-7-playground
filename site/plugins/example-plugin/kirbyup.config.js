export default {
  extendViteConfig: {
    build: {
      rollupOptions: {
        output: {
          globals: {
            vue: "window.panel.Vue2",
          },
        },
      },
    },
  },
};
