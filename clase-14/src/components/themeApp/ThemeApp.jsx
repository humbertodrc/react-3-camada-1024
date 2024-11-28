import {useState} from "react";
import styles from "./ThemeApp.module.css";

const ThemeApp = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className={styles.container}>
			<h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
export default ThemeApp;
