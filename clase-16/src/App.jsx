import "./App.css";

function App() {
	return (
		<section>
			<h1>Custom Hook</h1>
			<form>
				<div>
					<label htmlFor="name">Nombre</label>
					<input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Enviar</button>
			</form>
		</section>
	);
}

export default App;
