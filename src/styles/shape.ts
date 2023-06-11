export const shapeFamilyKeys = ["rounded", "cut"] as const;
export type ShapeFamily = typeof shapeFamilyKeys[number];

export const shapeScaleKeys = [
	"none",
	"extraSmall", // 4px
	"extraSmallTop", // 4px
	"small", // 8px
	"medium", // 12px
	"large", // 16px
	"largeEnd",
	"largeTop",
	"extraLarge", // 28px
	"extraLargeTop",
	"full",
] as const;
export type ShapeScale = typeof shapeScaleKeys[number];

type ShapeObj = {
	[F in ShapeFamily]: {
		[S in ShapeScale]: string;
	};
};

// Cut shape requires clip path css. But to create chamfered borders its more complex so keeping values for 'cut' as none for now. May be use pseudo element or seperate border component?
export const shape: ShapeObj = {
	rounded: {
		none: "none",
		extraSmall: "0.25rem",
		extraSmallTop: "0.25rem 0.25rem 0 0",
		small: "0.5rem",
		medium: "0.75rem",
		large: "1rem",
		largeEnd: "0 1rem 1rem 0",
		largeTop: "1rem 1rem 0 0",
		extraLarge: "1.75rem",
		extraLargeTop: "1.75rem 1.75rem 0 0",
		full: "999rem",
	},
	cut: {
		none: "none",
		extraSmall: "none",
		extraSmallTop: "none",
		small: "none",
		medium: "none",
		large: "none",
		largeEnd: "none",
		largeTop: "none",
		extraLarge: "none",
		extraLargeTop: "none",
		full: "none",
	},
};
