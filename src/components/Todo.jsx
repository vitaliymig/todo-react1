import { useTodos } from "../hooks/useTodos";

export default function Todo({ todo }) {
    const [, dispatchTodos] = useTodos()
  const todoStatuses = {
    1: {
      text: "new",
      actionText: "Set progress",
    },
    2: {
      text: "process",
      actionText: "Set done",
    },
    3: {
      text: "done",
      actionText: "Delete",
    },
  };
  function actionTodo() {
      if (todo.status < 3) {
        dispatchTodos({type: 'NEXT_STATUS', payload: todo.id})
      } else{
        dispatchTodos({type: 'DELETE', payload: todo.id})
      }
  }
  return (
    <div className={`todo ${todoStatuses[todo.status].text}`}>
      <h2>{todo.title} </h2>
      <h3>{todoStatuses[todo.status].text}</h3>
      <p>{todo.body}</p>
      <ul>
        <li>Created: {new Date(todo.createdAt).toLocaleString()}</li>
        <li>Updated: {todo.updatedAt ? new Date(todo.updatedAt).toLocaleString() : "-"}</li>
      </ul>
      <button onClick={actionTodo}>{todoStatuses[todo.status].actionText}</button>
    </div>
  );
}
