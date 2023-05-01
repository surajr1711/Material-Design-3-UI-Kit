import React, { useContext } from "react";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Icon from "../Icon";
import Text from "../Text";
import { SegLabel } from "./Label";
import { SegInput } from "./Input";
import { SegButtonsContext, SegButtonsContextObj } from "./SegmentedButtons";
import { useUniqueID } from "../../utils/useUniqueID";

export interface SegmentedButtonProps {
	id?: string; // custom ID of input to access its value
	label: string; // the text that will be displayed
	icon: string; // name of the material design 3 icon
	defaultChecked?: boolean; // if user wants to set initial value of label as checked
}

const SegmentedButton: React.FC<SegmentedButtonProps> = ({ id, label, icon, defaultChecked }) => {
	const { groupName, inputType } = useContext(SegButtonsContext) as SegButtonsContextObj;

	// if user doesnt provide an id then generate one.
	const generatedID = useUniqueID();
	const ID = id || generatedID;

	return (
		<SegLabel htmlFor={ID}>
			<SegInput type={inputType} id={ID} checked={defaultChecked} name={groupName} />
			<StateLayer stateLayerColor="onSecondaryContainer" />
			<ContentLayer>
				<Icon color="onSurface" sizeInRems={1.125}>
					{icon}
				</Icon>
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</ContentLayer>
		</SegLabel>
	);
};

export default SegmentedButton;
