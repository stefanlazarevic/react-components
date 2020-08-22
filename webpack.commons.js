const getCssLoaderConfig = isDevelopment => [
  {
    loader: "style-loader",
  },
  {
    loader: "css-loader",
    options: {
      minimize: !isDevelopment,
      sourceMap: isDevelopment,
    },
  },
];

const getSassLoaderConfig = isDevelopment => [
  ...getCssLoaderConfig(isDevelopment),
  {
    loader: "sass-loader",
    options: {
      minimize: !isDevelopment,
      sourceMap: isDevelopment,
    },
  },
];