import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 11, task: 'task1' },
      { id: 12, task: 'task2' },
      { id: 13, task: 'task3' },
      { id: 14, task: 'task4' },
      { id: 15, task: 'task5' }
    ];
    return {todos};
  }

   genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
