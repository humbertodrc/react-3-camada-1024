const Form = ({handleAddTodoSubmit, value, handleAddTodoOnchnge}) => {
	return (
		<form onSubmit={handleAddTodoSubmit}>
			<div>
				<label htmlFor="name">Tarea:</label>
				<input
					value={value}
					onChange={handleAddTodoOnchnge}
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
