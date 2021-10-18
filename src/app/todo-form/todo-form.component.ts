import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo = new Todo()

  @Input() todoList!: TodoListComponent;

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {}

  add() {
    console.log ("save " + this.todo)

    let td = new Todo()
    td.id = this.todoList.todos.length + 1
    td.task = this.todo.task

    this.todoService.save(td).subscribe(
      (todo: Todo) => {
        this.todoList.getAll()
      },
      //error => console.log("error " + error)

  )
  }
}

