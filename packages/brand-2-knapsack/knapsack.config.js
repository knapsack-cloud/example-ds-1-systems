const { KnapsackReactRenderer } = require("@knapsack/renderer-react");
const { configureKnapsack } = require("@knapsack/app");
const { join } = require("path");
const { version } = require("./package.json");

module.exports = configureKnapsack({
  data: join(__dirname, "./data"),
  dist: join(__dirname, "./dist"),
  public: join(__dirname, "./public"),
  version,
  templateRenderers: [
    new KnapsackReactRenderer({
      webpackConfig: {
        module: {
          rules: [],
        },
      },
    }),
  ],
  plugins: [],
  cloud: {
    siteId: "ks-example-ds-1-systems-brand-2",
    repoRoot: join(__dirname, "../.."),
  },
});
