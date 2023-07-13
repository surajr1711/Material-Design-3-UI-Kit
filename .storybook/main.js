module.exports = {
  // stories: ["../src/components/Divider/*.stories.mdx", "../src/components/Divider/*.stories.@(js|jsx|ts|tsx)"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};