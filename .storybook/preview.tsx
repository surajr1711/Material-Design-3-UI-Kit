import { globalDecorators } from "./decorators";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "centered",
};

// export all decorators that should be globally applied in an array
export const decorators = globalDecorators;

// add a theme button to storybook toolbar by creating globalTypes with a toolbar annotation
export const globalTypes = {
	theme: {
		// name: "Theme",
		title: "Theme",
		description: "Global theme for components",
		defaultValue: "light",
		toolbar: {
			icon: "circlehollow",
			// Array of plain string values or MenuItem shape (see below)
			items: ["light", "dark"],
			// Property that specifies if the name of the item will be displayed
			// showName: true,
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};
