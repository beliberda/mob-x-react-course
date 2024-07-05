import { FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import todo from "./store/todo";
interface TodoProps {}

const TodoList: FunctionComponent<TodoProps> = observer(() => {
  return (
    <div className="todo-list">
      {todo.todos.map((t) => {
        return (
          <div className="todo-item" key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => todo.completeTodo(t.id)}
            />
            <h2>{typeof t.title == "string" ? t.title : t.title.title}</h2>
            <button onClick={() => todo.removeTodo(t.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
});

export default TodoList;
