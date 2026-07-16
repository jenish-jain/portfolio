const terser = require('terser');
const postcss = require('postcss');
const csso = require('csso');
const autoprefixer = require('autoprefixer');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'site/static': '/' });

  eleventyConfig.addTemplateFormats('site.js');

  eleventyConfig.addExtension('site.js', {
    outputFileExtension: 'min.js',
    compile: function (contents) {
      return async () => {
        const ret = await terser.minify(contents);
        return ret.code;
      };
    },
  });

  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: function (contents, inputPath) {
      return async () => {
        const css = await postcss([autoprefixer()]).process(contents, {
          from: inputPath,
        }).css;
        const minifiedCss = csso.minify(css).css;

        return minifiedCss;
      };
    },
  });

  return {
    dir: {
      input: 'site',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  };
};
