import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle(
	({ theme }) => css`
		/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"); */

		/* material icons (regular and outlined) */
		/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
		@import url("https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"); */

		/* WEB FONT. Material symbols (new variable version of material icons) */
		/* @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"); */

		// LOCALLY HOSTED. Roboto fonts.
		@font-face {
			font-family: "Roboto";
			font-weight: 400;
			font-style: normal;
			// font-display: swap;
			font-display: fallback; //https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering
			src: local("Roboto"), url("./fonts/roboto-v30-latin-regular.woff2") format("woff2"),
				// Chrome 26+, Opera 23+, Firefox 39+
				url("./fonts/roboto-v30-latin-regular.woff") format("woff"); // Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+
		}
		@font-face {
			font-family: "Roboto";
			font-weight: 500;
			font-style: normal;
			// font-display: swap;
			font-display: fallback; // https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering
			src: local("Roboto"), url("./fonts/roboto-v30-latin-500.woff2") format("woff2"),
				// Chrome 26+, Opera 23+, Firefox 39+
				url("./fonts/roboto-v30-latin-500.woff") format("woff"); // Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+
		}

		// LOCALLY HOSTED. Material icons
		@font-face {
			font-family: "Material Icons";
			src: local("Material Icons"), local("MaterialIcons-Regular"), url("./icons/MaterialIcons.woff2") format("woff2"),
				url("./icons/MaterialIcons.woff") format("woff"), url("./icons/MaterialIcons.ttf") format("truetype");
		}
		@font-face {
			font-family: "Material Icons Outlined";
			src: local("Material Icons Outlined"), local("MaterialIconsOutlined-Regular"),
				url("./icons/MaterialIconsOutlined.woff2") format("woff2"),
				url("./icons/MaterialIconsOutlined.woff") format("woff"),
				url("./icons/MaterialIconsOutlined.ttf") format("truetype");
		}
		.material-icons {
			font-family: "Material Icons";
		}
		.material-icons-outlined {
			font-family: "Material Icons Outlined";
		}
		.material-icons,
		.material-icons-outlined {
			font-weight: normal;
			font-style: normal;
			/* font-size: 24px;  // Preferred icon size */
			display: inline-block;
			font-display: block;
			line-height: 1;
			text-transform: none;
			letter-spacing: normal;
			word-wrap: normal;
			white-space: nowrap;
			direction: ltr;
			-webkit-font-smoothing: antialiased; // Support for all WebKit browsers.
			text-rendering: optimizeLegibility; // Support for Safari and Chrome.
			-moz-osx-font-smoothing: grayscale; // Support for Firefox.
			font-feature-settings: "liga"; // Support for IE.
		}

		/*
		// // LOCALLY HOSTED. Material Symbols ie Variable version of icon fonts
		@font-face {
			font-family: "Material Symbols Outlined";
			font-style: normal;
			font-display: block; //stops flashing of unstyled text before icon glyph is found
			src: url("./fonts/MaterialSymbolsOutlined.woff2") format("woff2");
		}
		.material-symbols-outlined {
			font-family: "Material Symbols Outlined";
			font-weight: normal;
			font-style: normal;
			font-display: block;
			// // Preferred icon size. Disabled because .material-symbols-coutlined class gets loaded by styled components after size prop is passed so it overwrites the props. if you set font size here size does not change in icon component.
			// font-size: 24px;
			display: inline-block;
			line-height: 1;
			text-transform: none;
			letter-spacing: normal;
			word-wrap: normal;
			white-space: nowrap;
			direction: ltr;
		}
 */

		/* Box sizing rules */
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		* {
			/* Remove default margin on everything */
			margin: 0;
			/* Remove default padding on everything */
			padding: 0;
			/* Calc 'em' based line height, bigger line height for smaller font size and smaller line height for bigger font size: https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
			line-height: calc(0.25rem + 1em + 0.25rem);
		}

		/* Remove border and set sensible defaults for backgrounds, on all elements except fieldset progress and meter */
		*:where(:not(fieldset, progress, meter)) {
			border-width: 0;
			border-style: solid;
			background-origin: border-box;
			background-repeat: no-repeat;
		}
		html {
			/* Allow percentage-based heights in the application */
			block-size: 100%;
			/* Making sure text size is only controlled by font-size */
			-webkit-text-size-adjust: none;
		}

		/* Set core root defaults */
		html:focus-within {
			scroll-behavior: smooth;
		}

		/* Set core body defaults */
		body {
			/* Improve text rendering */
			-webkit-font-smoothing: antialiased;
			min-block-size: 100vh;
			text-rendering: optimizeSpeed;
			/* line-height: 1.5; */
			background-color: ${theme.color.background};
			color: ${theme.color.onBackground};
		}

		/* Improve media defaults */
		:where(img, svg, video, canvas, audio, iframe, embed, object) {
			display: block;
		}
		:where(img, svg, video) {
			block-size: auto;
			max-inline-size: 100%;
		}

		/* Remove stroke and set fill colour to the inherited font colour */
		:where(svg) {
			stroke: none;
			fill: currentColor;
		}

		/* SVG's without a fill attribute */
		:where(svg):where(:not([fill])) {
			/* Remove fill and set stroke colour to the inherited font colour */
			stroke: currentColor;
			fill: none;
			/* Rounded stroke */
			stroke-linecap: round;
			stroke-linejoin: round;
		}

		/* Set a size for SVG's without a width attribute */
		:where(svg):where(:not([width])) {
			inline-size: 5rem;
		}

		/* Remove built-in form typography styles */
		:where(input, button, textarea, select),
		:where(input[type="file"])::-webkit-file-upload-button {
			color: inherit;
			font: inherit;
			font-size: inherit;
			letter-spacing: inherit;
			word-spacing: inherit;
		}

		/* Change textarea resize to vertical only and block only if the browser supports that */
		:where(textarea) {
			resize: vertical;
		}
		@supports (resize: block) {
			:where(textarea) {
				resize: block;
			}
		}

		/* Avoid text overflows */
		:where(p, h1, h2, h3, h4, h5, h6) {
			overflow-wrap: break-word;
		}

		/* Position list marker inside */
		:where(ul, ol) {
			list-style-position: inside;
		}

		/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
		:where(ul, ol)[role="list"],
		:where(ul, ol)[class] {
			list-style: none;
		}

		/* More readable underline style for anchor tags without a class. This could be set on anchor tags globally, but it can cause conflicts. */
		a:not([class]) {
			text-decoration-skip-ink: auto;
		}

		/* Make it clear that interactive elements are interactive */
		:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
			cursor: pointer;
			touch-action: manipulation;
		}
		:where(input[type="file"]) {
			cursor: auto;
		}
		:where(input[type="file"])::-webkit-file-upload-button,
		:where(input[type="file"])::file-selector-button {
			cursor: pointer;
		}

		/* Animate focus outline */
		@media (prefers-reduced-motion: no-preference) {
			:focus-visible {
				transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
			}
			:where(:not(:active)):focus-visible {
				transition-duration: 0.25s;
			}
		}
		:where(:not(:active)):focus-visible {
			outline-offset: 5px;
		}

		/* Make sure users can't select button text */
		:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"]),
		:where(input[type="file"])::-webkit-file-upload-button,
		:where(input[type="file"])::file-selector-button {
			-webkit-tap-highlight-color: transparent;
			-webkit-touch-callout: none;
			user-select: none;
			text-align: center;
		}

		/* Disabled cursor for disabled buttons */
		:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"])[disabled] {
			cursor: not-allowed;
		}

		/* Set default font for all text */
		/* Can also create @font-face  */
		:where(p, h1, h2, h3, h4, h5, h6, span, li, figcaption, button, input, textarea, select) {
			font-family: ${theme.typescale.bodyLarge.fontFamily}, sans-serif;
			font-weight: ${theme.typescale.bodyLarge.fontWeight};
			max-width: 60ch;
		}

		/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
		@media (prefers-reduced-motion: reduce) {
			html:focus-within {
				scroll-behavior: auto;
			}

			*,
			*::before,
			*::after {
				animation-duration: 0.01ms !important;
				animation-iteration-count: 1 !important;
				transition-duration: 0.01ms !important;
				scroll-behavior: auto !important;
			}
		}
	`
);
export default GlobalStyle;
