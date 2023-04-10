module.exports = {
	stories: ["../src/components/Button/*.stories.mdx", "../src/components/Button/*.stories.@(js|jsx|ts|tsx)"],
	// stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	staticDirs: ["../public"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};
