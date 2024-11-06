import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import {useTodos} from "./hooks/useTodos";

function App() {
	const {todos} = useTodos();
	return (
		<main>
			<div>
				<h2>Total de tares {todos?.length}</h2>
				<Form />
				<List todos={todos} />
			</div>
		</main>
	);
}

export default App;
