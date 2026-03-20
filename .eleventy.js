module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/output.css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    pathPrefix: "/linktree/", // needed for project site
  };
};