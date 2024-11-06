import { useTodos } from '../hooks/useTodos';

const Form = () => {
  
  const { handleAddTodoSubmit, todo , handleAddTodoOnchange } = useTodos()

	return (
		<form onSubmit={handleAddTodoSubmit}>
			<div>
				<label htmlFor="name">Tarea:</label>
				<input
					value={todo.text}
					onChange={handleAddTodoOnchange}
					type="text"
					id="todo"
					name="todo"
				/>
			</div>
			<button type="submit">Agregar</button>
		</form>
	);
};
export default Form;
