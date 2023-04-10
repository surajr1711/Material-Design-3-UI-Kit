import React from "react";

export const badgeTypeKeys = ["small", "large", "largeMax"] as const;
export type BadgeType = typeof badgeTypeKeys[number];

export interface BadgeProps extends React.ComponentPropsWithRef<"div"> {
	count?: number;
}
