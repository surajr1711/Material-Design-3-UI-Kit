import { useState } from "react";

export const useUniqueID = (): string => {
	const [id] = useState(crypto.randomUUID());
	return id;
};
