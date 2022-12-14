module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/api": "" },
        logLevel: "debug",
      },
    },
  },
};
