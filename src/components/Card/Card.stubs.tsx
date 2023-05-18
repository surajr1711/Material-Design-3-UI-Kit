import styled from "styled-components";
import { Stack, Frame, PadBox, Inline } from "@bedrock-layout/primitives";
import Text from "../Text";
import Button from "../Button";

export const CardImage = styled.div`
	background-color: ${(props) => props.theme.color.primary};
	border-radius: ${(props) => props.theme.shape.rounded.medium};
`;

export const placeholder = (
	<Stack>
		{/* Media block */}
		<Frame ratio="16/9">
			<CardImage />
		</Frame>
		<PadBox padding="1rem">
			<Stack gutter="2rem">
				{/* Text block */}
				<Stack gutter="0.5rem">
					<Text typescale="headlineLarge">Glass Souls' World Tour</Text>
					<Text typescale="bodySmall">From your recent favorites</Text>
				</Stack>
				{/* Actions block */}
				{/* <Inline>
					<Button label="Buy Tickets" />
				</Inline> */}
			</Stack>
		</PadBox>
	</Stack>
);
