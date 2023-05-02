import React, { useContext } from "react";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Icon from "../Icon";
import Text from "../Text";
import { SegLabel } from "./Label";
import { SegInput } from "./Input";
import { SegButtonsContext, SegButtonsContextObj } from "./SegmentedButtons";
import { useUniqueID } from "../../utils/useUniqueID";

export interface SegmentedButtonProps {
	id: string; // custom ID of input to access its value
	label?: string; // the text that will be displayed
	icon?: string; // name of the material design 3 icon
	checked?: boolean; // hold checked state value
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
	id,
	label = "Option",
	icon = "circle",
	checked,
	handleChange,
}) => {
	const { groupName, inputType } = useContext(SegButtonsContext) as SegButtonsContextObj;

	// // if user doesnt provide an id then generate one.
	// const generatedID = useUniqueID();
	// const ID = id || generatedID;

	return (
		<SegLabel htmlFor={id}>
			<SegInput type={inputType} id={id} checked={checked} name={groupName} onChange={handleChange} />
			<StateLayer stateLayerColor="onSecondaryContainer" />
			<ContentLayer>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
					{checked ? "check" : icon}
				</Icon>
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</ContentLayer>
		</SegLabel>
	);
};

export default SegmentedButton;
