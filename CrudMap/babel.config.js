module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "sourceType": "unambiguous",
    "plugins": [
      "syntax-trailing-function-commas",
      "@babel/plugin-transform-flow-strip-types",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-regenerator",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-transform-runtime",
      [
        "@babel/plugin-transform-spread",
        {
          "loose": true
        }
      ]
    ],
  }
  
  
};
