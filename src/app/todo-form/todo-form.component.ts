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
  todo = new Todo(0, "");

  @Input() todoList!: TodoListComponent;

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {}

  add() {
    this.todoService.save(this.todo)
    this.todoList.getAll()
  }
}

