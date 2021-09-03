import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";

export default function TodoList() {
  const [todos] = useTodos();
  return (
    <div className="todos">
      {todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
      {todos.length === 0 && <h3 className="todos-empty">Новых задач нет :)</h3>}
    </div>
  )};


























  // export default function TodoList() {
  //   const [todos] = useTodos();
  //   return (
  //     <div className="todos">
  //       {todos.length > 0 && todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
  //       {todos.length === 0 && <h3 className="todos-empty">Новых задач нет :)</h3>}
  //     </div>
  //   )};