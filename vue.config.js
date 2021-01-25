const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        global: "window"
      })
    ]
  },
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js"
        },
        contentScripts: {
          entries: {
            "content-script": ["src/content-scripts/content-script.js"]
          }
        }
      }
    }
  }
};
