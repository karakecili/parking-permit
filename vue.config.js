const path = require("path");

module.exports = {
  devServer: {
    port: "7000",
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vue$",
      path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
    );
  },
  lintOnSave: true,
  // publicPath: process.env.NODE_ENV === "production" ? "/parking-permit/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/style.scss";
        `,
      },
    },
  },
};
