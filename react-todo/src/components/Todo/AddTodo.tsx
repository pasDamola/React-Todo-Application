import { ChangeEvent, KeyboardEvent, useState } from "react";

function AddTodo() {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
    }
  };
  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default AddTodo;
