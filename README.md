# tailwind-sidebar-expanded

Tailwind plugin for sidebar expandable.

[![npm](https://img.shields.io/npm/v/tailwind-sidebar-expanded)](https://www.npmjs.com/package/tailwind-sidebar-expanded)

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwind-sidebar-expanded

# Using Yarn
yarn add tailwind-sidebar-expanded

# Using pnpm
pnpm add tailwind-sidebar-expanded
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwind-sidebar-expanded"),
    // ...
  ],
};
```

## Usage

Use in you template `sidebar-expanded`

```html
<div class="w-4 md:sidebar-expanded:hidden">...</div>
```

## License

[MIT](./LICENSE)
