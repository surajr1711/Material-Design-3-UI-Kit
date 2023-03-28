import styled, { css } from "styled-components";
// import PropType from "prop-types";

// interface DeviceTemplateProps {
// 	children?: JSX.Element;
// 	render?: boolean;
// }

const DeviceTemplate = styled.div(
	({ theme }) => css`
		--storybook-canvas-padding: 1rem;

		width: calc(100vw - (2 * var(--storybook-canvas-padding)));
		height: calc(100vh - (2 * var(--storybook-canvas-padding)));
		border: 0.5rem solid ${theme.color.outlineVariant};
		border-radius: ${theme.shape.rounded.extraLarge};
		overflow: hidden;
		position: relative;
		padding-inline: 1rem;

		// pill
		&::after {
			content: "";
			position: absolute;
			left: calc(50% - 2.25rem);
			bottom: 0.5rem;
			width: 4.5rem;
			height: 0.125rem;
			background-color: ${theme.color.onSurface};
			border-radius: ${theme.shape.rounded.full};
		}
	`
);

// const DeviceTemplate: React.FC<DeviceTemplateProps> = ({ children = <div />, render = true }) => {
// 	if (!render) return null;
// 	return <StyledDeviceTemplate>{children}</StyledDeviceTemplate>;
// };
// DeviceTemplate.displayName = "Device Template";

// // PROPTYPES
// DeviceTemplate.propTypes = {
// 	children: PropType.element,
// 	render: PropType.bool,
// };

export default DeviceTemplate;
