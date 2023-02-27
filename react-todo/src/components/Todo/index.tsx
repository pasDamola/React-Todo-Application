import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export type TodoProps = {
  id: string;
  item: string;
  done: boolean;
};

const dummyTodos: TodoProps[] = [
  {
    id: "4859489484",
    item: "buy car",
    done: false,
  },
  {
    id: "458498549",
    item: "buy paint",
    done: false,
  },
  {
    id: "57847847854",
    item: "buy sugar",
    done: true,
  },
];

function Todo() {
  const [todos, setTodos] = useState(dummyTodos);

  const handleAddTodo = (todo: any) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default Todo;
