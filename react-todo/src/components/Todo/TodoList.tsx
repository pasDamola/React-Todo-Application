import { TodoProps } from "./index";

type TodoListProps = {
  todos: TodoProps[];
  toggleCompleted: (id: string) => void;
};

function TodoList({ todos, toggleCompleted }: TodoListProps) {
  const handleClick = (id: string) => {
    toggleCompleted(id);
  };
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            style={
              todo.done ? { textDecoration: "line-through", color: "#666" } : {}
            }
          >
            {todo.item}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
