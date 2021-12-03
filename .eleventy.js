 module.exports = function (eleventyConfig) {

   // Copy css file
   eleventyConfig.addPassthroughCopy("./src/style.css");

   // Copy `img/` to `_site/img`
   eleventyConfig.addPassthroughCopy("src/images");

   // Copy `css/fonts/` to `_site/css/fonts`
   // Keeps the same directory structure.
   eleventyConfig.addPassthroughCopy("src/fonts");



  return {
    dir:{
      input: "src",
      output: "public",
    },
  };
};
