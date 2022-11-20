import styled, { css } from "styled-components";

export type DensityInRemsType = 0 | 0.25 | 0.5 | 0.75;
// export type DensityInRemsType = '2.5rem' | '2.25rem' | '2rem' | '1.75rem';
export type OptionsNumType = 2 | 3 | 4 | 5;

interface StyledSegmentedButtonsProps {
	optionsNum: OptionsNumType;
	densityInRems?: DensityInRemsType;
}

export const StyledSegmentedButtons = styled.fieldset<StyledSegmentedButtonsProps>(
	({ optionsNum, densityInRems }) => css`
		height: ${densityInRems}rem;
		display: inline-grid;
		grid-template-columns: repeat(${optionsNum}, minmax(3rem, 1fr));
		align-items: center;
		border: none;
		padding: 0;
		overflow: hidden;
	`
);

StyledSegmentedButtons.defaultProps = {
	optionsNum: 2,
	densityInRems: 0,
};
