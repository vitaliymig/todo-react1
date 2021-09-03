import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [, dispatchTodos] = useTodos();

  function addTodo(e) {
    e.preventDefault();
    dispatchTodos({ type: "ADD_TODO", payload: {title, body} });
    setTitle("");
    setBody("");
  }
  return (
    <form onSubmit={addTodo} className="add-todo">
      <h2>Add new todo</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
      <button type="submit">Add new todo</button>
    </form>
  );
}
