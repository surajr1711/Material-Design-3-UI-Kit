import { createContext } from "react";
import { fabColors, fabLayouts } from "./Fab.styles";
import { FabContextObj } from "./Fab.types";

// used for transfering styles from fab to fab.icon and fab.label
export const FabContext = createContext<FabContextObj>({
	color: fabColors.primary.content,
	sizeInRems: fabLayouts.fab.iconSizeInRems,
});
