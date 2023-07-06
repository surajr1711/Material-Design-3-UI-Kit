export const dividerWidth = ["full", "inset"] as const;
export type DividerWidth = typeof dividerWidth[number];

export const dividerOrientation = ["horizontal", "vertical"] as const;
export type DividerOrientation = typeof dividerOrientation[number];

export interface DividerProps {
	width?: DividerWidth;
	orientation?: DividerOrientation;
}

export interface DividerComponentProps extends DividerProps, React.ComponentPropsWithRef<"hr"> {}
