import {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const INITIAL_TODOS = [
	{id: crypto.randomUUID(), text: "Comprar pan", completed: false},
	{id: crypto.randomUUID(), text: "Estudiar React", completed: true},
];

function App() {
	const [todos, setTodos] = useState(INITIAL_TODOS);
	const [todo, setTodo] = useState({
		id: "",
		text: "",
		completed: false,
	});

	const handleAddTodoOnchnge = (event) => {
		setTodo({
			...todo,
			text: event.target.value,
		});
	};

	const handleAddTodoSubmit = (event) => {
		event.preventDefault();

		if (todo.text.trim() === "") {
			return;
		}

		event.preventDefault();
		setTodos([
			...todos,
			{
				...todo,
				id: crypto.randomUUID(),
			},
		]);

		setTodo({
			id: "",
			text: "",
			completed: false,
		});
	};

	const handleToggleCompletedTodo = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				};
			}

			return todo;
		});

		setTodos(newTodos);
	};

	const handleDeleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
	};

	return (
		<main>
			<div>
				<h2>Total de tares {todos.length}</h2>
				<Form
					handleAddTodoSubmit={handleAddTodoSubmit}
					value={todo.text}
					handleAddTodoOnchnge={handleAddTodoOnchnge}
				/>
				<List
					todos={todos}
					handleToggleCompletedTodo={handleToggleCompletedTodo}
          handleDeleteTodo={handleDeleteTodo}
				/>
			</div>
		</main>
	);
}

export default App;
