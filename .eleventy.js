module.exports = function (eleventyConfig) {
  // Pass through the compiled CSS
  eleventyConfig.addPassthroughCopy("src/css/output.css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    pathPrefix: "/linktree/", // <-- important for subpath deployment
  };
};
