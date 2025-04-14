const isProduction = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const fs = require("fs");
const path = require("path");

const pluginSEO = require("eleventy-plugin-seo");
const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function (eleventyConfig) {
  // Passthrough copies
  // Data global
  eleventyConfig.addGlobalData("env", {
    NODE_ENV: process.env.NODE_ENV || "development",
  });

  if (isDev) {
    eleventyConfig.setBrowserSyncConfig({
      logLevel: "info",
      notify: false,
      ui: false,
      ghostMode: false,
    });
    // Desactivar cache para desarrollo
    eleventyConfig.setUseGitIgnore(false);
  }
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/sw.js");
  eleventyConfig.addPlugin(eleventyGoogleFonts);
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "js/bootstrap.min.js",
    "node_modules/bootstrap/dist/css/bootstrap.min.css":
      "css/bootstrap.min.css",
  });
  // Configuracion solo para production
  // Minify HTML
  if (isProduction) {
    const htmlmin = require("html-minifier");
    const CleanCSS = require("clean-css");
    const UglifyJS = require("uglify-js");
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
      return content;
    });

    eleventyConfig.addFilter("cssmin", function (code) {
      return new CleanCSS({}).minify(code).styles;
    });

    // Js minificacion
    eleventyConfig.addFilter("jsmin", function (code) {
      return UglifyJS.minify(code).code;
    });
  }

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
