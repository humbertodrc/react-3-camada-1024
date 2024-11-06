import ListItem from "./ListItem";

const List = ({todos, handleToggleCompletedTodo, handleDeleteTodo}) => {
	return (
		<ul>
			{todos.map((todoList) => (
				<ListItem
					key={todoList.id}
					todoList={todoList}
					handleToggleCompletedTodo={handleToggleCompletedTodo}
					handleDeleteTodo={handleDeleteTodo}
				/>
			))}
		</ul>
	);
};
export default List;
