module.exports = {
  entry: "./client/index.js", // entry point in the root of project folder
  mode: "development",
  output: {
    path: __dirname, // assumes bundle.js will be in the root of the project folder
    filename: "./public/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
