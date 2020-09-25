const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const tailwindCSS = require('tailwindcss')
const postcssURL = require("postcss-url")
const postcssInputRange = require("postcss-input-range")

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
    plugins: [
      postcssImport,
      postcssURL,
      postcssInputRange,
      autoprefixer,
      postcssNested,
      tailwindCSS(),
      production && cssnano({
        preset: [
          'default',
          {discardComments: {removeAll: true}},
        ],
      }),
    ].filter(Boolean)
}