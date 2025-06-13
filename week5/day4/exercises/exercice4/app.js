import { TodoList } from "./todo.js";

const myTodo = new TodoList();
myTodo.addTask("Learn Node.js");
myTodo.addTask("Build a project");
myTodo.completeTask(0);
myTodo.listTasks();
