import React from "react";
import { ThemeProvider } from "styled-components";
import { DecoratorFn } from "@storybook/react";

import { lightTheme, darkTheme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/GlobalStyle";

const withTheme: DecoratorFn = (StoryFn, context) => {
	// Get the active theme value from the story parameter
	const theme = context.parameters.theme || context.globals.theme;
	const storyTheme = theme === "light" ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={storyTheme}>
			<GlobalStyle />
			<StoryFn />
		</ThemeProvider>
	);
};

export const globalDecorators = [withTheme];
