import { createContext } from "react";
import { fabContentStyles, FabContentStyles } from "./Fab.styles";

// used for transfering styles from fab to fab.icon and fab.label
export const FabContext = createContext<FabContentStyles>(fabContentStyles.fab.primary);
