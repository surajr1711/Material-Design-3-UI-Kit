import React from "react";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Icon from "../Icon";
import Text from "../Text";
import SegLabel from "./SegmentedLabel";
import SegInput from "./SegmentedInput";
import { SegmentedButtonProps, ShowIconOrLabel } from "./SegmentedButtons.types";
import { useSegButtonsContext } from "./useSegButtonsContext";

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
	id, // user must provide an id
	label = "Option",
	icon = "circle",
	checked,
	handleChange,
}) => {
	// const { groupName, inputType } = useContext(SegButtonsContext) as SegButtonsContextObj;
	const { groupName, inputType, showIconOrLabel } = useSegButtonsContext();

	// // if user doesnt provide an id then generate one.
	// const generatedID = useUniqueID();
	// const ID = id || generatedID;

	const bothIconAndLabel = (
		<>
			<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
				{checked ? "check" : icon}
			</Icon>
			<Text tag="span" typescale="labelLarge" color="onSurface">
				{label}
			</Text>
		</>
	);

	const onlyIcon = (
		<>
			<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={checked}>
				{checked ? "check" : "close"}
			</Icon>
			<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
				{icon}
			</Icon>
		</>
	);

	const onlyLabel = (
		<>
			<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={checked}>
				{checked ? "check" : "close"}
			</Icon>
			<Text tag="span" typescale="labelLarge" color="onSurface">
				{label}
			</Text>
		</>
	);

	const contentMap: { [T in ShowIconOrLabel]: React.ReactNode } = {
		bothIconAndLabel: bothIconAndLabel,
		onlyIcon: onlyIcon,
		onlyLabel: onlyLabel,
	};

	return (
		<SegLabel htmlFor={id}>
			<SegInput type={inputType} id={id} checked={checked} name={groupName} onChange={handleChange} />
			<StateLayer stateLayerColor="onSecondaryContainer" />
			<ContentLayer>{contentMap[showIconOrLabel]}</ContentLayer>
		</SegLabel>
	);
};

export default SegmentedButton;
