"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeProvider = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	if (mount) return <div className={theme}>{children}</div>;
};
export default ThemeProvider;
