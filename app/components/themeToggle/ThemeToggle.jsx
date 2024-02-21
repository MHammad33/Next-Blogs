"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			className={styles.container}
			onClick={toggleTheme}
			style={
				theme === "dark" ? { background: "black" } : { background: "#ccc" }
			}
		>
			<Image src="/moon.png" width="14" height="14" alt="moon" />
			<div
				className={styles.ball}
				style={theme === "dark" ? { right: 1 } : { left: 1 }}
			></div>
			<Image src="/sun.png" width="14" height="14" alt="sun" />
		</div>
	);
};
export default ThemeToggle;
