import { useState } from 'react';
import "./App.css";

function App() {

  const [formData, setformData] = useState({
    user: '',
    password: ''
  })

	return (
		<main>
			<form>
				<div>
					<label htmlFor="user">Usuario</label>
					<input type="text" id="user" name="user" />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id="password" name="password" />
				</div>
			</form>
		</main>
	);
}

export default App;
