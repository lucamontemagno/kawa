module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    css: "css",
    img: "img",
    videos: "videos",
    audio: "audio",
    "src/js": "js"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
