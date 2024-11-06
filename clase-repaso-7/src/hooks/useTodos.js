import {useState} from "react";

const INITIAL_TODOS = [
	{id: crypto.randomUUID(), text: "Comprar pan", completed: false},
	{id: crypto.randomUUID(), text: "Estudiar React", completed: true},
];

export const useTodos = () => {
	const [todos, setTodos] = useState(INITIAL_TODOS);
	const [todo, setTodo] = useState({
		id: "",
		text: "",
		completed: false,
	});

	const handleAddTodoOnchange = (event) => {
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
    console.log(id);
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

	return {
		todos,
		todo,
		handleAddTodoOnchange,
		handleAddTodoSubmit,
		handleToggleCompletedTodo,
		handleDeleteTodo,
	};
};
