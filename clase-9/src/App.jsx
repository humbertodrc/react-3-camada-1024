import { useState } from 'react';
import "./App.css";
import { useEffect } from 'react';
import Message from './components/Message';
import Characters from './components/Characters';

function App() {

  const [formData, setformData] = useState({
    user: 'humberto',
    password: ''
	})
	
	const { user, password } = formData
	
	const handleChange = ({ target }) => {
		const { name, value } = target

		setformData({
			...formData,
			[name]: value
		})
		
	}
	
	// Uso de useEffect
	useEffect(() => {
		console.log('Se montó el componente');
	}, [])

	useEffect(() => {
		console.log('Escuchando el input user');
	}, [user])

	return (
		<main>
			{/* <form>
				<div>
					<label htmlFor="user">Usuario</label>
					<input
						type="text"
						id="user"
						name="user"
						value={user}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleChange}
					/>
				</div>
			</form> */}
			{/* {user === 'humberto' ? <Message /> : null} */}

			<Characters />
		</main>
	);
}

export default App;
