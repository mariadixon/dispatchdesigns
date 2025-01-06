const markdownIt = require("markdown-it");

const markdownItOptions = {
    html: true
};

module.exports = function (eleventyConfig) {
    // Passthrough copy for static files
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("src/topics");
    eleventyConfig.addPassthroughCopy("pagefind");

    // Markdown library options
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

    // Example collection: Featured posts
    eleventyConfig.addCollection("featured", (collectionApi) => {
        return collectionApi.getAll()
            .filter(item => item.data.tags && item.data.tags.includes("feature"))
            .slice(0, 1); // Limit to one post
    });

    // Example collection: Authors
    eleventyConfig.addCollection("authors", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/_data/authors/*.json");
    });

    // Fetching external data as a collection
    eleventyConfig.addCollection("externalData", async function () {
        try {
            const fetch = (await import("node-fetch")).default; // Use dynamic import
            const response = await fetch("https://api.example.com/data");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching external data:", error);
            return [];
        }
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            includes: "_includes/layouts",
            output: "_site"
        }
    };
};
