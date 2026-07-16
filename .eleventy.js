const terser = require('terser');
const postcss = require('postcss');
const csso = require('csso');
const autoprefixer = require('autoprefixer');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'site/static': '/' });

  // Renders `**bold**` markdown segments as <strong> — used for resume
  // highlight/description text. Escapes everything else first since the
  // filter's output is marked `| safe` in templates.
  eleventyConfig.addFilter('mdBold', (text) => {
    if (!text) return '';
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  });

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
