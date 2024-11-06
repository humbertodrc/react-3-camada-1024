import {useState} from "react";
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
				<List />
			</div>
		</main>
	);
}

export default App;
