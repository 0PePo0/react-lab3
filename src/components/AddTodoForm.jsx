import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <Button type="submit" style = {{maxwidht: 10n, backgroundColor: "#7ea17fff",}}>Add</Button>
    </form>
  );
}
