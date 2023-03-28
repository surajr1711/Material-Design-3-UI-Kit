import styled from "styled-components";
import { Stack, Frame, PadBox, Inline } from "@bedrock-layout/primitives";
import { shape } from "../../styles/shape";
import Text from "../Text";
import Button from "../Button";

export const CardImage = styled.div`
	background-color: ${(props) => props.theme.color.primaryContainer};
`;

export const placeholder = (
	<Stack>
		{/* Media block */}
		<Frame ratio="16/9" style={{ borderRadius: `${shape.rounded.medium}` }}>
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
				<Inline>
					<Button>Buy Tickets</Button>
				</Inline>
			</Stack>
		</PadBox>
	</Stack>
);
