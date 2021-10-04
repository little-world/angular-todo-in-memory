import {Injectable} from '@angular/core';
import {Todo} from "./todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []

  constructor() { }

  getAll()  {
    return this.todos;
  }

  save(todo: Todo) {
    let newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 11;
    this.todos.push(new Todo(newId, todo.task))
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id != id)
  }
}
