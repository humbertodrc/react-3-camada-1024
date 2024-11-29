import {useState} from "react";

const Autenticacion = () => {
	const [token, setToken] = useState(() => {
		const tokenLocalStorage = sessionStorage.getItem("token");
		return tokenLocalStorage ? tokenLocalStorage : "";
	});

	const login = () => {
		const newTokeN = "123456";
		setToken(newTokeN);
		sessionStorage.setItem("token", newTokeN);
	};

	const logout = () => {
		setToken("");
		sessionStorage.removeItem("token");
	};

	return (
		<div>
			{token ? (
				<>
					<h1>Bienvenido, Usuario</h1>
					<button onClick={logout}>Cerrar Sesión</button>
				</>
			) : (
				<>
					<h1>Debes iniciar sesión</h1>
					<button onClick={login}>Iniciar Sesión</button>
				</>
			)}
		</div>
	);
};
export default Autenticacion;
