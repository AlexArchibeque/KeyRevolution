const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./javascript/index.js",
  output: {
    path: path.resolve(__dirname, "./util_files"),
    filename: "bundle.js"
  },
};
