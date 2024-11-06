
const ListItem = ({todoList, handleToggleCompletedTodo, handleDeleteTodo}) => {

	return (
		<li key={todoList.id}>
			<input
				checked={todoList.completed}
				type="checkbox"
				onChange={() => handleToggleCompletedTodo(todoList.id)}
			/>
			<span>{todoList.text}</span>
			<button onClick={() => handleDeleteTodo(todoList.id)}>Eliminar</button>
		</li>
	);
};
export default ListItem;
