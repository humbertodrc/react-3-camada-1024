import { useTodos } from '../hooks/useTodos';
import ListItem from "./ListItem";

const List = () => {
  
  const {todos, handleToggleCompletedTodo, handleDeleteTodo } = useTodos()

	return (
		<ul>
			{todos?.map((todoList) => (
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
