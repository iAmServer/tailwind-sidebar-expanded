const plugin = require("tailwindcss/plugin");

const sideBarExpanded = plugin(({ addVariant, e }) => {
  addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`
    );
  });
});

module.exports = sideBarExpanded;
