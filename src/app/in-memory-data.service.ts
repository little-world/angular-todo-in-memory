import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todos = [
      { id: 11, task: 'task1' },
      { id: 12, task: 'task2' },
      { id: 13, task: 'task3' },
      { id: 14, task: 'task4' },
      { id: 15, task: 'task5' }
    ];
    return {todos};


  }


}
