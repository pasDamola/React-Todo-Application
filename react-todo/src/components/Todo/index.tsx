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
    done: false,
  },
];

function Todo() {
  const [todos, setTodos] = useState(dummyTodos);

  const handleAddTodo = (todo: any) => {
    setTodos([...todos, todo]);
  };

  const handleToggle = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // Create a *new* object with changes
        console.log(todo.done);
        return { ...todo, done: !todo.done };
      } else {
        // No changes
        return todo;
      }
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList toggleCompleted={handleToggle} todos={todos} />
    </>
  );
}

export default Todo;
