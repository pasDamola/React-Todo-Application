import { TodoProps } from "./index";

type TodoListProps = {
  todos: TodoProps[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.item}</li>;
      })}
    </ul>
  );
}

export default TodoList;
