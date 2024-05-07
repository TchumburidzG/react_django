// webpack.config.js

module.exports = {
  // Other webpack configuration...

  resolve: {
    fallback: {
      "node:http": require.resolve("stream-http"),
      "node:buffer": require.resolve("buffer"),
      'node:fs': false, // or require.resolve('fs'),

    },
  },

  // Other webpack configuration...
};
