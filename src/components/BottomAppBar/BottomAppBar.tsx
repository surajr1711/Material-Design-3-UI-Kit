import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import IconButton from "../IconButton";
import { StyledBottomAppBar, StyledIconsBar } from "./BottomAppBar.styles";
import { twoIconButtons } from "./bottomAppBarStubs";
import FAB from "../Fab/Fab";

interface BottomAppBarProps {
	iconButtons: string[]; // min2 max4 iconbuttons data
	fab?: {
		icon: string;
		tooltip?: string;
	};
}

// TODO
// overflow menu item
// overflow menu
// passing props by user such as onclick handler

const BottomAppBar: React.FC<BottomAppBarProps> = ({ iconButtons, fab, ...props }) => {
	// Do not render icon buttons if less than 2 or more than 4
	const arrLength: boolean = iconButtons && iconButtons.length <= 4 && iconButtons.length >= 2;

	return (
		<StyledBottomAppBar {...props}>
			<StyledIconsBar>
				{arrLength && iconButtons.map((icon) => <IconButton key={uuid()} icon={icon} type="standard" />)}
			</StyledIconsBar>
			<div>{fab && fab.icon && <FAB icon={fab?.icon} tooltip={fab?.tooltip} />}</div>
		</StyledBottomAppBar>
	);
};

BottomAppBar.propTypes = {
	iconButtons: (props, propName, componentName): Error | null => {
		if (!propName || propName.length > 4 || propName.length < 2) {
			return new Error(`${componentName} expects prop ${propName} to have 2 to 4 icon buttons.`);
		}
		return null;
	},
	fab: PropTypes.oneOfType([
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
		}),
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			tooltip: PropTypes.string,
		}),
	]),
};

BottomAppBar.defaultProps = {
	iconButtons: twoIconButtons, // no default props here. dev has to provide data
	// elevation: 2,
	// no need. fab has default props already
};

export default BottomAppBar;
