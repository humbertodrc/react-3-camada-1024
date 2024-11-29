import {useState} from "react";
import styles from "./ThemeApp.module.css";

const ThemeApp = () => {
	const [theme, setTheme] = useState(() => {
		const themeLocalStorage = localStorage.getItem("theme");
		return themeLocalStorage ? themeLocalStorage : "light";
	});

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	};

	return (
		<div className={`${styles.container}
			${ theme === "light" ? styles.light : styles.dark}
		`}>
			<h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
export default ThemeApp;
