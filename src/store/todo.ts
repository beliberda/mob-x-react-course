import { makeAutoObservable } from "mobx";

interface ITodo {
  id: number;
  title: string | { [key: string]: string };
  completed: boolean;
}

class Todo {
  todos: ITodo[] = [
    {
      id: 1,
      title: {
        title: "This is",
        text: "This is text",
      },
      completed: false,
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
    },
    {
      id: 3,
      title: "Learn TS",
      completed: false,
    },
  ];
  constructor() {
    // Свойство deep нужно для отслеживания изменения вложенных полей объектов
    // Во вторых опциях можно указывать напрямую, что хотим отслеживать
    makeAutoObservable(this, {}, { deep: true });
  }
  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  completeTodo(id: number) {
    // Проходим по массиву мапом, если встречаем с нужным айдишником, устанавливаем новый объект с обновленным полем completed, иначе просто возвращаем объект
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
