import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoProps } from ".";

type AddTodoProps = {
  handleAddTodo: (todo: TodoProps) => void;
};

function AddTodo({ handleAddTodo }: AddTodoProps) {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      const todoItem = { id: uuid(), item: todoInput, done: false };
      handleAddTodo(todoItem);

      setTodoInput("");
    }
  };
  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        value={todoInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default AddTodo;
