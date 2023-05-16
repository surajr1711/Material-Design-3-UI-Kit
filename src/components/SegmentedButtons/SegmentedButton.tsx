import React from "react";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Icon from "../Icon";
import Text from "../Text";
import SegLabel from "./SegmentedLabel";
import SegInput from "./SegmentedInput";
import { SegmentedButtonProps, ShowIconOrLabel } from "./SegmentedButtons.types";
import { useSegButtonsContext } from "./useSegButtonsContext";
import styled from "styled-components";

// Creates the correct space for segment button by wrapping a check icon and the icon/label but visibility is hidden.
const SpaceAllocator = styled.div`
	visibility: hidden;
`;
// Wraps the content of segment button which will be disaplyed ie checkmark and icon/label. takes the full space for check and icon/label which is created by space allocator.
const ContentWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	gap: 0.5rem;
`;

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

	// Type of content icon, label or both
	const bothIconAndLabel = (
		<>
			<SpaceAllocator>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={false}>
					check
				</Icon>
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</SpaceAllocator>
			<ContentWrapper>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
					{checked ? "check" : icon}
				</Icon>
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</ContentWrapper>
		</>
	);

	const onlyIcon = (
		<>
			<SpaceAllocator>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={false}>
					check
				</Icon>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={false}>
					{icon}
				</Icon>
			</SpaceAllocator>
			<ContentWrapper>
				{checked && (
					<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
						check
					</Icon>
				)}
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
					{icon}
				</Icon>
			</ContentWrapper>
		</>
	);

	const onlyLabel = (
		<>
			<SpaceAllocator>
				<Icon color="onSurface" sizeInRems={1.125} variant="outlined" visibility={false}>
					check
				</Icon>
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</SpaceAllocator>
			<ContentWrapper>
				{checked && (
					<Icon color="onSurface" sizeInRems={1.125} variant="outlined">
						check
					</Icon>
				)}
				<Text tag="span" typescale="labelLarge" color="onSurface">
					{label}
				</Text>
			</ContentWrapper>
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
