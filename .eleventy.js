const markdownIt = require("markdown-it");
const markdownItOptions = {
    html: true
};

module.exports = function(eleventyConfig) {
    // Copy static files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("src/topics");

    // Set Markdown library with options
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

    return {
        dir: {
            input: "src",
            includes: "_includes", // This includes the "layouts" folder inside "_includes"
            output: "_site"
        }
    };
};
