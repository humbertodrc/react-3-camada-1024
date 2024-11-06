import { useTodos } from '../hooks/useTodos';

const Form = () => {
  
  const { handleAddTodoSubmit, todo: value, handleAddTodoOnchange } = useTodos()
  console.log(value);

	return (
		<form onSubmit={handleAddTodoSubmit}>
			<div>
				<label htmlFor="name">Tarea:</label>
				<input
					value={value.name}
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
