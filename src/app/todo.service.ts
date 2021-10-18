import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private todoUrl: string = 'api/todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
      );
  }

  save(todo: Todo): Observable<Todo> {
    console.log ('in service post')
    return this.http.post<Todo>(this.todoUrl, todo)
      .pipe(
        tap((newTodo: Todo) => console.log(`added todo w/ id=${newTodo.id}`)),
      )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.todoUrl + '/' + id, this.httpOptions)
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(td => td.id)) + 1 : 11;
  }
}
