import "./App.css";

function App() {
	return (
		<main>
			<form>
				<div>
					<label htmlFor="name">Tarea:</label>
					<input type="text" id="todo" name="todo" />
				</div>
				<button type="submit">Agregar</button>
			</form>
			<div>
				<h2>Tareas</h2>
				<ul>
					<li>
						<input type="checkbox" />
						<span>Comprar pan</span>
						<button>Eliminar</button>
					</li>
					<li>
						<input type="checkbox" />
						<span>Estudiar React</span>
						<button>Eliminar</button>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default App;
