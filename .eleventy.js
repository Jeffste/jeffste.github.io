 module.exports = function (eleventyConfig) {

   // Copy css file
   eleventyConfig.addPassthroughCopy("./src/style.css");

   // Copy `img/` to `_site/img`
   eleventyConfig.addPassthroughCopy("src/images");


  return {
    dir:{
      input: "src",
      output: "public",
    },
  };
};
